import "../styles/CertMobileComponent.scss";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../images/JsdataStructrecert.png";
import ExampleCarouselImage2 from "../images/responsivedesigncert.png";
import { useState } from "react";

function CertMobileComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="fix-certificate-mobile">Check My Certifications</div>
      <Carousel activeIndex={index} onSelect={handleSelect} prevLabel="Prev" nextLabel="Next">
        <Carousel.Item>
          <a href="https://www.freecodecamp.org/certification/Shimite/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">
            <img className="d-block w-100" src={ExampleCarouselImage} alt="JavaScript Certification" />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="https://www.freecodecamp.org/certification/Shimite/responsive-web-design" target="_blank" rel="noopener noreferrer">
            <img className="d-block w-100" src={ExampleCarouselImage2} alt="Responsive Design Certification" />
          </a>
        </Carousel.Item>
      </Carousel>

      {/* Custom Indicators */}
      <div className="custom-indicators">
        {[0, 1].map((num) => (
          <span
            key={num}
            className={`indicator ${index === num ? "active" : ""}`}
            onClick={() => setIndex(num)}
          >
            ●
          </span>
        ))}
      </div>
    </>
  );
}

export default CertMobileComponent;
