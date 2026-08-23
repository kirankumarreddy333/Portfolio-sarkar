import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Cinematic Action Gaming Trailer",
      category: "videos",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      tag: "VIDEO EDITING",
    },
    {
      id: 2,
      title: "Viral Tech YouTube Thumbnail",
      category: "thumbnails",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tag: "THUMBNAIL DESIGN",
    },
    {
      id: 3,
      title: "Cyberpunk Sci-Fi Movie Poster",
      category: "posters",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      tag: "POSTER DESIGN",
    },
    {
      id: 4,
      title: "Luxury Commercial Storytelling Cut",
      category: "videos",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      tag: "VIDEO EDITING",
    },
    {
      id: 5,
      title: "High Retention Gaming Thumbnail",
      category: "thumbnails",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
      tag: "THUMBNAIL DESIGN",
    },
    {
      id: 6,
      title: "Night City Festival Poster",
      category: "posters",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      tag: "POSTER DESIGN",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">FEATURED SHOWCASE</span>
          <h2 className="section-title-text">
            PORTFOLIO <span className="text-red">WORKS</span>
          </h2>
          <p className="section-description">
            Explore Netflix-style featured visual projects curated across editing, graphics, and color mastery.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters" data-aos="fade-up">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "videos" ? "active" : ""}`}
            onClick={() => setFilter("videos")}
          >
            Video Edits
          </button>
          <button
            className={`filter-btn ${filter === "thumbnails" ? "active" : ""}`}
            onClick={() => setFilter("thumbnails")}
          >
            Thumbnails
          </button>
          <button
            className={`filter-btn ${filter === "posters" ? "active" : ""}`}
            onClick={() => setFilter("posters")}
          >
            Posters
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="netflix-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card-media">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-gradient-overlay"></div>
                <span className="card-category-tag">{item.tag}</span>
              </div>

              <div className="card-body">
                <h3 className="card-item-title">{item.title}</h3>
                <a href="#contact" className="btn-red-rounded">
                  View Case Study <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
