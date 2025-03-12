import "../styles/CertMobileComponent.scss";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../images/JsdataStructrecert.png';
import ExampleCarouselImage2 from '../images/responsivedesigncert.png';

function CertMobileComponent() {
  return (
    <>
    <div className="fix-certificate-mobile">Check My Certifications</div>
    <Carousel prevLabel="Prev" nextLabel="Next">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </>

  );
}

export default CertMobileComponent;
