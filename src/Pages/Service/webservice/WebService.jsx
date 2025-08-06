import React, { useRef, useState } from "react";
import WebFaq from "./WebFaq.jsx";
import { FaPeopleArrows, FaLaptop, FaCalendarCheck } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import web_hero from "../../../assets/web-hero.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../webservice/WebService.css";
import { motion, useInView } from "framer-motion";
import WebProcess from "./webProcess/WebProcess.jsx";

export default function WebService() {
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
    <div className="web_app_dev">
      <section className="web_app_dev_hero">
        <div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="web_app_dev_hero_two"
        >
          <img
            src={web_hero}
            alt="web-development-mangalagiri"
            loading="lazy"
            className="hero-img"
          />
        </div>
        <div className="web_app_dev_hero_one">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="web_app_dev_hero_h1"
          >
            Web Development Services for High-Performance Websites
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible">
            At Sanjit Tech Solutions, we follow a streamlined process to ensure
            high-quality websites that align with your business goals.
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

      <section className="web_app_why_box">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <h2 className="web_app_sub-heading">
            Why Choose Our Web Development Service
          </h2>
          <p className="web_app_sub-text">Our Web Development Process</p>
        </motion.div>
      </section>

      <section>
        <WebProcess />
      </section>

      <section className="web_app_properties">
        <h2>Why Web Development Stands Out</h2>
        <div className="web_app_boxes">
          <img
            className="web_app_webbg-1"
            src={webbg_lt}
            alt="Light themed web background"
          />

          {/* Static Content Replaced Here */}
          <div className="web_app_boxs">
            <div className="web_app_box">
              <motion.div
                className="web-box-1"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
              >
                <div className="web_app_box-icon">
                  <BiCodeBlock size={60} />
                </div>
                <p className="web_app_box_txt">
                  Custom & Scalable Solutions – Tailor-made websites that grow
                  with your business.
                </p>
              </motion.div>

              <motion.div
                className="web-box-2"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
              >
                <div className="web_app_box-icon">
                  <FaPeopleArrows size={60} />
                </div>
                <p className="web_app_box_txt">
                  SEO & Performance Optimized – Faster load times, better
                  rankings, and higher conversions.
                </p>
              </motion.div>

              <motion.div
                className="web-box-3"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
              >
                <div className="web_app_box-icon">
                  <FaLaptop size={60} />
                </div>
                <p className="web_app_box_txt">
                  User-Friendly & Responsive – Flawless experience across all
                  devices.
                </p>
              </motion.div>

              <motion.div
                className="web-box-4"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
              >
                <div className="web_app_box-icon">
                  <FaCalendarCheck size={40} />
                </div>
                <p className="web_app_box_txt">
                  Security First Approach – Ensuring top-tier security and
                  protection.
                </p>
              </motion.div>

              <motion.div
                className="web-box-5"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
              >
                <div className="web_app_box-icon">
                  <SlGraph size={40} />
                </div>
                <p className="web_app_box_txt">
                  Dedicated Support & Maintenance – Continuous improvements for
                  long-term success.
                </p>
              </motion.div>

              <motion.div
                className="web-box-6"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
              >
                <div className="web_app_box-icon">
                  <MdOutlineSecurity size={40} />
                </div>
                <p className="web_app_box_txt">
                  Secure, efficient, high-performing solutions for a flawless
                  user experience.
                </p>
              </motion.div>
            </div>
          </div>

          <img
            className="web_app_webbg-2"
            src={webbg}
            alt="Dark themed web background"
          />
        </div>
      </section>
      <section className="web-professional">
              <h2>Why web Development is Essential for Your Business</h2>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                className="web-professinal-boxes"
              >
                <div className="web-professional-box-one">
                  <SiAdguard className="web-icon-code-block" />
                  <div className="web-professional-content">
                    <h3>
                      Why Custom web Development is Essential for Your Business
                    </h3>
                    <ul>
                      <li>Reduce manual workload and improve productivity.</li>
                      <li>Optimize workflows for faster operations.</li>
                    </ul>
                  </div>
                </div>
                <div className="web-professional-box-two">
                  <IoPeopleSharp className="web-icon-code-block" />
                  <div className="web-professional-content">
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
                <div className="web-professional-box-three">
                  <FaMoneyBillTrendUp className="web-icon-code-block" />
                  <div className="web-professional-content">
                    <h3>Business Growth & Competitive Edge</h3>
                    <ul>
                      <li>No limitations of off-the-shelf web.</li>
                      <li>Develop applications tailored for global scalability.</li>
                      <li>Stay ahead with evolving technology trends.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </section>

      <section className="web_app_faq_container">
        <h2>FAQ's</h2>
        <h3>Got Questions? We've got answers!</h3>
        <WebFaq />
      </section>

      <section className="web_app_service-contact">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          className="web_app_service-contact-img"
        >
          <img src={CTA_img} alt="Call to Action" />
        </motion.div>
        <div className="web_app_service-contact-content">
          <h2>Get a Website That Makes Your Business Shine!</h2>
          <p>
          Think about it — almost everyone uses the internet! A website is your business’s home online. But not just any website will do. You need one made just for your business — built the right way, to help you grow and succeed..
          </p>
          <button>Get a Free Quote</button>
        </div>
      </section>
    </div>
  );
}
