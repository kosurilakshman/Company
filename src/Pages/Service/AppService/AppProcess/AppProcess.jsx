import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../AppProcess/AppProcess.css";

const cards = [
  {
    id: 1,
    text: "1. We Understand Your Business",
    para: "We talk with you to learn about your business, what your app should do, who will use it, and what makes it special.",
  },
  {
    id: 2,
    text: "2. We Plan Your App",
    para: "We create a clear plan for your app – what it will look like, how it will work, and how users will move through it easily.",
  },
  {
    id: 3,
    text: "3. We Build and Test the App",
    para: "We design and build your app using the best tools. Then we test it fully to make sure it works fast and has no errors.",
  },
  {
    id: 4,
    text: "4. We Launch and Support You",
    para: "We launch your app live for users and keep supporting you to make sure everything runs smoothly.",
  },
];


export default function CardSlider() {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
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
      // If already scrolling, ignore subsequent wheel events.
      if (isScrolling) return;
      e.preventDefault();
      setIsScrolling(true);
      const pageWidth = container.clientWidth; // Jump one full container width at a time.
      let newScroll;
      if (e.deltaY > 0) {
        newScroll = container.scrollLeft + pageWidth;
      } else {
        newScroll = container.scrollLeft - pageWidth;
      }
      container.scrollTo({ left: newScroll, behavior: "smooth" });
      // After a delay, update the scroll state and allow new scrolling.
      setTimeout(() => {
        handleScroll();
        setIsScrolling(false);
      }, 500);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isScrolling]);

  return (
    <div className="container-slider">
      <div className="progress-bar-wrapper-slider">
        <div
          className="progress-bar-slider"
          style={{ width: `${scrollX}%` }}
        ></div>
      </div>
      <div
        className="cards-wrapper-slider"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card-slider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="app-card-slider-heading">{card.text}</h2>
            <p className="app-card-slider-text">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
