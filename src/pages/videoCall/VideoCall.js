import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./VideoCall.css";
import socket from "../../Socket";
// constants
import { BLOG_ROUTE } from "../../constants/routes";
// material-ui
import { IconButton } from "@mui/material";
import CallEndRoundedIcon from "@mui/icons-material/CallEndRounded";

const VideoCall = ({ inCall }) => {
    const history = useHistory();
    const myVideo = useRef();
    // const friendVideo = useRef();

    useEffect(() => {
        // cam setup
        const camSetup = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (myVideo.current)
                myVideo.current.srcObject = stream;
        };
        camSetup();
    }, []);

    return (
        <div className="videoCall">
            <IconButton className="videoCall__endBtn" onClick={() => history.push(BLOG_ROUTE)}><CallEndRoundedIcon /></IconButton>
            <video className="videoCall__myVideo" ref={myVideo} playsInline autoPlay muted style={inCall ? { width: "150px", height: "100px", top: "calc(100vh - 100px)", left: "calc(100vw - 150px)", borderRadius: "3px" } : {}} />
        </div>
    );
};

export default VideoCall;
