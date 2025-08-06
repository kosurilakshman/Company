import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../softwareProcess/softwareProcess.css";
const cards = [
  {
    id: 1,
    text: "1. We Learn About Your Business",
    para: "We talk with you to understand your business, what you do, and the problems you want to solve.",
  },
  {
    id: 2,
    text: "2. We Plan the Right Software",
    para: "We create a clear plan that shows how the software will work and grow with your business needs.",
  },
  {
    id: 3,
    text: "3. We Build and Test the Software",
    para: "We build the software using the best tools and test it fully to make sure everything works well.",
  },
  {
    id: 4,
    text: "4. We Launch and Keep Supporting You",
    para: "We launch the software for your use and give ongoing help to keep it smooth and updated.",
  },
];


export default function SoftwareProcess() {
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
    <div className="software-contsoftwarener-slider">
      <div className="software-progress-bar-wrapper-slider">
        <div
          className="software-progress-bar-slider"
          style={{ width: `${scrollX}%` }}
        ></div>
      </div>
      <div
        className="software-cards-wrapper-slider"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="software-card-slider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="software-card-slider-heading">{card.text}</h2>
            <p className="software-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
