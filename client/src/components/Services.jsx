const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Video Editing",
      icon: "fa-solid fa-film",
      desc: "High-retention YouTube edits, documentary storytelling, commercial ads and cinematic cuts with seamless transitions.",
    },
    {
      id: 2,
      title: "Reels & Shorts",
      icon: "fa-solid fa-video",
      desc: "Viral Instagram Reels, TikToks, and YouTube Shorts formatted with dynamic sound FX, captions, and fast-paced pacing.",
    },
    {
      id: 3,
      title: "Thumbnail Design",
      icon: "fa-solid fa-image",
      desc: "Eye-catching high CTR YouTube thumbnails crafted to maximize clicks and double viewer engagement.",
    },
    {
      id: 4,
      title: "Poster Design",
      icon: "fa-solid fa-pen-ruler",
      desc: "Cinematic movie posters, event flyers, and social media promotional graphics with Hollywood aesthetic quality.",
    },
    {
      id: 5,
      title: "Color Grading",
      icon: "fa-solid fa-palette",
      desc: "Professional cinematic color correction, film look LUTs, and mood-enhancing color palettes.",
    },
    {
      id: 6,
      title: "3D & Graphic Art",
      icon: "fa-solid fa-cube",
      desc: "Blender 3D visual manipulation, motion art composites, and high-res promotional graphics.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">CREATIVE SOLUTIONS</span>
          <h2 className="section-title-text">
            MY CREATIVE <span className="text-red">SERVICES</span>
          </h2>
          <p className="section-description">
            High-tier visual editing services tailored for creators, brands, and agencies looking to stand out.
          </p>
        </div>

        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon-wrapper">
                <i className={`${service.icon} service-icon-48`}></i>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;