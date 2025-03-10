import "../styles/Contact.scss"
import BasicForm from "./Form"
import sendMail from "../images/mail.png"
import location from "../images/placeholder.png"

export default function ContactPage(){
  return (
  <div className="d-flex justify-content-between  mb-3 form-body">
    <div className="p-2 get-intouch responsive">
      <h2>Get in Touch</h2>
      <p>Have a question or want to work together? Drop me a message!</p>
      <section className="envelope-email">
        <div>
        <img className="envelope-image" src={sendMail} alt="Envelope image" />
        </div>
        <div className="email">
        <span><span className="text-e">E-</span>Mail</span>
        <span>Shimiteakejelu@gmail.com</span>
        </div>
      </section>
      <section className="location">
        <div>
        <img className="envelope-image" src={location} alt="Location image" />
        </div>
        <div className="email">
        <span><span className="">L</span>ocation</span>
        <span>Osogbo, Nigeria,  230109</span>
        </div>
      </section>
      </div>
    <div className="p-2  form-holder"><BasicForm /></div>
  </div>

  )
}

