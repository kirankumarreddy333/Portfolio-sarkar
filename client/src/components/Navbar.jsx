import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Logo Left */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img
              src="/images/logo.svg"
              alt="SARKAR Logo"
              className="nav-logo-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/logo.png";
              }}
            />
            <span>
              SARKAR
            </span>
          </Link>
        </div>

        {/* Navigation Center */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-house nav-icon"></i> Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-layer-group nav-icon"></i> Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-briefcase nav-icon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#reels" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-clapperboard nav-icon"></i> Reels
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-envelope nav-icon"></i> Contact
            </a>
          </li>
        </ul>

        {/* Admin Login Right */}
        <div className="navbar-admin">
          <Link
            to={token ? "/dashboard" : "/admin-login"}
            className="admin-btn"
          >
            <i className="fa-solid fa-user-shield admin-icon"></i> Admin
          </Link>
          <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;