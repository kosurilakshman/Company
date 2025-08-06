import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../whyChooseFaq/whyChooseFaq.css"; // Import CSS file
import { motion } from "framer-motion";

const faqs = [
  {
    question:
      "Why pick Sanjit Tech Solutions for app, website, or software development?",
    answer:
      "We create easy-to-use custom digital tools that help your business grow and stay ahead of competitors. Our solutions are designed to fit your exact needs..",
  },
  {
    question: "How do you build a custom app or website?",
    answer:
      "We follow a clear process: 1. Careful planning 2. Expert development 3. Thorough testing 4. Smooth launch 5. Ongoing support 6.We handle everything to ensure your project succeeds..",
  },
  {
    question: "Can you work with both small and big businesses?",
    answer:
      "Yes! We develop smart digital solutions for startups, small businesses, and large companies. Our approach adapts to your business needs" ,
  },
  {
    question: "How do your solutions help businesses grow?",
    answer:
      "We use the latest technology, focus on great user experience, and include SEO and digital marketing strategies. This helps attract more customers and boosts your online presence.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Absolutely! We offer updates, fix issues quickly, and provide continuous support to keep your app or website running smoothly.",
  },
];

export default function WhyChooseFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="whychoose-faq-container">
      <div className="whychoosefaq_container">
        <h4 className="whychoosefaq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
      </div>
      {faqs.map((faq, index) => (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.2, // Staggered delay for rain effect
          }}
          key={index}
          className="whychoose-faq-box"
        >
          <button
            className="whychoose-faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? (
              <FiX className="whychoose-faq-icon" />
            ) : (
              <FiPlus className="whychoose-faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="whychoose-faq-answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
