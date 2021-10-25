import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Appointments.css";
// constants
import { GET_APPOINTMENTS_ENDPOINT } from "../../../constants/endpoints";
import { BLOG_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../../../constants/routes";
// components
import Loader from "../../loader/Loader";
import AppointmentCard from "../appointmentCard/AppointmentCard";
// material-ui
import { Button, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
// contexts
import UserContext from "../../../contexts/User";

const Appointments = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        try {
            setLoading(true);
            axios.get(GET_APPOINTMENTS_ENDPOINT)
                .then(res => {
                    setAppointments(res.data);
                    setLoading(false);
                })
                .catch(err => { setLoading(false); });
        } catch (err) { setLoading(false); };
    }, [])

    const handleSignOut = () => {
        localStorage.removeItem("cc_task");
        history.push(SIGN_IN_ROUTE);
    };

    return (
        <div className="appointments">
            {loading ? <Loader /> : null}
            <div className="appointments__intro">
                <h1>Welcome to CC Blog</h1>
                <p>A person's most beautiful useful asset is not a head full of knowledge, but a heart full of love, an ear ready to listen and a hand willing to help others.</p>
                <div className="appointments__introButtons">
                    <Button onClick={() => window.scrollTo(0, window.innerHeight - 75)}>Go through appointments</Button>
                </div>
            </div>
            {appointments.map((appointment, index) => <AppointmentCard key={index} appointment={appointment} />)}
            <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'fixed', right: 10, bottom: 10 }} icon={<SpeedDialIcon style={{ color: "white" }} />}>
                <SpeedDialAction key={"go to blog"} icon={<PostAddRoundedIcon />} tooltipTitle={"go to blog"} onClick={() => history.push(BLOG_ROUTE)} />
                {!user ? <SpeedDialAction key={"Sign in for counsellors"} icon={<VpnKeyRoundedIcon />} tooltipTitle={"Sign in for counsellors"} onClick={() => history.push(SIGN_IN_ROUTE)} /> : null}
                {!user ? <SpeedDialAction key={"Sign up for counsellors"} icon={<PersonAddRoundedIcon />} tooltipTitle={"Sign up for counsellors"} onClick={() => history.push(SIGN_UP_ROUTE)} /> : null}
                {user ? <SpeedDialAction key={"Sign out for counsellors"} icon={<ExitToAppRoundedIcon />} tooltipTitle={"Sign out for counsellors"} onClick={() => handleSignOut()} /> : null}
            </SpeedDial>
        </div>
    );
};

export default Appointments;
