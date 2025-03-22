import { useRef, useState, useEffect } from "react";
import "./portfolio.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    id: 1,
    video: "/rbi.mp4",
    title: "Enforcement Dept, Reserve Bank of India",
  },
  { id: 2, video: "/v2.mp4", title: "Witty Hostel, Witty Group" },
  { id: 3, video: "/v3.mp4", title: "Enmaac Advisors" },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "Recent Work";
  const listRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting) {
        setTypedText(fullText.substring(0, charIndex));
        charIndex++;
        if (charIndex > fullText.length) {
          isDeleting = true;
          setTimeout(type, 1000); // Pause before deleting
          return;
        }
      } else {
        setTypedText(fullText.substring(0, charIndex));
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          setTimeout(type, 500); // Pause before retyping
          return;
        }
      }
      setTimeout(type, isDeleting ? 100 : 150); // Speed adjustment
    };

    type();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fixed Typing Effect on Title */}
      <h1 className="pageTitle">{typedText}</h1>

      <div className="carousel">
        <motion.div
          ref={listRef}
          className="pList"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
        >
          {items.map((item, index) => (
            <motion.div
              className="pItem"
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.5,
                scale: index === currentIndex ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="pVideo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </motion.div>
              <motion.div
                className="pText"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1>{item.title}</h1>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows (Below Content) */}
      <div className="controls">
        <button
          className="arrow left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="arrow right"
          onClick={handleNext}
          disabled={currentIndex === items.length - 1}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </motion.div>
  );
};

export default Portfolio;
