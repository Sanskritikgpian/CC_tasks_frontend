import React from "react";
import { useHistory } from "react-router-dom";
import "./AppointmentCard.css";
// material-ui
import { Button } from "@mui/material";
// constants
import { VIDEO_CALL_ROUTE } from "../../../constants/routes";

const AppointmentCard = ({ appointment }) => {
    const history = useHistory();

    const handleCall = () => {
        history.push(VIDEO_CALL_ROUTE);
    };

    return (
        <div className="appointmentCard">
            <p>{appointment.firstName}</p>
            <p>{appointment.lastName}</p>
            <p>{appointment.email}</p>
            <p>{appointment.rollNum}</p>
            <p>{appointment.date}</p>
            <p>{appointment.detail}</p>
            <Button onClick={() => handleCall()}>Join</Button>
        </div>
    );
};

export default AppointmentCard;
