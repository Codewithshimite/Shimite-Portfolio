import "../styles/Aboutstyle.scss"
import jscert from "../images/JsdataStructrecert.png";
import responsivecert from "../images/responsivedesigncert.png";

export default function Certificate() {
const cert = [
  {id: 1, imgSrc: jscert, caption: "JavaScript DSA  Certification",link: "https://www.freecodecamp.org/certification/Shimite/javascript-algorithms-and-data-structures-v8" },

  {id: 2, imgSrc: responsivecert, caption: "Responsive Web Design Certification ", link: "https://www.freecodecamp.org/certification/Shimite/responsive-web-design" }

];


return (

  <>
      <div className="port-holder container-fluid">
      <h1 className="portfolio-header">Check My Certifications</h1>

      <div className="flex-home container-fluid">
        {cert.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card" // Unique caption for each image
          >
            <img src={cert.imgSrc} alt={cert.caption} />
            <div className="caption">{cert.caption}</div> 
          </a>
        ))}
      </div>
    </div>
  </>
)

}



