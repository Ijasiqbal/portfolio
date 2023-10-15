import React from 'react';
import styles from './Intro.module.css'

const Intro = () => {

    return ( 
        <div className={styles.base} >
            <div className={styles.left}>
                <img src={require("../../images/dp.png")} alt="profile picture" />
            </div>
            <div className={styles.right}>
                    <h5>who am I  </h5>
                    <h1>Introduction</h1>
                    <p>I am a passionate and innovative software developer with a good foundation in full stack development. My mission is to create meaningful and impactful software solutions that solve real-world problems.
                    Currently I work as a Freelance developer. My journey in technology has been marked by a relentless pursuit of knowledge, a commitment to excellence, and a genuine love for turning ideas into reality through code.
                    Looking forward to working with you and building something amazing together!</p>
            </div>
        </div>
     );
}
 
export default Intro;