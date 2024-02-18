import React from 'react'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function LandingPage() {


    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER"], // Strings to display
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 50,
            loop: 220
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div style={{ height: "100vh", paddingTop: "21em", paddingLeft: "5em", fontWeight: "900" }}>

            <span className='  fs-1 mb-6 text-left border-bottom border-5  letterspacing border-warning'>
                AJAY SHANMUGASUNDRAM
            </span>
            <div className=' letterspacing text-left fs-2' ref={el}></div>
        </div>)
}


