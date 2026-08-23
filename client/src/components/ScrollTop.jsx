import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      className="scroll-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollTop;
