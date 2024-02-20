import React from 'react'
import { Col } from 'react-bootstrap'

export default function Projects() {
    return (
        <>
            <div className="fs-2 fw-bold letterspacing d-flex justify-content-center  mb-5 ">
                <span className="border-bottom border-5 border-warning mb-3">
                    AWARDS
                </span>
            </div>
            <section>
                <div class="row">
                    <Col md={12} sm={6} lg={12} xl={12}>
                        <ul class="timeline-list">
                            <li>
                                <div class="timeline_content">
                                    <span>2023</span>
                                    <h4>Top Performer Q3</h4>
                                    <p className='fs-6 fw-bold'>In the third quarter, I proudly received recognition as a Top Performer, exemplifying excellence in my endeavors. These awards stand as a testament to my dedication, skill, and ability to consistently surpass expectations. They underscore my commitment to continuous growth and achievement within the designated timeframe</p>
                                </div>
                            </li>
                            <li>
                                <div class="timeline_content">
                                    <span>2023</span>
                                    <h4>Solution Awards - PROTRAC</h4>
                                    <p className='fs-6 fw-bold'>For successfully delivering on the Protrac application, showcasing unwavering commitment, tireless work ethic, and innovative problem-solving techniques that made it possible to introduce this invaluable tool. It will definitely revolutionize the landscape of T-CELL therapy cell orchestration and for never failing to rise to the occasion!</p>
                                </div>
                            </li>
                            <li>
                                <div class="timeline_content">
                                    <span>2023</span>
                                    <h4>Solution Awards - DATA OBSERVABILITY</h4>
                                    <p className='fs-6 fw-bold'>For customizing a Data Observability solution to monitor and enhance the reliability of data and for the efforts in bringing about our first "significantly differentiated solution"</p>
                                </div>
                            </li>
                            <li>
                                <div class="timeline_content">
                                    <span>2023</span>
                                    <h4>Top Performer Q4</h4>
                                    <p className='fs-6 fw-bold'>In Q4, I continued to shine brightly, earning further accolades as a testament to my unwavering commitment to excellence. These recognitions reflect my consistent dedication, innovative contributions, and remarkable performance throughout the quarter. They serve as a testament to my ability to thrive and exceed expectations, reinforcing my reputation as a top performer in my field</p>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </div>
            </section>        </>)
}
