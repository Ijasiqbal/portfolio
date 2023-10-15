import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return ( 
        <div className={styles.base}>
            <div className={styles.header}>
                <h2>Contact</h2>
            </div>
            <div className={styles.body}>
                <div className={styles.btns}>
                    <div className={styles.button} onClick={()=>{window.location.href = 'https://github.com/Ijasiqbal';}}>
                        <span><FontAwesomeIcon icon={faGithub} /></span>                   
                        Github
                    </div>
                    <div className={styles.button}>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                        Linkdin
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.email}>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        ijasiqbal4@gmail.com
                    </div>
                    <div className={styles.phone}>
                        <span><FontAwesomeIcon icon={faPhone} /></span>                  
                        9400329496
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;