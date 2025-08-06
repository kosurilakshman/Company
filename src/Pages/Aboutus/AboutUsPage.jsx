import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import home from "../../assets/home.webp";
import about from "../../assets/About.webp";
import ourstory from "../../assets/ourstory.webp";

import "../Aboutus/AboutUsPage.css";

// Simple fade-up animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const content = [
  {
    title: "Mobile App Development",
    subText:
      "We build high-performance mobile apps for Android, iOS, and cross-platform, ensuring scalability, security, and seamless user experience.",
  },
  {
    title: "Website Development",
    subText:
      "We create fast, responsive, and SEO-optimized websites, from corporate sites to e-commerce platforms, enhancing your online presence.",
  },
  {
    title: "AI Solutions",
    subText:
      "We integrate AI for automation, predictive analytics, and personalized experiences, optimizing business operations and decision-making.",
  },
];

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Sanjit Tech Solutions Pvt. Ltd.</title>
        <meta
          name="description"
          content="Welcome to Sanjit Tech Solutions — experts in web development, AI, software, and SEO. Explore our services to accelerate your digital success."
        />
        <meta
          name="keywords"
          content="About Sanjit Tech, About us, Web development company, AI solutions, App development, SEO company, Digital transformation, Mobile development, Tech services in India"
        />
        <link rel="canonical" href="https://www.sanjittechsolutions.in/" />
      </Helmet>

      <div className="aboutus-Herosection">
        {/* Hero Section */}
        <img className="aboutus-Hero" src={home} alt="Home" loading="lazy" />
        <div className="aboutus">
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="heading_para"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            We create digital solutions that drive success and growth.
          </motion.p>
        </div>

        {/* About Section */}
        <div className="aboutus-content">
          <motion.div
            className="aboutus-content-matter"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1>About Sanjit Tech</h1>
            <p>
              Innovate, Grow & Succeed in the Digital World. At Sanjit Tech
              Solutions, we build high-performance websites, mobile apps, SEO
              strategies, and AI-driven solutions to help businesses reach more
              customers and scale faster. Whether on mobile or desktop, our
              digital expertise keeps you ahead of the competition.
            </p>
          </motion.div>

          <motion.div
            className="aboutus-content-img"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={about} alt="About Us" loading="lazy" />
          </motion.div>
        </div>

        {/* Mission, Vision, Goals */}
        <div className="aboutus-mission">
          <motion.h1
            className="mission_vision_goals"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Mission, Vision and Goals
          </motion.h1>
          <div className="aboutus-boxes">
            {["Mission", "Vision", "Goals"].map((title, idx) => (
              <motion.div
                className="aboutus-box"
                key={idx}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2>{title}</h2>
                <p>
                  {title === "Mission"
                    ? "Empowering businesses with innovative technology solutions."
                    : title === "Vision"
                    ? "To be the leading provider of digital transformation services."
                    : "Innovate, collaborate, and grow businesses worldwide."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Latest Stories */}
        <motion.h1
          className="aboutus-story-1"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Latest Stories
        </motion.h1>
        <div className="aboutus-Stories">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="aboutus-box1"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                January 2025 -{" "}
                {index === 0 ? "App" : index === 1 ? "Web" : "AI"} Development
              </p>
              <h3>{item.title}</h3>
              <p>{item.subText}</p>
            </motion.div>
          ))}
        </div>

        {/* Teamwork Section */}
        <motion.h1
          className="aboutus-story"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Team Work
        </motion.h1>
        <div className="aboutus-ourstory">
          <motion.div
            className="aboutus-ourstory-img"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={ourstory} alt="Our Story" loading="preload" />
          </motion.div>
          <motion.div
            className="aboutus-ourstory-content"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              At Sanjit Tech Solutions, we firmly believe that true success is
              achieved through collaboration, innovation, and teamwork. Our
              strength lies in our diverse team of skilled professionals,
              including developers, designers, project managers, and
              strategists, who bring unique expertise and perspectives to the
              table. We foster a culture of continuous learning and
              knowledge-sharing, ensuring that each project benefits from the
              latest technological advancements and creative solutions. By
              working together seamlessly, we transform challenges into
              opportunities, crafting scalable, high-performance digital
              solutions that drive business growth. Our approach is not just
              about delivering results but also about building long-term
              partnerships with our clients. We listen, adapt, and innovate—
              ensuring that every solution we create is tailored to meet
              specific business needs, industry demands, and future scalability.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
