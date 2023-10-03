// Skills.js
import React from 'react';
import styles from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className={`${styles.base} ${inView ? 'animate__animated animate__zoomIn' : ''}`} ref={ref}>
            <div className={styles.header}>
                <h6>What abilities do I have</h6>
                <h4>Skills</h4>
                <span>Projects</span>
            </div>
            <div className={styles.skillset}>
                <div className={`${styles.skills} ${inView ? 'animate__animated animate__zoomIn' : ''}`}>
                    <h6>HTML</h6>
                </div>
                <div className={`${styles.skills} ${inView ? 'animate__animated animate__zoomIn' : ''}`}>
                    <h6>CSS</h6>
                </div>
                {/* ... Add similar blocks for other skills */}
            </div>
        </div>
    );
}

export default Skills;
