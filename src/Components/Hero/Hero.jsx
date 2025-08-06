import React from "react";
import "../Hero/Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className="hero-heading"
      >
        Smart Solutions For a <span className="hero-highlight"></span>
      </motion.h2>

      <p className="hero-subText">
        Bring your ideas to life with expert{" "}
        <span>Web & App Development</span>, <span>AI</span>,{" "}
        <span>Data Science</span>, and{" "}
        <span>Digital Marketing & SEO Services </span>with affordable Prices.
        <br />
        Let’s innovate together.
      </p>
      <Link to="/contact-us">
        <h3 className="hero-cta">Know more</h3>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className="big-circle"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className="sm-circle"
      ></motion.div>

      <div className="half-eclipse-ring"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className="md-eclipse"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        whileHover={{
          scale: 1.3,
          filter: "brightness(1.6)",
          rotateY: 360,
        }}
        className="globe"
      ></motion.div>

      <div className="semi-circle"></div>
    </div>
  );
};

export default Hero;
