import React, { useRef } from "react";
import AppFaq from "./AppFaq";
import AppProcess from "./AppProcess/AppProcess";
import { FaPeopleArrows, FaLaptop, FaCalendarCheck } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import app_hero from "../../../assets/app-hero.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../AppService/AppService.css";
import { motion, useInView } from "framer-motion";
import { useEffect } from "react";

// Define common animation variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const leftContentVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

export default function AppService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });


  return (
    <div className="app_dev">
      <header className="app_dev_hero">
        <div 
          className="app_dev_hero_two" 
          ref={ref} // Tracking this div for in-view animations
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img src={app_hero} alt="Creative app development hero" loading="lazy" />
        </div>
        <div className="app_dev_hero_one">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }} 
            className="app_dev_hero_h1"
          >
            Innovative App Development for Mobile &amp; Web for Seamless User Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 2.0, ease: "easeInOut" }}
          >
            Cutting-edge app development solutions designed to deliver seamless performance, exceptional user experience, and future-ready technology for mobile and web platforms.
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
      </header>

      <main>
        <section className="why_box" ref={ref}>
          <motion.div 
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="app-sub-heading">
              Why Choose Our <span className="app-text-hightlight">App Development Service</span>
            </p>
            <p className="app-sub-text">Our App development Process</p>
          </motion.div>
        </section>

        <section className="process_section">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: "easeIn" }} 
            className="div"
          >
            <AppProcess />
          </motion.div>
        </section>

        <section className="properties_section">
      <h2 className="properties">Why Our App Development Stands Out</h2>
      <div className="boxes">
        <img
          className="appbg-1"
          src={webbg_lt}
          alt="Light themed web background"
        />
        <div className="div">
        <div className="app-box">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="box-1"
          >
            <div className="box-content">
              <div className="app-box-icon">
                <BiCodeBlock className="app-icon-code-block" />
              </div>
              <div className="box-text">
                <p>
                  User-friendly applications with our custom app development
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="box-2"
          >
            <div className="box-content">
              <div className="app-box-icon">
                <FaPeopleArrows className="app-icon-code-block" />
              </div>
              <div className="box-text">
                <p>
                  User-Friendly Design. Making every interaction intuitive and
                  impactful.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="box-3"
          >
            <div className="box-content">
              <div className="app-box-icon">
                <FaLaptop className="app-icon-code-block" />
              </div>
              <div className="box-text">
                <p>
                  Seamless, high-performance cross-platform and native app
                  development.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.0, ease: "easeOut" }}
            className="box-4"
          >
            <div className="box-content">
              <div className="app-box-icon">
                <FaCalendarCheck className="app-icon-code-block" />
              </div>
              <div className="box-text">
                <p>
                  Ongoing maintenance and updates to keep your app running smoothly.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3.5, ease: "easeOut" }}
            className="box-5"
          >
            <div className="box-content">
              <div className="app-box-icon">
                <SlGraph className="app-icon-code-block" />
              </div>
              <div className="box-text">
                <p>
                  Integrating cutting-edge tech for enhanced performance and scalability.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 4.0, ease: "easeOut" }}
            className="box-6"
          >
            <div className="box-content">
              <div className="app-box-icon">
                <MdOutlineSecurity className="app-icon-code-block" />
              </div>
              <div className="box-text">
                <p>
                  Secure, efficient, high-performing solutions for a flawless user experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
       
      </div>
             
        <img className="appbg-2" src={webbg} alt="Dark themed web background" />
        </div>
      
    </section>

        <section className="professional_section">
          <h2>Why a Professional App is Essential for Business Success</h2>
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }} 
            className="professinal-boxes"
          >
            <div className="professional-box-one">
              <SiAdguard className="professional_icon-code-block" />
              <div className="professional-content">
                <h3>Boosts brand and builds customer trust</h3>
                <ul>
                  <li>A mobile app keeps your brand directly accessible to customers.</li>
                  <li>Your app allows users to access your services anytime, anywhere.</li>
                </ul>
              </div>
            </div>
            <div className="professional-box-two">
              <IoPeopleSharp className="professional_icon-code-block" />
              <div className="professional-content">
                <h3>Delivers a Seamless User Experience</h3>
                <ul>
                  <li>Fast-loading apps reduce bounce rates and increase retention.</li>
                  <li>An intuitive UI ensures a smooth and enjoyable experience.</li>
                </ul>
              </div>
            </div>
            <div className="professional-box-three">
              <FaMoneyBillTrendUp className="professional_icon-code-block" />
              <div className="professional-content">
                <h3>Increases Revenue and Business Growth</h3>
                <ul>
                  <li>Features like push notifications and personalized offers increase conversions.</li>
                  <li>Ensures higher visibility in app stores and search engines.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="faq_container">
          <header>
            <h4 className="faq">FAQ's</h4>
            <h2>Got Questions? We've got answers!</h2>
          </header>
          <AppFaq />
        </section>
      </main>

      
        <motion.div 
          initial={{ scale: 0 }} 
          whileInView={{ scale: 1.05 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}  
          className="service-contact"
        >
          <div className="service-contact-img">
            <img src={CTA_img} alt="Call to action for custom app solutions" loading="lazy" />
          </div>
          <div className="service-contact-content">
            <h2>Get an App That Takes Your Business to the Next Level!</h2>
            <p>
            Today, almost everyone uses apps. Having a custom app for your business means you can stay connected with your customers all the time. Don’t settle for just any app — get one that’s made just for you!
            </p>
            <button>Get a Free Quote</button>
          </div>
        </motion.div>
      
    </div>
  );
}
