import Portfolio from './Portfolio';
import styles from './Projects.module.css'

const Projects = () => {
    return ( 
        <div>
            <div className={styles.header}>
                <h5>Whatever tasks or</h5>
                <h1>Projects</h1>
                <h6>have i accomplished up to date</h6>
            </div>
            <div className={styles.fuel_station}>
                <div className={styles.fuel_header}>
                    <h2>Fuel Station Management website</h2>
                    <p>This is a freelancing work for a fuel station that I have committed to. This website was built with <span>REACT</span> as the frontend and <span>PYTHON</span> as the backend .I utilized the <span>DJANGO</span> and <span>REST framework</span> to to create API endpoints in the backend.I used the built-in django database sqlite3  </p>
                </div>
                <div className={styles.screenshots}>
                    <img src={require("../../images/website1.png")} alt="screenshot1" />
                    <img src={require("../../images/website2.png")} alt="screenshot2" />
                    <br />
                    <img src={require("../../images/website3.png")} alt="screenshot3" />
                    <img src={require("../../images/website4.png")} alt="screenshot4" />
                </div>
            </div>
            <div>
                <Portfolio />
            </div>
        </div>
     );
}
 
export default Projects;