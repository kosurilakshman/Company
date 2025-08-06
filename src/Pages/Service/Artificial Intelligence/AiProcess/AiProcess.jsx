import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../AiProcess/AiProcess.css";

const cards = [
  {
    id: 1,
    text: "1. We Understand Your Business and Goals",
    para: "We talk with you to learn about your business, your goals, and how AI can help you grow.",
  },
  {
    id: 2,
    text: "2. We Plan the Right AI Strategy",
    para: "We create a clear and simple plan to use AI in a way that fits your business needs best.",
  },
  {
    id: 3,
    text: "3. We Build and Test the AI Tool",
    para: "We build smart AI tools using machine learning and test them to make sure they work well.",
  },
  {
    id: 4,
    text: "4. We Launch the AI and Support You",
    para: "We set up the AI in your business and keep helping you so it runs smoothly all the time.",
  },
];

export default function AiProcess() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Update progress bar based on current scroll position.
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollX((scrollLeft / maxScroll) * 100);
    }
  };

  // Attach wheel event listener to enable paging on mouse wheel scroll.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (isScrolling) return; // prevent multiple triggers
      e.preventDefault();
      setIsScrolling(true);
      const pageWidth = container.clientWidth; // one full card width
      let newScroll;
      if (e.deltaY > 0) {
        // Scroll right: Next card
        newScroll = container.scrollLeft + pageWidth;
      } else {
        // Scroll left: Previous card
        newScroll = container.scrollLeft - pageWidth;
      }
      container.scrollTo({ left: newScroll, behavior: "smooth" });
      // After the smooth scroll completes, update progress and allow further scrolling.
      setTimeout(() => {
        handleScroll();
        setIsScrolling(false);
      }, 500); // Adjust delay as needed
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isScrolling]);

  return (
    <div className="ai-container-slider">
      <div className="ai-progress-bar-wrapper-slider">
        <div
          className="ai-progress-bar-slider"
          style={{ width: `${scrollX}%` }}
        ></div>
      </div>
      <div
        className="ai-cards-wrapper-slider"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="ai-card-slider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="ai-card-slider-heading">{card.text}</h2>
            <p className="ai-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}