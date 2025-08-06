import React, { useState, useRef, useEffect } from "react";

import AppFaq from "./DataScienceFaq";
import { FaPeopleArrows } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import ds_hero from "../../../assets/ds-hero.webp"
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../DataScience/DataScience.css";
import DsProcess from "./DsProcess/DsProcess";
// import {useRef} from 'react'
import {motion,useInView} from 'framer-motion'

export default function DataScience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });
    const headingVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };
    const leftContentVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
    };
  return (
    <div className="ds_dev">
      <div className="ds_dev_hero">
        <div ref={ref} // Track this div
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} className="ds_dev_hero_two">
          <img src={ds_hero}></img>
        </div>


        <div className="ds_dev_hero_one">
          <motion.h1 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}} className="ds_dev_hero_h1">
          Data Science Solutions for Business Growth  
          </motion.h1>
          <motion.p initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}}>
          Our Data Science expertise helps businesses make data-driven decisions for enhanced efficiency.
          </motion.p>
          <motion.button initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}} type="submit">Let's Build</motion.button>
        </div>
      </div>
      <motion.div initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:2.0 ,ease:'easeInOut'}} className="ds-why_box">
        <p className="ds-sub-heading">Why Choose Our  Data Science Development Service</p>
        <p className="ds-sub-text"> Our Data Science development Process</p>
      </motion.div>
     <DsProcess/>

      <div className="ds-properties">Why Our Data Science Services Stand Out </div>
      <div className="ds-boxes">
        <img className="ds-webbg-1" src={webbg_lt} alt="image" />
        <div className="div">
        <div className="ds-box">
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:1.5,ease:'easeOut'}} className="ds-box-1">
            <div className="ds-box-icon">
              <BiCodeBlock className="ds-icon-code-block" />
            </div>
            <p> Tailored data science strategies to meet your unique business needs.  </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:2.0,ease:'easeIn'}} className="ds-box-2">
            <div className="ds-box-icon">
              <FaPeopleArrows className="ds-icon-code-block" />
            </div>
            <p>
            Implementing cutting-edge ML and AI models for predictive 
            insights and automation. 
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:2.5,ease:'easeIn'}}className="ds-box-3">
            <div className="ds-box-icon">
              <FaLaptop className="ds-icon-code-block" />
            </div>
            <p>
              Seamless, high-performance cross-platform and native app
              development
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:3.0,ease:'easeIn'}}className="ds-box-4">
            <div className="ds-box-icon">
              <FaCalendarCheck className="ds-icon-code-block" />
            </div>
            <p>
            Leveraging big data technologies for faster and more accurate decision
            making.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:3.5,ease:'easeIn'}}className="ds-box-5">
            <div className="ds-box-icon">
              <SlGraph className="ds-icon-code-block" />
            </div>
            <p>
            Ensuring data protection and adherence to industry regulations.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} transition={{duration:4.0,ease:'easeIn'}}className="ds-box-6">
            <div className="ds-box-icon">
              <MdOutlineSecurity className="ds-icon-code-block" />
            </div>
            <p>
            Refining models and strategies for improved accuracy and 
            efficiency over time. 
            </p>
          </motion.div>
        </div>
       
        </div>
        <img className="ds-webbg-2" src={webbg} alt="image" />
        </div>
        
      <div className="ds-professional">
        <h1>Why Data Science is Essential for Your Business </h1>
        <motion.div  initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:1.5 ,ease:'easeInOut'}} className="ds-professinal-boxes">
          <div className="ds-professional-box-one">
            <SiAdguard className="ds-professional-ds-icon-code-block" />

            <div className="ds-professional-content">
              <h2>Data-Driven Decision Making </h2>
              <ul>
                <li>
                Predictive Analytics – Forecast trends and make proactive business decisions. .
                </li>
                <li>
                Real-Time Insights – Access actionable insights to improve strategies..
                </li>
               
              </ul>
            </div>
          </div>

          <div className="ds-professional-box-two">
            <IoPeopleSharp className="ds-professional-ds-icon-code-block"  />
            <div className="ds-professional-content">
              <h2> Enhanced Customer Experience & Personalization </h2>
              <ul>
                <li>
                Behavioral Analytics – Analyze customer interactions for better engagement.
                </li>
                <li>
                Recommendation Systems – Suggest products/services based on user preferences.
                </li>
               
              </ul>
            </div>
          </div>
          <div className="ds-professional-box-three">
            <FaMoneyBillTrendUp className="ds-professional-ds-icon-code-block"  />
            <div className="ds-professional-content">
              <h2> Business Growth & Competitive Advantage </h2>
              <ul>
                <li>
                Process Automation – Use AI-driven solutions to streamline workflows.
                </li>
                <li>
                 Risk Management & Fraud Detection – Identify and mitigate potential risks in real-times.
                </li>
                
              </ul>
            </div>
          </div>
        </motion.div>
      </div>


      <div className="ds-faq_container">
        <h4 className="ds-faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <AppFaq />
      </div>
      <motion.div inital={{scale:0}} whileInView={{scale:1.05}} transition={{duration:1.5,ease:'easeOut'}} className="ds-service-contact">
        <div className="ds-service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="ds-service-contact-content">
          <h1>Use Your Data to Make Your Business Better! </h1>
          <p>
          Today, every business has data. But just having data isn’t enough. You need the right tools to use it well. At Sanjit Tech, we create data science tools that fit your business and help you grow.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </motion.div>
    </div>
  );
}
