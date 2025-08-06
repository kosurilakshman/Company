import React, { useState, useEffect } from "react";
import { MdWebAsset } from "react-icons/md";
import { IoPulseOutline } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { Si365Datascience, SiGooglemarketingplatform } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import "../Services/Services.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    icon: <MdWebAsset className="service-icon web-icon" />,
    title: "Web Development",
    links: "Web-development",
    description: "Custom, scalable, and high-performance websites tailored to your business needs.",
  },
  {
    id: 2,
    icon: <IoPulseOutline className="service-icon seo-icon" />,
    title: "Seo ",
    links: "seo",
    description: "Boost your Google rankings with expert SEO strategies, local & global optimization, and fast, mobile-friendly websites.",
  },
  {
    id: 3,
    icon: <FaBrain className="service-icon ai-icon" />,
    title: "Artificial Intelligence",
    links: "Artificial-intelligence",
    description: "AI-powered solutions that enhance automation, efficiency, and innovation.",
  },
  {
    id: 4,
    icon: <Si365Datascience className="service-icon data-icon" />,
    title: "Data Science",
    links: "Data-science",
    description: "Transforming raw data into valuable insights for better decision-making.",
  },
  {
    id: 5,
    icon: <SiGooglemarketingplatform className="service-icon marketing-icon" />,
    title: "Digital Marketing",
    links: "Digital-marketing",
    description: "Grow your business with social media marketing, PPC ads, content marketing, and lead generation.",
  },
  {
    id: 6,
    icon: <FaMobileAlt className="service-icon app-icon" />,
    title: "App Development",
    links: "App-development",
    description: "Engaging and intuitive mobile applications for both iOS and Android platforms.",
  },
];

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  return (
    <div className="services-section">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="services-header"
      >
        <h2 className="sub-heading">Innovative Digital Solutions</h2>
        <p className="sub-text">
          We are development experts on all <span className="text-highlight">technologies & platforms</span>
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="card-container"
      >
        {servicesData.map((service) => (
          <motion.div key={service.id} variants={cardVariants} className="card">
            <div className="icon">{service.icon}</div>
            <div className="border"></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={`services/${service.links}`}>
              <p>Know more</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
