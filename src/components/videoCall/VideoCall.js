import React, { useState, useEffect, useRef } from "react";
import "./VideoCall.css";

const VideoCall = ({ inCall }) => {
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
            <video className="videoCall__myVideo" ref={myVideo} playsInline autoPlay muted style={inCall ? { width: "150px", height: "100px", top: "calc(100vh - 100px)", left: "calc(100vw - 150px)", borderRadius: "3px" } : {}} />
        </div>
    );
};

export default VideoCall;
