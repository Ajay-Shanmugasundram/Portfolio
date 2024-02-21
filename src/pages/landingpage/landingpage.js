import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import LanguageStats from "../../components/LanguageStats/languageStats";
import NumberCounter from "../../components/Number/number";
import { Col, Row } from "react-bootstrap";

export default function LandingPage() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["SOFTWARE ENGINEER", "FULL STACK DEVELOPER"], // Strings to display
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 50,
            loop: 220,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Row>
                <Col>
                    <div
                        style={{
                            height: "100vh",
                            paddingTop: "15em",
                            paddingLeft: "5em",
                            fontWeight: "900",
                        }}
                    >
                        <span className="  fs-1 mb-6 text-left border-bottom border-5  letterspacing border-warning">
                            AJAY SHANMUGASUNDRAM
            </span>
                        <div className=" letterspacing text-left fs-2" ref={el}></div>
                    </div>
                </Col>
                <Col md={4} sm={12} lg={4} xl={4}>
                    <Row>

                        <Row className="w-100">
                            <Col md={6} sm={12} lg={6} xl={6}>
                                <NumberCounter
                                    intervalspeed={200}
                                    number={10}
                                    content={"Project"}
                                ></NumberCounter>
                            </Col>
                            <Col md={6} sm={12} lg={6} xl={6}>
                                <NumberCounter
                                    intervalspeed={400}
                                    number={5}
                                    content={"Hours of Coding"}
                                ></NumberCounter>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12} lg={6} xl={6}>
                                <NumberCounter
                                    intervalspeed={100}
                                    number={20}
                                    content={"Skills"}
                                ></NumberCounter>
                            </Col>
                            <Col md={6} sm={12} lg={6} xl={6}>
                                <NumberCounter
                                    intervalspeed={1000}
                                    number={2}
                                    content={"Experience"}
                                ></NumberCounter>
                            </Col>
                        </Row>

                        <LanguageStats></LanguageStats>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
