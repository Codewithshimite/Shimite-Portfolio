import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../images/logop.png";
import FooterPage from "./FooterPage";
import ScrollExample from "./BackToTop";
import "../styles/Layout.scss"; // Import SCSS for styling

const LayoutPage = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50); // Apply only when scrolling down
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="oga"> {/* Carrier of all */}
      <header> {/* Header */}
        <nav className={`navbar navbar-expand-sm navbar-dark container-fluid ${scrollingDown ? "scroll-down" : ""}`}>
          <div className="container-fluid">
            {/* Logo */}
            <a className="navbar-brand fav-Image" href="/">
              <img src={logo} alt="Logo" className="rounded-pill" />
            </a>

            {/* Navbar Toggler for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              aria-controls="collapsibleNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto d-flex gap-3 align-items-start">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link text-light text-1 hover-underline">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/About-Shimite" className="nav-link text-light text-2 hover-underline">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link text-light text-3 hover-underline">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/PortfolioPage" className="nav-link text-light text-4 hover-underline">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/ServicePage" className="nav-link text-light text-5 hover-underline">Service</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/Shimite's-Blogs" className="nav-link text-light text-6 hover-underline">Blog</NavLink>
                </li>
              </ul>
              <hr /> {/* line on menu list in mobile view */}
            </div>
          </div>
        </nav>
      </header>

      <main className="main-root">
        <Outlet /> {/* Child routes will be rendered here */}
      </main>

      <footer className="mt-auto text-center">
        <FooterPage />
        <ScrollExample />
      </footer>
    </div>
  );
};

export default LayoutPage;
