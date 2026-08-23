const Reels = () => {
  const reelsList = [
    {
      id: 1,
      title: "Hyper-Paced Automotive Edit",
      tag: "INSTAGRAM REEL",
      desc: "Sound-synced transitions, speed ramps, and neon color grading built for viral reach.",
      poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Cinematic Travel & Vlog Reel",
      tag: "YOUTUBE SHORTS",
      desc: "Immersive soundscapes and 4K color grading tailored for high viewer retention.",
      poster: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Fitness & Motivation Reel",
      tag: "VIRAL REEL",
      desc: "Kinetic typography overlay with punchy bass-boosted sound design.",
      poster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="reels-section" id="reels">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">SHORT-FORM CONTENT</span>
          <h2 className="section-title-text">
            VIRAL <span className="text-red">REELS & SHORTS</span>
          </h2>
          <p className="section-description">
            High-octane 9:16 vertical videos crafted for Instagram, TikTok, and YouTube Shorts.
          </p>
        </div>

        <div className="reels-grid">
          {reelsList.map((reel, index) => (
            <div
              key={reel.id}
              className="reel-card-wrapper"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="reel-media-box">
                <img src={reel.poster} alt={reel.title} className="reel-img" />
                <div className="reel-play-overlay">
                  <div className="play-button-red">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>

              <div className="reel-details">
                <span className="reel-badge-tag">{reel.tag}</span>
                <h3 className="reel-item-title">{reel.title}</h3>
                <p className="reel-item-desc">{reel.desc}</p>
                <a href="#contact" className="btn-reel-order">
                  Order Reel Edit <i className="fa-solid fa-paper-plane"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;