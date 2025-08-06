import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../Digital/DigitalFaq.css"; // Import CSS file
import {motion} from 'framer-motion'
const faqs = [
  {
    question: "What digital marketing services do you offer? ",
    answer:
      "We provide SEO, social media marketing, PPC advertising, content marketing, and email marketing. ",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Organic strategies take 3-6 months, while paid advertising can show immediate results. ",
  },
  {
    question: "Do you provide social media management?",
    answer:
      "Yes, we create and manage social media campaigns on Facebook, Instagram, LinkedIn, and more. .",
  },
  {
    question: "What is PPC advertising, and how does it work?",
    answer:
      "PPC (Pay-Per-Click) ads, like Google Ads, help businesses gain instant traffic by paying for clicks. .",
  },
  {
    question: "Do you provide analytics and reports for marketing campaigns?",
    answer:
      "Yes, we provide performance reports, conversion tracking, and optimization recommendations.",
  },
];


export default function DigitalFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="digital_faq_container">
      {faqs.map((faq, index) => (
        <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.2, // Staggered delay for rain effect
        }}  key={index} className="digital_faq_box">
          <button className="digital_faq_question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="digital_faq_icon" />
            ) : (
              <FiPlus className="digital_faq_icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="digital_faq_answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
