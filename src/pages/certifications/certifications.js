// import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import HACKERRANK from "../../assests/HackerRank.png";
import UDEMYMERN from "../../assests/UC-1bfac748-dc9c-4f34-92e4-95321be5b880.jpg";
import LINKEDIN from "../../assests/linkedinTestmanagement.png";
import SAA from "../../assests/SAA.png";
import CCP from "../../assests/CCP.png";
import CF from "../../assests/CF.png";
import SLS from "../../assests/SLS.png";
import { useRef } from "react";
import "./certifications.css";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    img: SAA,
    url: "https://www.credly.com/badges/9c254788-4c7f-4501-9910-7e3b48fc840a/linked_in_profile",
    desc: " I’m thrilled to share that I scored 973 on the AWS Solutions Architect Associate (SAA) exam! This achievement reflects my dedication to designing efficient, scalable cloud solutions on AWS. With validation number 857d9a94dee24c36a46a2b46c2b5f774, I’m excited to bring this expertise to impactful projects and collaborations.",
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    img: CCP,
    url: "https://www.credly.com/badges/287a7e17-075d-4afe-a4a3-55e674f59f03/linked_in_profile",
    desc: " Proud to announce I scored 897 on the AWS Certified Cloud Practitioner (CCP) exam! This certification strengthens my foundational AWS knowledge, supporting cloud-based solutions across various projects. Validation number 1616de21caff41a49b0f365af50439c5.",
  },
  {
    id: 3,
    title: "AWS Technology - Serverless",
    img: SLS,
    url: "https://www.credly.com/badges/ec89b33e-945e-4910-be48-1093cd300a15",
    desc: "I'm also proud to hold the AWS Technology Serverless badge, showcasing my expertise in building and deploying serverless applications on AWS. This badge complements my certifications and enhances my ability to create efficient cloud solutions that leverage the power of serverless architecture.",
  },
  {
    id: 4,
    title: "AWS Academy - Cloud Foundations",
    img: CF,
    url: "https://www.credly.com/badges/9845edc9-5835-44c2-b7bf-a013407a4474?source=linked_in_profile",
    desc: " AWS Academy Graduate with certification in AWS Academy Cloud Foundations, demonstrating proficiency in fundamental cloud concepts, AWS services, and best practices.Equipped with hands - on experience in cloud computing, ready to contribute to innovative projects leveraging AWS technologies.",
  },
  {
    id: 5,
    title: "HackerRank Software Engineer",
    url: "https://www.hackerrank.com/certificates/e5ee3760bebe",
    img: HACKERRANK,
    shape: "Rectangle",
    desc: "  Holder of HackerRank Software Engineer Certification, validating proficiency in algorithms, data structures, and problem- solving skills.Demonstrated ability to tackle real - world coding challenges and optimize solutions for efficiency and scalability. Committed to continuous learning and improvement in software engineering practices.",
  },
  {
    id: 6,
    title: "MERN stack bootCamp 2023",
    url: "https://www.udemy.com/certificate/UC-1bfac748-dc9c-4f34-92e4-95321be5b880/",
    img: UDEMYMERN,
    shape: "Rectangle",
    desc: "Completed 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2023 on Udemy, gaining comprehensive knowledge and hands-on experience in building scalable web applications with Node.js, Express, and MongoDB.Proficient in RESTful API development, authentication, and database integration.Ready to leverage acquired skills to contribute effectively to software development projects.",
  },
  {
    id: 7,
    title: "Software Testing Foundation",
    url: "https://www.linkedin.com/learning/certificates/63b3166ec0046683f2138bb71bf92e5c3654e6bc67599a90f1cbb513c327140a?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3ByRjnsqfJRa2ZCMORQKyrhA%3D%3D",
    img: LINKEDIN,
    shape: "Rectangle",
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
    <section style={{ height: "100vh" }}>
      <div className="container">
        <Row>
          <Col md={6} xl={6} lg={6} ref={ref}>
            <Image
              style={
                item.shape !== "Rectangle"
                  ? { width: "23em", height: "23em" }
                  : { width: "28em", height: "20em" }
              }
              className="bg-transparent border border-0 "
              thumbnail
              src={item.img}
              alt=""
            />
          </Col>
          <Col md={6} xl={6} lg={6}>
            <motion.div className="textContainer" style={{ y }}>
              <h4 className="fw-bold">{item.title}</h4>
              <p className="fs-6 fw-bold">{item.desc}</p>
              <Button
                onClick={() => window.open(item.url, "_blank")}
                variant="success"
              >
                Show credentials
              </Button>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
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