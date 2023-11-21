import styles from './Portfolio.module.css';
import { Image } from 'antd';
import { AiOutlineLink } from 'react-icons/ai';
import style from './Projects.module.css';




const imageStyle = {
  padding: '10px', // Set margin on all sides
};

const ExcelEase = () => {
    return ( 
        <div className={styles.base}>
          <div className={styles.left}>
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <Image style={imageStyle} width={200} src={require('../../images/ExcelEase1.png')} />
              <Image style={imageStyle} width={200} src={require('../../images/ExcelEase2.png')} />
              <Image style={imageStyle} width={200} src={require('../../images/ExcelEase3.png')} />
              <Image style={imageStyle} width={200} src={require('../../images/ExcelEase4.png')} />
            </Image.PreviewGroup>
          </div>
          <div className={styles.right}>
            <h2>ExcelEase</h2>
            <p>
            During a collaborative <span>hackathon</span>, I co-developed “Excel-Ease” a web application designed to enhance the user
            experience for viewing and editing excel files with a team of three. The whole application was built using <span>React</span> 
            </p>
            <div
              className={style.button}
              onClick={() => {
                window.location.href = 'https://excel-ease.vercel.app/';
              }}
            >
              <div className={style.text}>Link</div>
              <div className={style.icon}>
                <AiOutlineLink />
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default ExcelEase;