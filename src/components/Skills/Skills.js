import styles from './Skills.module.css'

const Skills = () => {
    return ( 
        <div className={styles.base}>
            <div className={styles.header}>
                <h6>What abilities do i have</h6>
                <h4>Skills</h4>
                <span>Projects</span>
            </div>
            <div className={styles.skillset}>
              <div className={styles.skills}>
                <h6>HTML</h6>
              </div>
              <div className={styles.skills}>
                <h6>CSS</h6>
              </div>
              <div className={styles.skills}>
                <h6>Javascript</h6>
              </div>
              <div className={styles.skills}>
                <h6>React</h6>
              </div>
              <div className={styles.skills}>
                <h6>Python</h6>
              </div>
              <div className={styles.skills}>
                <h6>Django</h6>
              </div>
              <div className={styles.skills}>
                <h6>REST framework</h6>
              </div>
              <div className={styles.skills}>
                <h6>C language</h6>
              </div>
            </div>
        </div>
     );
}
 
export default Skills;