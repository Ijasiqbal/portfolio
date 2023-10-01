import { Carousel } from 'antd';
import './Slides.css';

const Slides: React.FC = () => (
  <Carousel autoplay>
    <div className="carousel-item">
      <img src={require("../../images/slide1.jpg")} alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src={require("../../images/slide2.jpg")} alt="Slide 2" />
    </div>
    {/* Add similar lines for Slide 3 and Slide 4 */}
  </Carousel>
);

export default Slides;
