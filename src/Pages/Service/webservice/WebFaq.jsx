import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../webservice/WebFaq.css"; // Import CSS file
import {motion} from "framer-motion"

const faqs = [
  {
    question: "What’s the first step in building my website?",
    answer:
      "We start by learning about your business, customers, and competitors to understand your needs."
  },
  {
    question: "How do you plan the structure of the website?",
    answer:
      "We work with you to create a simple and clear plan so your visitors can easily find what they’re looking for."
  },
  {
    question: "What technologies do you use to build websites?",
    answer:
      "We use modern tools and best practices to build fast, secure, and responsive websites that look great on all devices."
  },
  {
    question: "How do you make sure the website works perfectly?",
    answer:
      "Before launch, we test everything thoroughly to ensure it’s functional, secure, and optimized for performance."
  },
  {
    question: "Do you offer support after the website goes live?",
    answer:
      "Yes, we provide ongoing maintenance and support to keep your website running smoothly and securely."
  }
];



export default function WebFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="web-faq-container">
      {faqs.map((faq, index) => (
        <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.2, // Staggered delay for rain effect
        }} key={index} className="web-faq-box">
          <button className="web-faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="web-faq-icon" />
            ) : (
              <FiPlus className="web-faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="web-faq-answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
