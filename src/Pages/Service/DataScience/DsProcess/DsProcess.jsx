import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../DsProcess/DsProcess.css";

const cards = [
  {
    id: 1,
    text: "1. We Learn About Your Business and Data",
    para: "We talk with you to understand your business, your goals, and the type of data you have.",
  },
  {
    id: 2,
    text: "2. We Plan a Smart Data Strategy",
    para: "We create a clear and simple plan to study your data and find helpful insights.",
  },
  {
    id: 3,
    text: "3. We Build and Test Data Solutions",
    para: "We use tools like AI and machine learning, and we test everything to make sure it works well.",
  },
  {
    id: 4,
    text: "4. We Launch and Keep Supporting You",
    para: "We set up the tools for your use and keep helping you as your business grows over time.",
  },
];


export default function DsProcess() {
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
    <div className="ds-container-slider">
      <div className="ds-progress-bar-wrapper-slider">
        <div
          className="ds-progress-bar-slider"
          style={{ width: `${scrollX}%` }}
        ></div>
      </div>
      <div
        className="ds-cards-wrapper-slider"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="ds-card-slider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="ds-card-slider-heading">{card.text}</h2>
            <p className="ds-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
