const About = () => {
  const softwareTools = [
    { name: "Adobe After Effects", level: "95%", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Blender 3D", level: "85%", icon: "fa-solid fa-cube" },
    { name: "Adobe Premiere Pro", level: "92%", icon: "fa-solid fa-video" },
  ];

  const coreServices = [
    { title: "Video Editing", icon: "fa-solid fa-film", desc: "High-retention YouTube, commercial & social content editing." },
    { title: "Cinematic Editing", icon: "fa-solid fa-clapperboard", desc: "Atmospheric storytelling, color grading & film aesthetics." },
    { title: "Reel Creator & Shorts", icon: "fa-solid fa-mobile-screen-button", desc: "Viral Instagram Reels, TikToks & YouTube Shorts." },
    { title: "Motion Graphics & VFX", icon: "fa-solid fa-bolt", desc: "Dynamic text animation, visual effects & custom transitions." },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">WHO I AM</span>
          <h2 className="section-title-text">
            ABOUT <span className="text-red">SARKAR</span>
          </h2>
          <p className="section-description">
            Passionate video editor, cinematic visual creator, and reel creator delivering high-retention content.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="about-two-column-grid">
          {/* Left Column: Bio & Core Services */}
          <div className="about-left-col" data-aos="fade-right">
            <div className="about-bio-card">
              <p className="about-hero-copy">
                "I specialize in professional video editing, cinematic edits, and high-engagement reel creation. Using industry-standard software like After Effects, Blender 3D, and Premiere Pro, I turn ideas into powerful visual stories."
              </p>

              {/* Highlighted Callout Box */}
              <div className="about-callout-box">
                <div className="callout-icon-wrapper">
                  <i className="fa-solid fa-bolt icon-red"></i>
                </div>
                <div className="callout-text">
                  <h4>Fast Turnaround & High Retention</h4>
                  <p>Custom color grading, sound FX, motion graphics, and engaging pacing built for growth.</p>
                </div>
              </div>

              {/* Core Services */}
              <div className="about-services-list">
                <h4 className="services-list-heading">CORE SPECIALTIES</h4>
                <div className="services-bullets-grid">
                  {coreServices.map((service, idx) => (
                    <div key={idx} className="bullet-item">
                      <i className={`${service.icon} text-red`}></i>
                      <div>
                        <strong>{service.title}</strong>
                        <span className="bullet-desc" style={{ display: 'block', fontSize: '0.85rem', opacity: 0.8 }}>
                          {service.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="about-cta-wrapper">
                <a href="#contact" className="btn-primary">
                  <i className="fa-solid fa-paper-plane"></i> Let's Work Together
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Software & Technical Expertise */}
          <div className="about-right-col" data-aos="fade-left">
            <div className="about-skills-card">
              <h3 className="skills-card-heading">
                SOFTWARE & <span className="text-red">TOOLS</span>
              </h3>
              <p className="skills-card-sub">Professional software used for video & 3D editing.</p>

              <div className="skills-meter-list">
                {softwareTools.map((skill, index) => (
                  <div key={index} className="skill-meter-item">
                    <div className="skill-meter-header">
                      <span className="skill-meter-name">
                        <i className={`${skill.icon} text-red`}></i> {skill.name}
                      </span>
                      <span className="skill-meter-percent">{skill.level}</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
