import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Avatar from '../../assests/memoji-happy-man-white-background-emoji_826801-6834.avif'

export default function About() {
    return (


        <>
            <div className='fs-2 fw-bold letterspacing d-flex justify-content-center mb-5  '>
                <span className='border-bottom border-5 border-warning mb-3'>ABOUT ME</span>
            </div>
            <Row>
                <Col md={12} xs={12} sm={12} lg={4} >
                    <Image src={Avatar} thumbnail></Image>
                </Col>
                <Col md={12} xs={12} sm={12} lg={8} className='fw-bold'>
                    <div className='lineheight mb-3'>Hey! 👋 I'm Ajay, a Full Stack Engineer with over 2 years of experience in the MERN stack, AWS, testing tools, CI/CD, and more. I've delved into the fascinating realm of life sciences, contributing to the creation of a clinical trial website. My passion lies in crafting seamless solutions that bridge technology and real-world challenges. Let's connect on LinkedIn and GitHub — always open to new opportunities and collaborations. Thanks for dropping by! 🚀</div>
                </Col>
            </Row>
        </>
    )
}
