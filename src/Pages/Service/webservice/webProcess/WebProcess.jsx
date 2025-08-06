import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./WebProcess.css"; // Ensure your CSS path is correct

const content = [
  {
    title: "1.We Talk About Your Business",
    subText: "We learn about what your business does, who your customers are, and who your competitors are.",
    bgColor: "#FF6347"
  },
  {
    title: "2.We Plan the Website With You",
    subText: "We make a simple plan for your website so people can easily find what they need.",
    bgColor: "#20B2AA"
  },
  {
    title: "3.We Design and Build the Website",
    subText: "We use the newest tools to make a fast, safe, and good-looking website that works on all phones and computers.",
    bgColor: "#FF4500"
  },
  {
    title: "4.We Test Everything",
    subText: "We check your website to make sure everything works well and is safe before going live.",
    bgColor: "#8A2BE2"
  },
  {
    title: "5.We Launch and Support You",
    subText: "We put your website online and continue helping you so it always works well.",
    bgColor: "#FFD700"
  }
];


const WebProcess = () => {
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
    <div className="web-container-slider">
      <div className="web-progress-bar-wrapper-slider">
        <div
          className="web-progress-bar-slider"
          style={{ width: `${scrollX}%` }}
        ></div>
      </div>
      <div
        className="web-cards-wrapper-slider"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="web-card-slider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              backgroundColor: item.bgColor, // if you want to use bgColor from content
            }}
          >
            <h2 className="web-card-slider-heading">{item.title}</h2>
            <p className="web-card-slider-para">{item.subText}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebProcess;
