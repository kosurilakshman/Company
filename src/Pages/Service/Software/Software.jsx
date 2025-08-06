import React, { useRef } from "react";
import SoftwareFaq from "./SoftwareFaq";
import { FaPeopleArrows, FaLaptop, FaCalendarCheck } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../Software/Software.css";
import SoftwareProcess from "../Software/softwareProcess/SoftwareProcess.jsx";
import { motion, useInView } from "framer-motion";
import software_hero from "../../../assets/software.webp";

export default function Software() {
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

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { scale: 0 },
    visible: { scale: 1.05, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className="software-dev">
      <section className="software-dev_hero">
        <div
          ref={ref}
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="software-dev_hero_two"
        >
          {/* Consider adding an appropriate image or alternative content for SEO */}
          <img src={software_hero} alt="Software Development Illustration" />
        </div>
        <div className="software-dev_hero_one">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="software-dev_hero_h1"
          >
            Unlock the Power of Software Development with Sanjit Tech Solutions
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible">
            We build custom software solutions tailored to your business needs,
            helping you streamline operations, enhance customer experiences, and
            drive digital transformation.
          </motion.p>
          <motion.button
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            type="submit"
          >
            Let's Build
          </motion.button>
        </div>
      </section>

      <section className="why_box">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <h2 className="software-sub-heading">
            Why Choose Our Software Service
          </h2>
          <p className="software-sub-text">Our Software Development Process</p>
        </motion.div>
      </section>

      <section className="div">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeIn" },
            },
          }}
          initial="hidden"
          whileInView="visible"
        >
          <SoftwareProcess />
        </motion.div>
      </section>

      <section className="software-properties">
        <h2>Why Our Software Services Stand Out</h2>
        <div className="software-boxes">
          <img
            className="software-webbg-1"
            src={webbg_lt}
            alt="Light themed background"
          />
          <div className="div">
            <div className="software-box">
              <motion.div
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                className="software-box-1"
              >
                <div className="software-box-icon">
                  <BiCodeBlock className="software-icon-code-block" />
                </div>
                <p>
                  Custom-built solutions designed to fit your specific business
                </p>
              </motion.div>
              <motion.div
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                className="software-box-2"
              >
                <div className="software-box-icon">
                  <FaPeopleArrows className="software-icon-code-block" />
                </div>
                <p>
                  We utilize the latest programming languages, frameworks, and
                  tools.
                </p>
              </motion.div>
              <motion.div
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                className="software-box-3"
              >
                <div className="software-box-icon">
                  <FaLaptop className="software-icon-code-block" />
                </div>
                <p>Our software evolves with your business growth.</p>
              </motion.div>
              <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              className="software-box-4"
            >
              <div className="software-box-icon">
                <FaCalendarCheck className="software-icon-code-block" />
              </div>
              <p>Ensuring smooth connectivity across platforms.</p>
            </motion.div>
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              className="software-box-5"
            >
              <div className="software-box-icon">
                <SlGraph className="software-icon-code-block" />
              </div>
              <p>We adhere to industry standards to protect your data.</p>
            </motion.div>
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              className="software-box-6"
            >
              <div className="software-box-icon">
                <MdOutlineSecurity className="software-icon-code-block" />
              </div>
              <p>Regular updates and improvements for long-term performance.</p>
            </motion.div>
          </div>
            </div>
         
          <img
            className="software-webbg-2"
            src={webbg}
            alt="Dark themed background"
          />
        </div>
      </section>

      <section className="software-professional">
        <h2>Why Software Development is Essential for Your Business</h2>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="software-professinal-boxes"
        >
          <div className="software-professional-box-one">
            <SiAdguard className="software-icon-code-block" />
            <div className="software-professional-content">
              <h3>
                Why Custom Software Development is Essential for Your Business
              </h3>
              <ul>
                <li>Reduce manual workload and improve productivity.</li>
                <li>Optimize workflows for faster operations.</li>
              </ul>
            </div>
          </div>
          <div className="software-professional-box-two">
            <IoPeopleSharp className="software-icon-code-block" />
            <div className="software-professional-content">
              <h3>Improves User Experience & Engagement</h3>
              <ul>
                <li>Create intuitive and engaging digital experiences.</li>
                <li>
                  Ensure seamless interactions across web, mobile, and desktop.
                </li>
                <li>Build future-proof applications with high security.</li>
              </ul>
            </div>
          </div>
          <div className="software-professional-box-three">
            <FaMoneyBillTrendUp className="software-icon-code-block" />
            <div className="software-professional-content">
              <h3>Business Growth & Competitive Edge</h3>
              <ul>
                <li>No limitations of off-the-shelf software.</li>
                <li>Develop applications tailored for global scalability.</li>
                <li>Stay ahead with evolving technology trends.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="software-faq_container">
        <h2 className="software-faq">FAQ's</h2>
        <h3>Got Questions? We've got answers!</h3>
        <SoftwareFaq />
      </section>

      <section className="software-service-contact">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          className="software-service-contact-img"
        >
          <img src={CTA_img} alt="Call to Action" />
        </motion.div>
        <div className="software-service-contact-content">
          <h2>Get Software That Makes Your Business Awesome!</h2>
          <p>
          Every business needs software to run smoothly. Custom software is like a tool made just for your business. Don’t use just any software – get one that’s built for you!
          </p>
          <button>Get a Free Quote</button>
        </div>
      </section>
    </div>
  );
}
