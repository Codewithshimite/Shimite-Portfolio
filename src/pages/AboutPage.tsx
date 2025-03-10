import "../styles/Aboutstyle.scss";
import reactImage from "../images/nobag.png";
import FileDownload from "./DownloadCv"; // Assuming you have a component for downloading the CV
import { Fragment } from "react/jsx-runtime";

export default function AboutPage() {
  return (
    <Fragment>
      <div className="main-div">
        
          {/* <img className="picture" src={Picture} alt="Shimite's photo" /> */}
        

        <div className="mid-div">
          <div className="about-me">About Me</div>
          <div className="information">
            Hello, I'm <span className="main-name">Shimite Akejelu,</span> a passionate <span className="frontend">Frontend Developer</span> with a keen eye for detail and a strong background in <span className="frontend">Quality Assurance Analysis.</span> With two years of experience in <span className="frontend"><strong>web development,</strong></span> I specialize in crafting dynamic, responsive, and user-friendly interfaces using <strong className="frontend"> HTML, CSS, JavaScript, TypeScript, Bootstrap, Sass, React, and jQuery.</strong>
            <p>
              I thrive on bringing designs to life, ensuring that every pixel is in place while maintaining clean, efficient, and maintainable code. My expertise in <span className="frontend">quality assurance analysis</span> allows me to not only build engaging web applications but also rigorously test them for performance, usability, and functionality.
            </p>

            <div className="what-i-do">What I Do</div>
            <div className="fdev">Frontend Development</div>
            <ul>
              <li>Responsive web design - Creating modern, scalable, responsive web applications with clean <span className="frontend">UI/UX</span> that works seamlessly across devices.</li>
              <li>Performance Optimization - Building reusable user interface components in <strong className="frontend">React</strong> for scalable applications.</li>
              <li>Component-Based Development – Leveraging <strong className="frontend">Sass</strong> and <strong className="frontend">Bootstrap</strong> for maintainable, structured styles.</li>
              <li>JavaScript & Interactivity – Enhancing user experience with dynamic functionality and interactive elements.</li>
              <li>Cross-Browser Compatibility – Ensuring a consistent experience across all modern browsers.</li>
            </ul>

            <div className="qa">Quality Assurance</div>
            <ul>
              <li>I give a fine and final touch to <strong className="frontend">UI/UX</strong> inconsistencies.</li>
              <li><strong className="frontend">Making pages responsive</strong> to all devices and ensuring good performance.</li>
              <li>Giving <strong className="frontend">animation</strong> to ensure modernization of web pages.</li>
            </ul>

            <div className="qa">User  Interface Design Implementation</div>
            <ul>
              <li>Identifying and fixing UI/UX inconsistencies.</li>
              <li>Debugging and optimizing code for better performance.</li>
              <li>Conducting thorough testing to ensure smooth functionality.</li>
            </ul>

            <div className="qa">Collaboration & Problem-Solving</div>
            <ul>
              <li>Working closely with designers, developers, and testers to deliver high-quality digital experiences.</li>
              <li>Continuously learning and staying updated with the latest trends in web development.</li>
            </ul>
          </div>
        </div>
        <img className="reactImage" src={reactImage} alt="react photo" />
      </div>

      <div className="cv-div">
      <FileDownload />
      </div>
     
      
    </Fragment>
  );
}