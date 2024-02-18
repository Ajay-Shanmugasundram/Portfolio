import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaBootstrap, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaAws, FaSass, FaNpm, FaYarn, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiJest, SiTestinglibrary, SiKoa, SiExpress, SiPug, SiSwagger, SiSequelize, SiMysql, SiMongodb, SiMongoose, SiPostman, SiAwslambda, } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { PiShareNetwork } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCodeCommit } from "react-icons/fa6";












export default function Skills() {
    const data = [
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <FaCss3Alt />,
        },

        {
            name: "BootStrap",
            icon: <FaBootstrap />,
        },
        {
            name: "Tailwind css",
            icon: <SiTailwindcss />,
        },

        {
            name: "Sass",
            icon: <FaSass />,
        },
        {
            name: "Javascript",
            icon: <IoLogoJavascript />,
        },
        {
            name: "React Js",
            icon: <FaReact />,
        },
        {
            name: "Redux",
            icon: <SiRedux />,
        },
        {
            name: "RTL",
            icon: <SiTestinglibrary />,
        },
        {
            name: "Jest",
            icon: <SiJest />,
        },
        {
            name: "NPM",
            icon: <FaNpm />,
        },
        {
            name: "Yarn",
            icon: <FaYarn />,
        },
        {
            name: "Node Js",
            icon: <FaNodeJs />,
        },
        {
            name: "Express Js",
            icon: <SiExpress />,
        },
        {
            name: "Koa Js",
            icon: <SiKoa />,
        },
        {
            name: "Pug",
            icon: <SiPug />,
        },
        {
            name: "Sequelize",
            icon: <SiSequelize />,
        },
        {
            name: "MySQL",
            icon: <SiMysql />,
        },
        {
            name: "PostgreSQL",
            icon: <BiLogoPostgresql />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "Mongoose",
            icon: <SiMongoose />,
        },
        {
            name: "Postman",
            icon: <SiPostman />,
        },
        {
            name: "Rest API",
            icon: <PiShareNetwork />,
        },
        {
            name: "Swagger",
            icon: <SiSwagger />,
        },
        {
            name: "AWS",
            icon: <FaAws />,
        },
        {
            name: "AWS Lambda",
            icon: <SiAwslambda />,
        },
        {
            name: "AWS CI/CD",
            icon: <FaCodeCommit />,
        },
        {
            name: "Git",
            icon: <FaGitAlt />,
        },
        {
            name: "Github",
            icon: <FaGithub />,
        },
        {
            name: "Linux",
            icon: <FaLinux />,
        },
    ];

    return (
        <>            <div className="fs-2 fw-bold letterspacing d-flex justify-content-center   ">
            <span className="border-bottom border-5 border-warning mb-3">
                SKILLS
            </span>
        </div>
            <Row className="d-flex flex-row ">
                {
                    data.map((item, i) => {
                        return (
                            <Col key={item.name} md={2} style={{
                                padding: "35px"
                            }}>
                                <div className="colorhover display-4 pb-1 text-center">{item.icon}</div>
                                <h6 className="text-center" >{item.name}</h6>
                            </Col>
                        )
                    })
                }
            </Row>
        </>

    );
}

