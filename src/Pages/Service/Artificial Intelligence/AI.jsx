import React from "react";
import AiFaq from "./AiFaq";
import { FaPeopleArrows } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import ai_hero from "../../../assets/ai-hero.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../Artificial Intelligence/Ai.css";
import AiProcess from "./AiProcess/AiProcess";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Ai() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <div className="ai_app_dev">
      <div className="ai_app_dev_hero">
        <div
          ref={ref} // Track this div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="ai_app_dev_hero_two"
        >
          <img src={ai_hero}></img>
        </div>
        <div className="ai_app_dev_hero_one">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="ai_app_dev_hero_h1"
          >
            Unlock the power of Artificial Intelligence with Sanjit Tech
            Solutions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
          >
            We develop AI models tailored to your business needss.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            type="submit"
          >
            Let's Build
          </motion.button>
        </div>
      </div>
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
        className="ai_why_box"
      >
        <p className="ai_sub-heading">Why Choose Our AI Development Service</p>
        <p className="ai_sub-text"> Our AI development Process</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="div"
      >
        <AiProcess />
      </motion.div>

      <div className="ai_properties">Why Our AI Solutions Stand Out </div>
      <div className="ai_boxes">
        <img className="ai_webbg-1" src={webbg_lt} alt="image" />
        <div className="dai_boxs">
          <div className="ai_box">
            <div className="ai_box-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                className="ai_box-icon"
              >
                <BiCodeBlock className="ai_icon-code-block" />
              </motion.div>
              <p>
                We develop AI solutions specific to your business needs,
                ensuring maximum impact and efficiency
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.0, ease: "easeIn" }}
              className="ai_box-2"
            >
              <div className="ai_box-icon">
                <FaPeopleArrows className="ai_icon-code-block" />
              </div>
              <p>
                Our AI models analyze data to provide actionable insights,
                helping businesses make smarter decisions
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              className="ai_box-3"
            >
              <div className="ai_box-icon">
                <FaLaptop className="ai_icon-code-block" />
              </div>
              <p>
                Our AI models are built for scalability, seamlessly integrating
                with cloud platforms like AWS, Azure, and Google Cloud
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.0, ease: "easeIn" }}
              className="ai_box-4"
            >
              <div className="ai_box-icon">
                <FaCalendarCheck className="ai_icon-code-block" />
              </div>
              <p>
                We ensure all AI implementations adhere to industry standards,
                protecting sensitive data and maintaining compliance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.5, ease: "easeIn" }}
              className="ai_box-5"
            >
              <div className="ai_box-icon">
                <SlGraph className="ai_icon-code-block" />
              </div>
              <p>
                Integrating cutting-edge tech for enhanced performance and
                scalability
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 4.0, ease: "easeIn" }}
              className="ai_box-6"
            >
              <div className="ai_box-icon">
                <MdOutlineSecurity className="ai_icon-code-block" />
              </div>
              <p>
                Our AI solutions continuously evolve through training and
                optimization, ensuring improved accuracy and performance over
                time.
              </p>
            </motion.div>
          </div>
        </div>

        <img className="ai_webbg-2" src={webbg} alt="image" />
      </div>

      <div className="ai_professional">
        <h1>Why AI is Essential for Your Business </h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="ai_professinal-boxes"
        >
          <div className="ai_professional-box-one">
            <SiAdguard className="ai_app_icon-code-block" />

            <div className="ai_professional-content">
              <h2>Enhances Efficiency & Automation </h2>
              <ul>
                <li>
                  Automates Repetitive Tasks – AI-powered automation reduces
                  manual workload, improving efficiency.
                </li>
                <li>
                  Smart Workflow Optimization – AI streamlines operations,
                  reducing errors and improving productivity.
                </li>
              </ul>
            </div>
          </div>
          <div className="ai_professional-box-two">
            <IoPeopleSharp className="ai_app_icon-code-block" />
            <div className="ai_professional-content">
              <h2> Improves Customer Experience</h2>
              <ul>
                <li>
                  AI Chatbots & Virtual Assistants – Provide 24/7 customer
                  support and personalized interactions.
                </li>
                <li>
                  Sentiment Analysis & Predictive Behavior – Understand customer
                  needs and tailor experiences accordingly.
                </li>
              </ul>
            </div>
          </div>
          <div className="ai_professional-box-three">
            <FaMoneyBillTrendUp className="ai_app_icon-code-block" />{" "}
            <div className="ai_professional-content">
              <h2> Drives Business Growth & Innovation </h2>
              <ul>
                <li>
                  Data-Driven Insights – AI analyzes large datasets to uncover
                  trends and business opportunities.
                </li>
                <li>
                  Competitive Advantage – Businesses leveraging AI stay ahead in
                  a fast-evolving market.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="ai_faq_container">
        <h4 className="ai_faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <AiFaq />
      </div>
      <motion.div
        inital={{ scale: 0 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="ai_service-contact"
      >
        <div className="ai_service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="ai_service-contact-content">
          <h1>Use the Power of AI to Make Your Business Better! </h1>
          <p>
          AI is changing how businesses work! It’s like having a smart helper that does hard jobs for you. But you need the
right AI – one that’s made just for your business.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </motion.div>
    </div>
  );
}
