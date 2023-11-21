import Portfolio from './Portfolio';
import styles from './Projects.module.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Image } from 'antd';
import EmployeeEase from './EmployeeEase';
import ExcelEase from './ExcelEase';

const imageStyle = {
  padding: '10px', // Set padding on all sides
};

const Projects = () => {
  return (
    <div>
      <div className={styles.header}>
        <h5>Whatever tasks or</h5>
        <h1>Projects</h1>
        <h6>have I accomplished up to date</h6>
      </div>
      <div className={styles.fuel_station}>
        <div className={styles.fuel_header}>
          <h2>Fuel Station Management website</h2>
          <p>
            This is a freelancing work for a fuel station that I have committed to. This website was
            built with <span>REACT</span> as the frontend and <span>PYTHON</span> as the backend. I
            utilized the <span>DJANGO</span> and <span>REST framework</span> to create API
            endpoints in the backend. I used the built-in Django database sqlite3
          </p>
          <div
            className={styles.button}
            onClick={() => {
              window.location.href = 'https://ijasiqbal.github.io/petrol-pump/';
            }}
          >
            <div className={styles.text}>Link</div>
            <div className={styles.icon}>
              <AiOutlineLink />
            </div>
          </div>
        </div>
        <div className={styles.screenshots}>
          <Image style={imageStyle} width={200} src={require('../../images/website1.png')} alt="screenshot1" />
          <Image style={imageStyle} width={200} src={require('../../images/website2.png')} alt="screenshot2" />
          <br />
          <Image style={imageStyle} width={200} src={require('../../images/website3.png')} alt="screenshot3" />
          <Image style={imageStyle} width={200} src={require('../../images/website4.png')} alt="screenshot4" />
        </div>
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <EmployeeEase />
      </div>
      <div>
        <ExcelEase />
      </div>
    </div>
  );
};

export default Projects;
