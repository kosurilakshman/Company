import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../About Us/aboutUs.css";
import { Link } from "react-router-dom";
const AboutUs = () => {
  // Ref to track visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true }); // Adjusted amount and once

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -30 }, // Adjusted y value
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Adjusted duration
  };

  // Left content animation
  const leftContentVariants = {
    hidden: { opacity: 0, x: -10 }, // Adjusted x value
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Adjusted duration
  };

  // Right images animation
  const rightImageVariants = {
    hidden: { opacity: 0, x: 20 }, // Adjusted x value
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, // Adjusted duration
        ease: "easeOut",
        staggerChildren: 0.2, // Adjusted stagger
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // Adjusted scale
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="div">
      {/* Header */}
      <motion.div
        className="aboutUs-header"
        variants={headingVariants} // Add variants
        initial="hidden" // Add initial
        animate={isInView ? "visible" : "hidden"} // Add animate
      >
        <div className="aboutUs-border"></div>
        <h2 className="aboutUs-heading">Who We Are?</h2>
      </motion.div>

      {/* About Section */}
      <div className="about-card">
        {/* Left Content */}
        <motion.div
          ref={ref} // Track this div
          className="about-left"
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="aboutUs-heading">About us</h2>
          <p>
            At <strong>Sanjit Tech Solutions</strong>, we transform ideas into
            powerful digital solutions. Our expert team specializes in{" "}
            <span>
              Web & App Development, AI, Data Science, SEO, and Digital
              Marketing
            </span>
            , helping businesses grow, adapt, and thrive in the digital age.
          </p>
          <br />
          <p>
            With cutting-edge technology and strategic innovation, we craft
            high-performance solutions designed for efficiency, scalability, and
            long-term success. Our goal is to empower businesses with next-gen
            technology, enabling them to stay ahead in a fast-evolving digital
            landscape.
          </p>
          <Link to="/about-us">
            <button className="cta">
              <span>Know More...</span>
            </button>
          </Link>
        </motion.div>

        {/* Right Images */}
        <motion.div
          className="about-right"
          variants={rightImageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.img
            src="https://cdn.create.vista.com/api/media/small/250465830/stock-photo-handsome-businessman-suit-pointing-hands-internet-security-illustration-front"
            className="img-1"
            alt="Tech Security"
            variants={imageVariants} // Apply image specific variants
          />
          <motion.img
            src="https://st.depositphotos.com/1071909/2187/i/450/depositphotos_21873999-stock-photo-human-resources-and-crm.jpg"
            className="img-2"
            alt="Human Resources and CRM"
            variants={imageVariants} // Apply image specific variants
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
