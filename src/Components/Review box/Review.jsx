import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import person1 from '../../assets/Review Images/person1.webp';
import person2 from '../../assets/Review Images/person2.webp';
import person3 from '../../assets/Review Images/person3.webp';
import person4 from '../../assets/Review Images/person4.webp';
import person5 from '../../assets/Review Images/person5.webp';
import person6 from '../../assets/Review Images/person6.webp';
import person7 from '../../assets/Review Images/person7.webp';
import person8 from '../../assets/Review Images/person8.webp';
import person9 from '../../assets/Review Images/person9.webp';

import "../Review box/Review.css";

const Review = () => {
  const reviews = [
    [
      { name: "Swathi", image: person1, description: "Excellent service! The team at Sanjit Tech Solutions is professional and efficient. Highly recommend!" },
      { name: "Venu Madhavi", image: person2, description: "Sanjit Tech Solutions exceeded my expectations. Great support and timely delivery!" },
      { name: "Nikitha", image: person3, description: "The best tech team I’ve collaborated with. Affordable and top-quality services." },
    ],
    [
      { name: "Rajeshwari", image: person4, description: "Sanjit Tech Solutions combines innovation with reliability—highly satisfied with their service!" },
      { name: "Sarath", image: person5, description: "Sanjit Tech Solutions offers amazing customer service and effective results. Very satisfied!" },
      { name: "Lakshman", image: person6, description: "Exceptional experience from start to finish. I’m impressed with their dedication and expertise." },
    ],
    [
      { name: "Kranti", image: person7, description: "I’ll definitely recommend Sanjit Tech Solutions to anyone looking for tech support. Fantastic work!" },
      { name: "Venkatesh", image: person8, description: "Sanjit Tech Solutions offers amazing customer service and effective results. Very satisfied!" },
      { name: "Sumanth", image: person9, description: "I’ll definitely recommend Sanjit Tech Solutions to anyone looking for tech support. Fantastic work!" },
    ],
  ];
  

  const [isMobile, setIsMobile] = useState(false);

  // Detect window width and set the state for mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to check the width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="review-container">
      <header className="review-header">
        <div className="review-border"></div>
        <h2 className="review-subheading">Voice of Trust & Success</h2>
      </header>

      <div className="review-box">
        <div className="testimonials">
          <div className="reviews-container">
            {/* Show all reviews for wider screens, or only the first array for mobile */}
            {(isMobile ? [reviews[0]] : reviews).map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="review-column"
                initial={{ y: rowIndex % 2 === 0 ? "-100%" : "100%" }}
                animate={{ y: rowIndex % 2 === 0 ? "100%" : "-100%" }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
                whileHover={{
                  y: 0,
                  transition: {
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
              >
                {row.map((review, index) => (
                  <article key={index} className="review-card">
                    <div className="review-content">
                      <img
                        src={review.image}
                        alt={`Review by ${review.name} - 4 stars rating`}
                        className="review-image"
                      />
                      <div className="reviews">
                        <h3 className="person_name">{review.name}</h3>
                        <p className="stars">⭐⭐⭐⭐☆</p>
                        <p className="description">{review.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
