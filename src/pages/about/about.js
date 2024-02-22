import React, { useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Avatar from "../../assests/memoji-happy-man-white-background-emoji_826801-6834.avif";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8, // Adjust the duration as needed
                ease: "easeOut", // Add an easing function for smoother animation
                staggeredChildren: 0.1,
            },
        },
    };
    const textVariantsright = {
        initial: {
            x: 500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8, // Adjust the duration as needed
                ease: "easeOut", // Add an easing function for smoother animation
                staggeredChildren: 0.1,
            },
        },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                ref={ref}
                variants={textVariants}
                animate={controls}
                initial="initial"
                className="fs-2 fw-bold letterspacing d-flex justify-content-center mb-5"
            >
                <motion.span
                    variants={textVariants}
                    className="border-bottom border-5 border-warning mb-3"
                >
                    ABOUT ME
                </motion.span>
            </motion.div>
            <motion.div>
                <Row>
                    <Col md={12} xs={12} sm={12} lg={4}>
                        <motion.div
                            initial="initial"
                            animate={controls}
                            variants={textVariants}
                        >
                            <Image src={Avatar} thumbnail></Image>
                        </motion.div>
                    </Col>
                    <Col md={12} xs={12} sm={12} lg={8} className="fw-bold">
                        <motion.div
                            ref={ref}
                            initial="initial"
                            animate={controls}
                            variants={textVariantsright}
                            className="lineheight mb-3"
                        >
                            Hey! 👋 I'm Ajay, a Full Stack Engineer with over 2 years of
                            experience in the MERN stack, AWS, testing tools, CI/CD, and more.
                            I've delved into the fascinating realm of life sciences,
                            contributing to the creation of a clinical trial website. My
                            passion lies in crafting seamless solutions that bridge technology
                            and real-world challenges. Let's connect on LinkedIn and GitHub —
                            always open to new opportunities and collaborations. Thanks for
                            dropping by! 🚀
                        </motion.div>
                    </Col>
                </Row>
            </motion.div>
        </>
    );
}
