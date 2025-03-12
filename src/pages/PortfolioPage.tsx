import "../styles/PorfoliStyles.scss";
import weda from "../images/weda repo.png";
import ecommerce from "../images/ecommerce.png";
import bmi from "../images/BMI.png";
import sorter from "../images/sorter.png";
import card from "../images/card-detailPage.png";
import polygon from "../images/rotating-polygon.png";
import Logos from "./MovingLogo";
import Certificate from "./Certifacate";
import CertMobileComponent from "./CertMobile";




import TestimonyCard  from "./Testimonial";

export default function PortfolioPage() {
  const projects = [
    { id: 1, imgSrc: weda, caption: "Weather Report App", link: "https://codewithshimite.github.io/Weather-Forecast-app/" },
    { id: 2, imgSrc: ecommerce, caption: "E-comerce Dashboard",  link: "https://codewithshimite.github.io/HNG-stage-two-web-shop/"  },
    { id: 3, imgSrc: bmi, caption: "Bmi Calculator", link: "https://codewithshimite.github.io/BMI-calculator-by-codewithShimite/" },
    { id: 4, imgSrc: sorter, caption: "Word sorter", link: "https://codewithshimite.github.io/sorter/" },
    { id: 5, imgSrc: card, caption: "Card Detail page", link: "https://codewithshimite.github.io/card-detail-page/" },
    { id: 6, imgSrc: polygon, caption: "Rotating Polygon", link: "https://codewithshimite.github.io/Rotating-polygons/" },
  ];

  return (
    <>
    <div className="port-holder container-fluid">
      <h1 className="portfolio-header">Check My Portfolio</h1>
      <div className="white-space"></div>
      <div className="flex-home container-fluid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card" // Unique caption for each image
          >
            <figure>
            <img src={project.imgSrc} alt={project.caption} />
            </figure>
            
            <div className="caption">{project.caption}</div> 
          </a>
        ))}
      </div>
    </div>
    <Logos/>
    <div className="certification-div">
      <div className="desktop-mobile-cert-hide">
      <Certificate />
      </div>
      
      <div className="cert-mobile-view">
      <CertMobileComponent />
      </div>
      </div>
   
    <div>

    <div className="testimonial-div container-fluid">
        <span className="what-peopel-say">What People Say About Me</span>
        <TestimonyCard />
    </div>


    </div>
    
    </>
  );
 
}










