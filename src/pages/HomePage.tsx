import { useState, useEffect } from "react";
import "../styles/HomeStyles.scss";
import Pix from "../images/drone-removebg-preview.png"
import MessengerButton from "../pages/SendButton"
import SocialsNetworks from "../pages/Soicials"
import FileDownload from "./DownloadCv";
// import RotApp from "../pages/DefaultRotate"
// import TypedText from "../pages/TypeText"

import Tooltip from "../pages/Tooltip"


export default function HomePage() {
  const [role, setRole] = useState("Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prev) => (prev === "Developer" ? "" : "Developer"));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
    <div className="mainDiv  container-fluid"> {/* The main body of the page that carries the desigs */}
      <div className=" left" > {/*The left side*/}
        <div className="d-flex flex-column  "> {/*Carries the name, role and social media logos */}
          <div className=" bg d-block intro ">Hello, I'm</div>
          <div className="name">Shimite Akejelu</div>

          
            <div className="col-sm-9 text-white mt-0 d-flex flex-row align-items-top role gap-3"> {/**Carries rol alone */}
              <span className="frontend-text">Frontend</span>
              <span className="fade-text">
                <span className={`first-letter ${role === "Developer" ? "dev-color" : "qa-color"}`}>
                  {role === "Developer" ? "D" : "Q"}
                </span>
                {role === "Developer" ? "eveloper" : "uality Assurance Analyst"}
                
              </span>
              
            </div>
            {/* for image mobile view*/}
            <div className="red-line-mobile">
        <img className="image-mobile" src={Pix} alt="Shimite's photo" />
        </div>
            
            <div className="mt-3 messenger-div">
              <MessengerButton />
              <Tooltip />
            </div>
            

        </div>

        <div className="social-media-div">
        <p className="text-light connect">Cσɳɳҽƈƚ ɯιƚԋ ɱҽ σɳ:</p>
        <SocialsNetworks/>
        
        </div>



<div className="typingText"></div> 



  </div>


      <div className=" text-white right container-fluid">
        <div className="red-line">
        <img className="image" src={Pix} alt="Shimite's photo" />
        </div>
                
        
        <div className="social-media-div-mobile">
        <p className="text-light connect">Cσɳɳҽƈƚ ɯιƚԋ ɱҽ σɳ:</p>
        <SocialsNetworks/>
        <div className="d-file"><FileDownload /></div>
        </div>
        
        
      
        </div>


       
    </div>
    </>
  );
}

