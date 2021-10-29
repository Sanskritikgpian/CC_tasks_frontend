import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = ({ appointment }) => {
    return (
        <div className="appointmentCard">
            <p>{appointment.firstName}</p>
            <p>{appointment.lastName}</p>
            <p>{appointment.email}</p>
            <p>{appointment.rollNum}</p>
            <p>{appointment.date}</p>
            <p>{appointment.detail}</p>
        </div>
    );
};

export default AppointmentCard;
