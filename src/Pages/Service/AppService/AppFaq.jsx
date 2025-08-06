import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "../AppService/AppFaq.css"; 
import {motion} from 'framer-motion'

const faqs = [
  {
    question: "What types of mobile apps do you develop? ",
    answer:
      "We specialize in developing high-quality iOS, Android, hybrid, and cross-platform applications that are customized to meet your unique business needs. Our expert team ensures seamless performance, intuitive user experience, and scalable solutions, helping you reach a wider audience across multiple devices.",
  },
  {
    question: "Which technologies do you use for app development?",
    answer:
      "We leverage cutting-edge technologies such as React Native, Flutter, Swift, Kotlin, and other modern frameworks to develop high-performance, scalable, and feature-rich applications. Our expertise in these technologies allows us to build seamless cross-platform and native apps that offer exceptional user experiences.",
  },
  {
    question: "How much time does it take to develop an app?",
    answer:
      "The development timeline for an app depends on various factors, including its complexity, features, platform requirements, and overall scope. Simple applications with basic functionality can typically be completed within 2-3 months, while more complex apps with advanced features, integrations, and custom designs may take 4-6 months or longer.",
  },
  {
    question: "Do you provide post-launch support and updates?",
    answer:
      "Yes, we provide comprehensive app maintenance services, including regular updates, bug fixes, performance optimizations, and feature enhancements to ensure your app remains secure, efficient, and up to date. Our dedicated support team continuously monitors app performance, identifies potential issues, and proactively resolves them to prevent disruptions.",
  },
  {
    question: "Can you integrate third-party APIs into my app?",
    answer:
      "Yes, we can seamlessly integrate a wide range of third-party services and APIs into your app to enhance its functionality and user experience. This includes secure and reliable payment gateways (such as Stripe, PayPal, and Razorpay) for smooth transactions.",
  },
];


export default function AppFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.2, // Staggered delay for rain effect
        }} key={index} className="faq-box">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            {openIndex === index ? (
              <FiX className="faq-icon" />
            ) : (
              <FiPlus className="faq-icon" />
            )}
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}