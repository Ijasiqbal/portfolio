import styles from './Portfolio.module.css'

const Portfolio = () => {
    return ( 
        <div className={styles.base}>
            <div className={styles.left}>
                <h2>img</h2>
            </div>
            <div className={styles.right}>
                <h2>My Portfolio Website</h2>
                <p>My Portfolio website is designed and developed by me.I designed this website taking inspirations from <span>ust.com</span>.In this website i have used <span>HTML CSS</span> and <span>REACT</span>.This is a static and responsive website </p>
            </div>
        </div>
     );
}
 
export default Portfolio
