import React, { useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUsPage.css";
import { motion, useInView } from "framer-motion";

const ContactUsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data correctly
    const formData = new FormData(e.target);

    // Convert FormData to a simple object
    const data = Object.fromEntries(formData.entries());

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwp5Xw0_725sD35VQWqsPMyKZk-U9VMBfRivZtQrPne445IaQb5TTY9PYOmlzsGAJ_G/exec"; // Replace with your Web App URL

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Show success toast
      toast.success(" Details sent successfully! Thank you.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      // Clear the form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="contact">
      <ToastContainer transition={Bounce} />
      <div id="contact_hero">
        <h1>
          Let’s <span>Connect </span>& Collaborate
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
        >
          Partner with Us for Innovative Solutions
        </motion.p>
      </div>


      <div className="contact-box-wrapper">
  <div className="contact_details">
    <div className="getin">
      <p>GET IN TOUCH</p>
    </div>

    <motion.div
      className="box1"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div className="box-icon">
        <FaMapMarkerAlt className="location" />
      </motion.div>
      <h3>Office Location</h3>
      <p>
        Unit: 303, 3rd floor, APNRT Tech Park, Mangalagiri, Atmakur Rural,
        Andhra Pradesh 522503
      </p>
    </motion.div>

    <motion.div
      className="box2"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div className="box-icon">
        <FaHeadphones className="communication" />
      </motion.div>
      <h3>Communication</h3>

      <div className="box2-no">
        <p><b>8639620754</b></p>
      </div>

      <div className="box2-mail">
        <p><b>sanjittechsolutions@outlook.com</b></p>
      </div>
    </motion.div>
  </div>
</div>


      {/* Contact Form */}
      <motion.div className="contact-form-wrapper">
        <motion.div
          className="form-section"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <h2>Contact Us</h2>
          <p>
            We’re here to answer your questions, discuss your ideas, and help
            you bring your vision to life. Whether you’re looking for custom
            solutions, technical support, or just want to say hello – we’re just
            a message away.
          </p>
        </motion.div>

        <motion.div
          className="contact-container"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="form_container">
            <h1>Let’s Build Something Great Together</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone no"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Type Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button className="cta-btn" type="submit">
                Submit
              </button>
            </form>
            {/* Toast Notifications */}
            {/* <ToastContainer /> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Google Map Section */}
      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2>Find Us on the Map</h2>
        <div className="map-wrapper">
          {/* Clickable Overlay to Open Google Maps with Company Name */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination_place_id=ChIJ_ebue8HxNToRmMhI2ydZhns&destination=Sanjit%20Tech%20Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="map-overlay"
          ></a>

          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.039068687784!2d80.57401407498789!3d16.422842084309128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f1c17beee6fd%3A0x7b865927db48c898!2sSanjit%20Tech%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743200204832!5m2!1sen!2sin"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};
export default ContactUsPage;