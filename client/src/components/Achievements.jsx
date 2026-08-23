const Achievements = () => {
  const statsList = [
    {
      id: 1,
      number: "500+",
      label: "Projects Completed",
      icon: "fa-solid fa-film",
    },
    {
      id: 2,
      number: "150+",
      label: "Happy Clients",
      icon: "fa-solid fa-users",
    },
    {
      id: 3,
      number: "20M+",
      label: "Million+ Views",
      icon: "fa-solid fa-eye",
    },
    {
      id: 4,
      number: "4+",
      label: "Awards Received",
      icon: "fa-solid fa-award",
    },
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">MILESTONES & NUMBERS</span>
          <h2 className="section-title-text">
            TRACK RECORD & <span className="text-red">ACHIEVEMENTS</span>
          </h2>
          <p className="section-description">
            A journey built on consistency, creative excellence, and high-impact digital delivery.
          </p>
        </div>

        <div className="achievements-grid">
          {statsList.map((stat, index) => (
            <div
              key={stat.id}
              className="glass-achievement-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="achievement-icon-box">
                <i className={`${stat.icon} icon-white`}></i>
              </div>
              <h3 className="stat-big-number">{stat.number}</h3>
              <span className="stat-label-text">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;