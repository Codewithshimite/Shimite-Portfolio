import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../images/logop.png";
import FooterPage from "./FooterPage";
import ScrollExample from "./BackToTop";
import "../styles/Layout.scss"; // Import SCSS for styling

const LayoutPage = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY.current && currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/About-Shimite", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/PortfolioPage", label: "Portfolio" },
    { path: "/ServicePage", label: "Service" },
    { path: "/Shimite's-Blogs", label: "Blog" },
  ];

  return (
    <div className="oga"> {/* Carrier of all */}
      <header>
        <nav className={`navbar navbar-expand-lg navbar-dark container-fluid ${scrollingDown ? "scroll-down" : ""}`}>
          <div className="container-fluid">
            <a className="navbar-brand fav-Image" href="/">
              <img src={logo} alt="Logo" className="rounded-pill" />
            </a>

            {/* Navbar Toggler for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto d-flex gap-3 align-items-start">
                {menuItems.map(({ path, label }) => (
                  <li className="nav-item" key={path}>
                    <NavLink to={path} className="nav-link text-light hover-underline" onClick={closeMenu}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-root">
        <Outlet />
      </main>

      <footer className="mt-auto text-center">
        <FooterPage />
        <ScrollExample />
      </footer>
    </div>
  );
};

export default LayoutPage;
