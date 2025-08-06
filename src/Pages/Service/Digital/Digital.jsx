import React from "react";
import DigitalFaq from "./DigitalFaq";
import { FaPeopleArrows } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import seo_hero from "../../../assets/seo.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../Digital/Digital.css";
import DigitalProcess from "./DigitalProcess/DigitalProcess";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Digital() {
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
    <div className="digital_dev">
      <div className="digital_dev_hero">
        <div
          ref={ref} // Track this div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="digital_dev_hero_two"
        >
          <img src={seo_hero}></img>
        </div>
        <div className="digital_dev_hero_one">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="digital_dev_hero_h1"
          >
            Result-Driven Digital Marketing Strategies for Business Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
          >
            Our digital marketing solutions help brands grow by improving online
            visibility, generating leads, and maximizing ROI. We implement the
            latest marketing techniques to drive targeted traffic and customer
            engagement..
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
        className="digital_why_box"
      >
        <p className="digital_sub-heading">
          Why Choose Our Digital Marketing Service
        </p>
        <p className="digital_sub-text">
          {" "}
          Our Digital Marketing development Process
        </p>
      </motion.div>
      <div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="div"
      >
        <DigitalProcess />
      </div>


      <div className="digital-properties">
        Why Our SEO/Digital Marketing Services Stand Out
      </div>
      <div className="digital-boxes">
        <img className="digital-webbg-1" src={webbg_lt} alt="image" />
        <div className="div">
        <div className="digital-box">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="digital-box-1"
          >
            <div className="digital-box-icon">
              <BiCodeBlock className="digital-icon-code-block" />
            </div>
            <p>
              Tailored SEO plans based on your industry, target audience, and
              business goals
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="digital-box-2"
          >
            <div className="digital-box-icon">
              <FaPeopleArrows className="digital-icon-code-block" />
            </div>
            <p>
              Ethical and sustainable SEO techniques that ensure long-term
              success and avoid penalties.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="digital-box-3"
          >
            <div className="digital-box-icon">
              <FaLaptop className="digital-icon-code-block" />
            </div>
            <p>
              Enhancing page speed, mobile-friendliness, and structured data for
              better rankings.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.0, ease: "easeOut" }}
            className="digital-box-4"
          >
            <div className="digital-box-icon">
              <FaCalendarCheck className="digital-icon-code-block" />
            </div>
            <p>
              Creating high-quality, engaging content that improves search
              rankings and user engagement.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.5, ease: "easeOut" }}
            className="digital-box-5"
          >
            <div className="digital-box-icon">
              <SlGraph className="digital-icon-code-block" />
            </div>
            <p>
              In-depth research to find the best opportunities for ranking and
              outperforming competitors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 4.0, ease: "easeOut" }}
            className="digital-box-6"
          >
            <div className="digital-box-icon">
              <MdOutlineSecurity className="digital-icon-code-block" />
            </div>
            <p>
              Continuous tracking, detailed reports, and strategy adjustments to
              maximize results.
            </p>
          </motion.div>
        </div>
        

        </div>
        <img className="digital-webbg-2" src={webbg} alt="image" />
       </div> 
       
       


      <div className="digital-professional">
        <h1>Why SEO is Essential for Your Business </h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="digital-professinal-boxes"
        >
          <div className="digital-professional-box-one">
            <SiAdguard className="digital-icon-code-block" />

            <div className="digital-professional-content">
              <h2>Increases Website Traffic & Brand Visibility </h2>
              <ul>
                <li>
                  Higher Google Rankings – SEO helps your business appear on the
                  first page of search results. .
                </li>
                <li>
                  Targeted Traffic – Attract the right audience through
                  optimized keywords and content.
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-professional-box-two">
            <IoPeopleSharp className="digital-icon-code-block" />
            <div className="digital-professional-content">
              <h2> Improves User Experience & Engagement </h2>
              <ul>
                <li>
                  Faster Load Times – Optimized websites perform better and keep
                  users engaged..
                </li>
                <li>
                  Faster Load Times – Optimized websites perform better and keep
                  users engaged.
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-professional-box-three">
            <FaMoneyBillTrendUp className="digital-icon-code-block" />{" "}
            <div className="digital-professional-content">
              <h2>Boosts Conversions & Business Growth </h2>
              <ul>
                <li>
                  Higher Lead Generation – SEO-driven traffic results in more
                  potential customers.
                </li>
                <li>
                  Better ROI Compared to Ads – Organic search brings long-term
                  value without ongoing ad spend.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>


      <div className="digital-faq_container">
        <h4 className="digital-faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <DigitalFaq />
      </div>

      <motion.div
        inital={{ scale: 0 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="digital-service-contact"
      >
        <div className="digital-service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="digital-service-contact-content">
          <h1>Ready to Grow Your Business? </h1>
          <p>
          Almost everyone is online these days! If your business wants to reach more people, strong SEO and digital marketing is the way to go. And the best part? We make it easy, clear, and built just for you.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </motion.div>
    </div>
  );
}
