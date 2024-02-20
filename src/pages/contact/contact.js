import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
    return (
        <>
            <div className="fs-2 fw-bold letterspacing d-flex justify-content-center  mb-5 ">
                <span className="border-bottom border-5 border-warning ">
                    CONTACT
                </span>
            </div>
            <Row className="fs-6">
                <Col>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                size="sm"
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Message"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "18em" }}
                            />
                        </FloatingLabel>
                        <div className="d-grid ">
                            <Button variant="warning" className="font-bold" type="submit">
                                SEND
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col>
                    <Row className="mb-3">
                        <Col className="fw-bold ">
                            Thanks for viewing my portfolio! If you have any questions about
                            my work, want to discuss a potential collaboration, or just want
                            to say hello, I'd love to hear from you. Don't hesitate to reach
                            out via email or phone, or connect with me on LinkedIn, GitHub,
                            Twitter, or Instagram. I'm passionate about what I do and always
                            excited to explore new opportunities and projects. Your message is
                            important to me, and I'll make sure to respond as soon as
                            possible. Let's start a conversation and create something amazing
                            together!
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs md={1}>
                            <CiLocationOn className="colorhover fs-2 pb-1 text-center" />
                        </Col>
                        <Col>India</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs md={1}>
                            <IoCall className="colorhover fs-2 pb-1 text-center" />
                        </Col>
                        <Col>+91 9344500309</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs md={1}>
                            <IoMdMail className="colorhover fs-2 pb-1 text-center" />
                        </Col>
                        <Col>ajayajpi@gmail.com</Col>
                    </Row>
                </Col>
            </Row>
            <div className="d-flex flex-row  mt-5 justify-content-evenly">
                <div
                    type="button"
                    onClick={() =>
                        window.open("https://www.linkedin.com/in/ajayshanmugasundram", "_blank")
                    }
                >
                    <BsLinkedin className="colorhover fs-1 pb-1 text-center" />
                </div>
                <div
                    type="button"
                    onClick={() =>
                        window.open("https://twitter.com/Ajay9335694308", "_blank")
                    }
                >
                    <FaXTwitter className="colorhover fs-1 pb-1 text-center" />
                </div>

                <div
                    type="button"
                    onClick={() =>
                        window.open("https://github.com/Ajay-Shanmugasundram", "_blank")
                    }
                >
                    <FaGithubSquare className="colorhover fs-1 pb-1 text-center" />
                </div>
                <div
                    type="button"
                    onClick={() =>
                        window.open("https://www.buymeacoffee.com/ajayajpi", "_blank")
                    }
                >
                    <SiBuymeacoffee className="colorhover fs-1 pb-1 text-center" />
                </div>
            </div>
        </>
    );
}

export default Contact;
