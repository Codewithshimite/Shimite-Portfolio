import "../styles/FooterStyles.scss";


export default function FooterPage() {
  return (
    <footer className="grid-house container-fluid responsive text-white py-4">
      <div className="container">
        <div className="row">
          {/* Connect Section */}
          <div className="col-md-4">
            <h5>Connect</h5>
            <ul className="social-icon-div">
              <li>
                <a href="https://x.com/shimwhizzy_Akej" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter icon text-light"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shimite-obi-akejelu/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in icon text-light"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.link/7bz0l3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp icon text-light"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/About-Shimite" className="text-white">About</a></li>
              <li><a href="/ServicePage" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 left-end">
            <h5>Contact Me</h5>
            <address>
              Nigeria
              <br />
              <a href="mailto:info@codewithShimite.com" className="text-white">info@codewithShimite.com</a>
              <br />
              <a href="tel:+2349061830593" className="text-white">+234 906 183 0593</a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-3">
        <p>&copy; 2025 Shimite. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
}
