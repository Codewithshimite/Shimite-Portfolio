import React, { useState } from "react";
import "../styles/Service.scss";
import bug from "../images/ladybug (1).png";
import ui from "../images/ux-design.png";
import programming from "../images/programming.png";
import MovingLogos from "../pages/MovingLogo";
import WhatsAppButton from "../pages/Whatsapp";

interface ServiceItem {
  id: number;
  header: string;
  description: string; // ✅ Ensure description exists
  imgSrc: string;
  subHeader: string;
  text: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    imgSrc: programming,
    header: "Frontend Development",
    subHeader: "My Service",
    description: "Building scalable, responsive frontend pages.", // ✅ Added description
    text: "I build scalable frontend pages for your websites of different functions ranging from E-commerce, blogs, Hotel booking websites, Flight booking websites, hospitality, personal portfolio pages to count a few and also making those pages responsive across multiple screen sizes (not limited to any device)."
  },
  {
    id: 2,
    imgSrc: ui,
    header: "UI/UX Implementation",
    subHeader: "Bringing UI/UX designs to life through code",
    description: "Converting UI/UX designs into functional interfaces.", // ✅ Added description
    text: "I transform User Interface and User Experience Design into functional, interactive experiences, bridging the gap between design and development with clean, efficient code. Ensuring visual appeal while maintaining performance."
  },
  {
    id: 3,
    imgSrc: bug,
    header: "Quality Assurance Analysis",
    subHeader: "Identifying site bugs with precise analysis and clear reporting.",
    description: "Detecting and reporting website and mobile app bugs.", // ✅ Added description
    text: "I offer thorough analysis of websites and mobile applications to detect bugs while ensuring accurate identification of issues for quick resolution, providing clear, detailed bug reports for developers."
  }
];

const ServiceCard: React.FC<{ service: ServiceItem; onClick: () => void }> = ({ service, onClick }) => {
  return (
    <div className="div-carrier" onClick={onClick}>
      <div>
        <img className="card-image" src={service.imgSrc} alt={service.header} />
        <h2>{service.header}</h2>
      </div>
    </div>
  );
};

const Modal: React.FC<{ service: ServiceItem | null; onClose: () => void }> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{service.header}</h2>
        {service.subHeader && <h3>{service.subHeader}</h3>}
        <p>{service.text}</p>
      </div>
    </div>
  );
};

const Service: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
      <div className="port">
        <h1 className="portfolio-header text-white">My Services Include</h1>
        <div className="flex-home">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={() => setSelectedService(service)} />
          ))}
          <a 
            href="https://api.whatsapp.com/send?phone=2349061830593&text=Hi%2C%20My%20name%20is..." 
            className="email chat-link new" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppButton />
          </a>
        </div>

        {/* Modal */}
        <Modal service={selectedService} onClose={() => setSelectedService(null)} />
      </div>
      <div className="moving-items">
        <MovingLogos />
      </div>
    </>
  );
};

export default Service;
