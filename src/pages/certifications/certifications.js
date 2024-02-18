import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import AWSCLDFND from "../../assests/AWScloudfoundation.png";
import HACKERRANK from "../../assests/HackerRank.png";
import UDEMYMERN from "../../assests/UC-1bfac748-dc9c-4f34-92e4-95321be5b880.jpg";
import LINKEDIN from "../../assests/linkedinTestmanagement.png";

export default function Certifications() {
  return (
    <>
      <div className="fs-2 fw-bold letterspacing d-flex justify-content-center mb-5  ">
        <span className="border-bottom border-5 border-warning mb-3">
          CERTIFICATIONS
        </span>
      </div>
      <div className="d-grid gap-5 fs-6 fw-bold   ">
        <Row className="gap-5">
          <Col>
            <Image thumbnail src={HACKERRANK}></Image>
          </Col>
          <Col>
            <Row className="mb-3">
              Holder of HackerRank Software Engineer Certification, validating
              proficiency in algorithms, data structures, and problem-solving
              skills. Demonstrated ability to tackle real-world coding
              challenges and optimize solutions for efficiency and scalability.
              Committed to continuous learning and improvement in software
              engineering practices.
            </Row>
            <Row>
              <Button onClick={() =>
                window.open("https://www.hackerrank.com/certificates/e5ee3760bebe", "_blank")
              } variant="success">Show credentials</Button>
            </Row>
          </Col>
        </Row>
        <Row className="gap-5">
          <Col>
            <Row className="mb-3">
              AWS Academy Graduate with certification in AWS Academy Cloud
              Foundations, demonstrating proficiency in fundamental cloud
              concepts, AWS services, and best practices. Equipped with hands-on
              experience in cloud computing, ready to contribute to innovative
              projects leveraging AWS technologies.
            </Row>
            <Row>
              <Button onClick={() =>
                window.open("https://www.credly.com/badges/9845edc9-5835-44c2-b7bf-a013407a4474?source=linked_in_profile", "_blank")
              } variant="success">Show credentials</Button>
            </Row>
          </Col>
          <Col>
            <Image thumbnail src={AWSCLDFND}></Image>
          </Col>
        </Row>
        <Row className="gap-5">
          <Col>
            <Image thumbnail src={UDEMYMERN}></Image>
          </Col>
          <Col>
            <Row className="mb-3">
              Completed 'Node.js, Express, MongoDB & More: The Complete Bootcamp
              2023' on Udemy, gaining comprehensive knowledge and hands-on
              experience in building scalable web applications with Node.js,
              Express, and MongoDB. Proficient in RESTful API development,
              authentication, and database integration. Ready to leverage
              acquired skills to contribute effectively to software development
              projects.
            </Row>
            <Row>
              <Button onClick={() =>
                window.open("https://www.udemy.com/certificate/UC-1bfac748-dc9c-4f34-92e4-95321be5b880/", "_blank")
              } variant="success">Show credentials</Button>
            </Row>
          </Col>
        </Row>
        <Row className="gap-5">
          <Col>
            <Row className="mb-3">
              Proficient in Software Testing Foundations with a focus on Test
              Management. Skilled in overseeing the planning, execution, and
              monitoring of testing activities to ensure high-quality software
              delivery. Equipped with knowledge of industry-standard tools and
              methodologies to drive efficient testing processes and deliver
              robust solutions.
            </Row>
            <Row>
              <Button onClick={() =>
                window.open("https://www.linkedin.com/learning/certificates/63b3166ec0046683f2138bb71bf92e5c3654e6bc67599a90f1cbb513c327140a?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3ByRjnsqfJRa2ZCMORQKyrhA%3D%3D", "_blank")
              } variant="success">Show credentials</Button>
            </Row>{" "}
          </Col>
          <Col>
            <Image thumbnail src={LINKEDIN}></Image>
          </Col>
        </Row>
      </div>
    </>
  );
}
