import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../DataScience/DataScienceFaq.css"; // Import CSS file
import {motion} from "framer-motion"

const faqs = [
  {
    question: "What is data science, and how can it help my business ",
    answer:
      "Data science helps businesses analyze large data sets to uncover trends, predict customer behavior, make data-driven decisions",
  },
  {
    question: "What types of data analytics do you offer? ",
    answer:
      "We provide predictive analytics, real-time data processing, big data analysis, and AI-driven insights.",
  },
  {
    question: "Can you work with my existing business data? ",
    answer:
      "Yes, we analyze structured and unstructured data from various sources to provide actionable insights.",
  },
  {
    question: "What industries benefit from data science",
    answer:
      "Data science is used in finance, healthcare, retail, marketing, logistics, and many other sectors.",
  },
 
];


export default function DataScienceFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ds-faq-container">
      {faqs.map((faq, index) => (
        <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.2, // Staggered delay for rain effect
        }}  key={index} className="ds-faq-box">
          <button className="ds-faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="ds-faq-icon" />
            ) : (
              <FiPlus className="ds-faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="ds-faq-answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
