import React, { Component } from "react";
import "../scss/_modal.scss";
import Clock from "../components/Clock.jsx";

const SessionContainer = ({
    name,
    link,
    show,
    handleClose,
    questionID,
    userID,
}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    console.log("id " + questionID);

    let startTime = null;

    const handleStart = async (questionID, userID) => {
        console.log("handleStart: " + questionID);
        const createSession = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ questionID: questionID, userID: userID }),
        };

        try {
            const response = await fetch(
                "http://localhost:8888/api/sessions",
                createSession
            ).then(getStartTime(questionID));
        } catch (err) {
            console.log(err);
        }
    };

    const getStartTime = async (questionID) => {
        console.log("getting start time for ID: " + questionID);
        const displayTime = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };

        try {
            const response = await fetch(
                `http://localhost:8888/api/sessions/:${questionID}`,
                displayTime
            );
            const data = await response.json();
            console.log("start time: " + data.startTime);
            return (startTime = data.startTime);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <center>
                    <a href={link}>
                        <h3>{name}</h3>
                    </a>
                    <img id="pomodoro" src="../docs/timer.gif" />
                    <Clock startTime={startTime} />
                    <button
                        class="button1"
                        onClick={(e) => handleStart(questionID, userID)}
                    >
                        START
                    </button>
                    <br />
                    <button onClick={handleClose}>Complete! 🙌</button>
                </center>
            </section>
        </div>
    );
};

export default SessionContainer;
