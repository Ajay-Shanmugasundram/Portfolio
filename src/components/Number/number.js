import React, { useEffect, useState } from 'react'
import { Row } from "react-bootstrap";
import './number.css'; // Import CSS file for styling


export default function NumberCounter({ number, content, intervalspeed }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < number) {
                setCounter(prevCounter => prevCounter + 1);
            } else {
                clearInterval(interval);
            }
        }, intervalspeed); // Adjust the interval as needed for the animation speed

        return () => clearInterval(interval);
    }, [counter, number]);

    return (
        <div style={{ textAlign: "center" }}>
            <Row class="d-flex justify-content-center mt-100">
                <div >
                    <div class="progress-stats  blue">
                        <span class="progress-left">
                            <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">{counter.toLocaleString()}{content === "Hours of Coding" && "K"}{"+"}</div>
                    </div>
                </div>
                <div >{content}</div>
            </Row>
        </div >
    );
}





