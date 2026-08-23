const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container container">
        {/* Left Side */}
        <div className="hero-left" data-aos="fade-right">
          <span className="hero-tagline">PREMIUM VISUAL CREATOR</span>

          <h1 className="hero-heading">
            CRAFTING <br />
            <span className="text-red">CINEMATIC STORIES</span>
          </h1>

          <p className="hero-description">
            Transforming raw video footage into high-octane cinematic experiences through high-retention storytelling, motion graphics, color grading, and viral visual edits.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              <i className="fa-solid fa-play"></i> View Portfolio
            </a>
            <a href="#contact" className="btn-secondary">
              <i className="fa-solid fa-paper-plane"></i> Hire Me
            </a>
          </div>

          <div className="hero-badges">
            <span><i className="fa-solid fa-check text-red"></i> High-Retention Edits</span>
            <span><i className="fa-solid fa-check text-red"></i> Custom Color Grading</span>
            <span><i className="fa-solid fa-check text-red"></i> Motion Graphics & VFX</span>
          </div>
        </div>

        {/* Right Side with Logo */}
        <div className="hero-right" data-aos="fade-left">
          <div className="avatar-glow-wrapper">
            <div className="gradient-glow-red"></div>
            <div className="gradient-glow-blue"></div>
            <div className="rain-particles-overlay"></div>
            <div className="avatar-circle floating-anim">
              <img
                src="/images/logo.svg"
                alt="SARKAR Logo"
                className="hero-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/logo.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;