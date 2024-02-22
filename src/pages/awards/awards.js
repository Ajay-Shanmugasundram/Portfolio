import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';

export default function Projects() {
    const controls = useAnimation();
    const ref = useRef(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const sectionRef = ref.current;
        const timelineItems = sectionRef.querySelectorAll('.timeline_content');

        const handleScroll = () => {
            if (!animationTriggered && isElementInViewport(timelineItems[0])) {
                timelineItems.forEach((item, index) => {
                    controls.start(i => ({
                        opacity: 1,
                        rotateY: 0,
                        transition: { duration: 0.5, delay: i * 0.1 }
                    }));
                });
                setAnimationTriggered(true);
            }
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, animationTriggered]);

    return (
        <>
            <div className="fs-2 fw-bold letterspacing d-flex justify-content-center mb-5">
                <span className="border-bottom border-5 border-warning mb-3">
                    AWARDS
                </span>
            </div>
            <section ref={ref}>
                <div className="row">
                    <Col md={12} sm={6} lg={12} xl={12}>
                        <ul className="timeline-list">
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    <motion.div className="timeline_content" animate={controls} initial={{ opacity: 0, rotateY: 180 }} custom={index}>
                                        <span>{item.year}</span>
                                        <h4>{item.title}</h4>
                                        <p className='fs-6 fw-bold'>{item.description}</p>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </div>
            </section>
        </>
    );
}

const listItems = [
    {
        year: '2023',
        title: 'Cream of Talents "Achievers" - Q3',
        description: 'In the third quarter, I proudly received recognition as a Top Performer, exemplifying excellence in my endeavors. These awards stand as a testament to my dedication, skill, and ability to consistently surpass expectations. They underscore my commitment to continuous growth and achievement within the designated timeframe.'
    },
    {
        year: '2023',
        title: 'Solution Awards - PROTRAC',
        description: 'For successfully delivering on the Protrac application, showcasing unwavering commitment, tireless work ethic, and innovative problem-solving techniques that made it possible to introduce this invaluable tool. It will definitely revolutionize the landscape of T-CELL therapy cell orchestration and for never failing to rise to the occasion!'
    },
    {
        year: '2023',
        title: 'Solution Awards - DATA OBSERVABILITY',
        description: 'For customizing a Data Observability solution to monitor and enhance the reliability of data and for the efforts in bringing about our first "significantly differentiated solution".'
    },
    {
        year: '2023',
        title: 'Cream of Talents "Achievers" - Q4',
        description: 'In Q4, I continued to shine brightly, earning further accolades as a testament to my unwavering commitment to excellence. These recognitions reflect my consistent dedication, innovative contributions, and remarkable performance throughout the quarter. They serve as a testament to my ability to thrive and exceed expectations, reinforcing my reputation as a top performer in my field.'
    }
];
