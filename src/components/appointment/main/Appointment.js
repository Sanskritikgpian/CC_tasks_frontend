import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import "./Appointment.css";
// Endpoints
import { BOOK_APPOINTMENT_ENDPOINT } from "../../../constants/endpoints";
// components
import Loader from "../../loader/Loader";
// material ui
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const Appointment = () => {
    // states
    const [inProgress, setInProgress] = useState(false);
    const [alert, setAlert] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [rollNum, setRollNum] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    // errors
    const [firstNameErr, setFirstNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);
    const [rollNumErr, setRollNumErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    // disable browser auto-complete
    const disableAutoComplete = { autoComplete: "new-password", form: { autoComplete: "off" } };

    const handleAppointment = e => {
        e.preventDefault();

        // error checks
        setFirstNameErr(!firstName);
        setLastNameErr(!lastName);
        setRollNumErr(!rollNum);
        setEmailErr(!email);

        // email check
        setErrorMsg(!validator.isEmail(email) ? "Please, enter a proper email." : "");

        // appointment
        if (firstName && lastName && rollNum && validator.isEmail(email)) {
            setInProgress(true);
            const data = { firstName, lastName, rollNum, email, date: date.toString().substring(0, 15), time: time.toString().substring(16, 24) }

            try {
                axios.post(BOOK_APPOINTMENT_ENDPOINT, data)
                    .then(() => { setInProgress(false); setAlert(true) })
                    .catch(() => { setInProgress(false); });
            } catch (err) { setInProgress(false); }

            clearForm();
        }
    };

    const clearForm = () => {
        setErrorMsg("");
        setFirstName("");
        setLastName("");
        setRollNum("");
        setEmail("");
        setDate(new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' }));
        setTime(new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' }));
    };

    return (
        <div className="appointment">
            {inProgress ? <Loader /> : null}
            <Snackbar open={alert} autoHideDuration={15000} onClose={() => setAlert(false)}>
                <Alert onClose={() => setAlert(false)} severity="success" sx={{ width: "100%" }}>
                    Appointment booked!
                </Alert>
            </Snackbar>
            <form className="appointment__form" onSubmit={e => handleAppointment(e)}>
                <h1 style={{ color: "teal" }}>Book an appointment today.</h1>
                <div className="appointment__info">
                    <TextField variant="standard" label="First Name" error={firstNameErr} helperText={firstNameErr ? "Please, enter your first name." : ""} value={firstName} onChange={e => setFirstName(e.target.value)} style={{ marginRight: "10px" }} inputProps={disableAutoComplete} />
                    <TextField variant="standard" label="Last Name" error={lastNameErr} helperText={lastNameErr ? "Please, enter your last name." : ""} value={lastName} onChange={e => setLastName(e.target.value)} style={{ marginLeft: "10px" }} inputProps={disableAutoComplete} />
                </div>
                <div className="appointment__info">
                    <TextField variant="standard" label="Email" error={emailErr} helperText={emailErr ? "Please, enter your email." : ""} value={email} onChange={e => setEmail(e.target.value)} style={{ marginRight: "10px" }} inputProps={disableAutoComplete} />
                    <TextField variant="standard" label="Roll Number" error={rollNumErr} helperText={rollNumErr ? "Please, enter your roll number." : ""} value={rollNum} onChange={e => setRollNum(e.target.value)} style={{ marginLeft: "10px" }} inputProps={disableAutoComplete} />
                </div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className="appointment__dateTime">
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={date}
                            onChange={newValue => setDate(newValue)}
                            renderInput={params => <TextField {...params} />}
                        />
                        <StaticTimePicker
                            displayStaticWrapperAs="mobile"
                            value={time}
                            onChange={newValue => setTime(newValue)}
                            renderInput={params => <TextField {...params} />}
                        />
                    </div>
                </LocalizationProvider>
                {errorMsg ? <p className="appointment__errMsg">{errorMsg}</p> : null}
                <div className="appointment__buttons">
                    <Button style={{ marginRight: "2.5px", backgroundColor: "grey" }} onClick={() => clearForm()}>Clear</Button>
                    <Button type="submit" style={{ marginLeft: "2.5px", backgroundColor: "teal" }}>Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;
