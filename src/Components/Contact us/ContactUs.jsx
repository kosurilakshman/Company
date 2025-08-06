import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Contact us/ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="contactUs-box"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }} // Slow zoom-in effect
    >
      {/* Heading */}
      <h3 className="contactUs-heading">
        Let’s Build Something Great Together!
      </h3>

      {/* Content */}
      <div className="contactUs-content">
        <p>
          Partner with Sanjit Tech Solutions and experience innovation that
          drives success. From cutting-edge web & app development to
          AI-powered solutions, we help businesses thrive in the digital era.
        </p>
        <p className="para">
          Let’s discuss your project today & turn your vision into reality!
        </p>
      </div>

      {/* Button at the bottom */}
      <motion.button
        className="contactUs-btn"
        whileHover={{ scale: 1.1 }} // Button hover effect
        transition={{ duration: 0.3 }}
        onClick={() => navigate("/contact-us")} // Example click action
      >
        Get In Touch
      </motion.button>
    </motion.div>
  );
};

export default ContactUs;
