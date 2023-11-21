import Portfolio from './Portfolio';
import styles from './Projects.module.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Image } from 'antd';


const EmployeeEase = () => {

    const imageStyle = {
        padding: '10px', // Set padding on all sides
      };

      
    return ( 
        <div className={styles.fuel_station}>
          <div className={styles.fuel_header}>
            <h2>EmployeeEase </h2>
            <p>
              This project was done as part of a hackathon. <span>REACT</span> was used in the frontend and <span>DJANGO</span> in the backend. It is an
              <span>employee management website</span>. My input consists of entire backend programming, front-end assign manager
              functionality, and front-end update/delete functionality.
            </p>
            <div
              className={styles.button}
              onClick={() => {
                window.location.href = 'https://employease-frontend.vercel.app/';
              }}
            >
              <div className={styles.text}>Link</div>
              <div className={styles.icon}>
                <AiOutlineLink />
              </div>
            </div>
          </div>
          <div className={styles.screenshots}>
            <Image style={imageStyle} width={200} src={require('../../images/EmployeeEase1.png')} alt="screenshot1" />
            <Image style={imageStyle} width={200} src={require('../../images/EmployeeEase2.png')} alt="screenshot2" />
            <br />
            <Image style={imageStyle} width={200} src={require('../../images/EmployeeEase3.png')} alt="screenshot3" />
            <Image style={imageStyle} width={200} src={require('../../images/EmployeeEase4.png')} alt="screenshot4" />
          </div>
        </div>
     );
}
 
export default EmployeeEase;