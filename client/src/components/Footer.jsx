const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-logo">
          <a href="#home">
            SARKAR
          </a>
        </div>

        <p className="footer-tagline">
          CINEMATIC VIDEO EDITING • REELS • THUMBNAILS • POSTERS • COLOR GRADING
        </p>

        <div className="footer-social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} SARKAR. All Rights Reserved. Crafted with Passion & Precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;