import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../DigitalProcess/DigitalProcess.css";
const cards = [
  {
    id: 1,
    text: "1. We Understand Your Business Goals",
    para: "We talk with you to learn about your goals, your customers, and what success looks like for you.",
  },
  {
    id: 2,
    text: "2. We Plan the Right Strategy",
    para: "We choose the best keywords, create smart content ideas, and build a plan that fits your business.",
  },
  {
    id: 3,
    text: "3. We Run and Track Your Campaigns",
    para: "We launch your campaigns using the latest tools and check what’s working to improve the results.",
  },
  {
    id: 4,
    text: "4. We Share Reports and Support You",
    para: "We send you regular updates and reports, and we’re always here to help you reach your goals faster.",
  },
];


export default function DigitalProcess() {
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
    <div className="digital-container-slider">
      <div className="digital-progress-bar-wrapper-slider">
        <div
          className="digital-progress-bar-slider"
          style={{ width: `${scrollX}%` }}
        ></div>
      </div>
      <div
        className="digital-cards-wrapper-slider"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="digital-card-slider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="digital-card-slider-heading">{card.text}</h2>
            <p className="digital-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
