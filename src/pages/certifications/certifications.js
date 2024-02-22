// import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import AWSCLDFND from "../../assests/AWScloudfoundation.png";
import HACKERRANK from "../../assests/HackerRank.png";
import UDEMYMERN from "../../assests/UC-1bfac748-dc9c-4f34-92e4-95321be5b880.jpg";
import LINKEDIN from "../../assests/linkedinTestmanagement.png";
import { useRef } from "react";
import "./certifications.css";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "HackerRank Software Engineer",
    url: "https://www.hackerrank.com/certificates/e5ee3760bebe",
    img: AWSCLDFND,
    desc: "  Holder of HackerRank Software Engineer Certification, validating proficiency in algorithms, data structures, and problem- solving skills.Demonstrated ability to tackle real - world coding challenges and optimize solutions for efficiency and scalability. Committed to continuous learning and improvement in software engineering practices.",
  },
  {
    id: 2,
    title: "AWS Cloud Foundation",
    url: "https://www.credly.com/badges/9845edc9-5835-44c2-b7bf-a013407a4474?source=linked_in_profile",
    img: HACKERRANK,
    desc: " AWS Academy Graduate with certification in AWS Academy Cloud Foundations, demonstrating proficiency in fundamental cloud concepts, AWS services, and best practices.Equipped with hands - on experience in cloud computing, ready to contribute to innovative projects leveraging AWS technologies.",
  },
  {
    id: 3,
    title: "MERN stack bootCamp 2023",
    url: "https://www.udemy.com/certificate/UC-1bfac748-dc9c-4f34-92e4-95321be5b880/",
    img: UDEMYMERN,
    desc: "Completed 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2023 on Udemy, gaining comprehensive knowledge and hands-on experience in building scalable web applications with Node.js, Express, and MongoDB.Proficient in RESTful API development, authentication, and database integration.Ready to leverage acquired skills to contribute effectively to software development projects.",
  },
  {
    id: 4,
    title: "Software Testing Foundation",
    url: "https://www.linkedin.com/learning/certificates/63b3166ec0046683f2138bb71bf92e5c3654e6bc67599a90f1cbb513c327140a?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3ByRjnsqfJRa2ZCMORQKyrhA%3D%3D",
    img: LINKEDIN,
    desc: "Proficient in Software Testing Foundations with a focus on Test  Management.Skilled in overseeing the planning, execution, and  monitoring of testing activities to ensure high- quality software  delivery.Equipped with knowledge of industry - standard tools and  methodologies to drive efficient testing processes and deliver  robust solutions.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section style={{ height: "100vh" }} >
      <div className="container">
        <Row>
          <Col md={6} xl={6} lg={6} ref={ref}>
            <Image thumbnail src={item.img} alt="" />
          </Col>
          <Col md={6} xl={6} lg={6}>
            <motion.div className="textContainer" style={{ y }}>
              <h4 className="fw-bold">{item.title}</h4>
              <p className="fs-6 fw-bold">{item.desc}</p>
              <Button onClick={() =>
                window.open(item.url, "_blank")
              } variant="success">Show credentials</Button>
            </motion.div>
          </Col>

        </Row>
      </div>
    </section >
  );
};

const Certifications = () => {
  const ref = useRef();


  return (
    <div className="portfolio" ref={ref}>
      <div className="progressStats">
        <div className="fs-2 fw-bold letterspacing d-flex justify-content-center   ">
          <span className="border-bottom border-5 border-warning mb-3">
            CERTIFICATIONS
          </span>
        </div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Certifications;