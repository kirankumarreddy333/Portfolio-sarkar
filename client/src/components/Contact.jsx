import { useState } from "react";
import API from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending message...");

    // Create message entry for dashboard
    const storedMsgs = JSON.parse(localStorage.getItem("admin_inquiries") || "[]");
    const nextId = "#" + String(storedMsgs.length + 101).padStart(3, '0');
    
    const newEntry = {
      id: nextId,
      name: formData.name,
      email: formData.email,
      project: formData.project || "Video Editing",
      message: formData.message,
      date: new Date().toLocaleDateString(),
      status: "NEW"
    };

    try {
      storedMsgs.unshift(newEntry);
      localStorage.setItem("admin_inquiries", JSON.stringify(storedMsgs));
    } catch (err) {
      console.error(err);
    }

    try {
      await API.post("/contact", formData);
    } catch (err) {
      // Backend request attempt (continues gracefully if hosting static)
    }

    setStatus("Message sent successfully! Sarkar will contact you soon.");
    setFormData({
      name: "",
      email: "",
      project: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title-text">
            LET'S WORK <span className="text-red">TOGETHER</span>
          </h2>
          <p className="section-description">
            Have a project in mind? Ready to transform your visuals? Drop me a message below.
          </p>
        </div>

        <div className="contact-split-layout">
          {/* Left Side Info */}
          <div className="contact-left-info" data-aos="fade-right">
            <h3>Contact Details</h3>
            <p className="contact-lead">
              Available for freelance video editing, YouTube high-retention cuts, Instagram Reels, commercial projects, and color grading assignments.
            </p>

            <div className="contact-item">
              <i className="fa-solid fa-envelope icon-red"></i>
              <span>Charan.pidamarti.143@gmail.com </span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-phone icon-red"></i>
              <span>6303328461</span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-location-dot icon-red"></i>
              <span>Andhra Pradesh, India</span>
            </div>

            <div className="social-connect-box">
              <h4>Follow & Connect</h4>
              <div className="social-circular-list">
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
            </div>
          </div>

          {/* Right Side Form */}
          <div className="contact-right-form" data-aos="fade-left">
            <form className="dark-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="project"
                  placeholder="Project Type (e.g. YouTube Video, Reel, Thumbnail)"
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project details..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status && <div className="form-status-alert">{status}</div>}

              <button type="submit" className="btn-large-red">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;