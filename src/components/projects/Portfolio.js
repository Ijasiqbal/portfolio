import styles from './Portfolio.module.css';
import { Image } from 'antd';

const Portfolio = () => {
  const imageStyle = {
    padding: '10px', // Set margin on all sides
  };

  return (
    <div className={styles.base}>
      <div className={styles.left}>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image style={imageStyle} width={200} src={require('../../images/portfolio1.png')} />
          <Image style={imageStyle} width={200} src={require('../../images/portfolio2.png')} />
          <Image style={imageStyle} width={200} src={require('../../images/portfolio3.png')} />
          <Image style={imageStyle} width={200} src={require('../../images/portfolio4.png')} />
        </Image.PreviewGroup>
      </div>
      <div className={styles.right}>
        <h2>My Portfolio Website</h2>
        <p>
          My Portfolio website is designed and developed by me. I designed this website taking
          inspirations from <span>ust.com</span>. In this website, I have used <span>HTML CSS</span> and{' '}
          <span>REACT</span>. This is a static and responsive website.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
