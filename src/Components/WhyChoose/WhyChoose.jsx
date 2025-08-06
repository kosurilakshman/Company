import React, { useEffect, useState } from "react";
import "../WhyChoose/WhyChoose.css";
import { motion } from "framer-motion";

const WhyChoose = () => {
    const [disableAnimations, setDisableAnimations] = useState(false);

    // Detect screen width and disable animations if <= 768px
    useEffect(() => {
        const handleResize = () => {
            setDisableAnimations(window.innerWidth <= 768);
        };
        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="whyChoose-section">
            <div className="whyChoose-header">
                <div className="chooseUs-border"></div>
                <h2 className="whyChoose-subheading">Why Sanjit Tech?</h2>
            </div>

            <div className="card-box">
                {/* Moving Circles (Hidden on small screens) */}
                {!disableAnimations && (
                    <>
                        <motion.div
                            className="md-circleLeft"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, yoyo: Infinity }}
                        />
                        <motion.div
                            className="md-circleRight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, yoyo: Infinity }}
                        />
                    </>
                )}

                {/* Left Card */}
                {disableAnimations ? (
                    <div className="card-left cards">
                        <h2 className="card-title">What makes Sanjit Tech different?</h2>
                        <p className="card-text">
                            Our expert team ensures innovative, high-performance solutions
                            tailored to your business growth, leveraging the latest technology
                            to drive efficiency and success.
                        </p>
                    </div>
                ) : (
                    <motion.div
                        className="card-left cards"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.3, duration: 1.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h2 className="card-title">What makes Sanjit Tech different?</h2>
                        <p className="card-text">
                            Our expert team ensures innovative, high-performance solutions
                            tailored to your business growth, leveraging the latest technology
                            to drive efficiency and success.
                        </p>
                    </motion.div>
                )}

                {/* Right Card */}
                {disableAnimations ? (
                    <div className="card-right cards">
                        <h2 className="card-title">Why Choose Sanjit Tech?</h2>
                        <p className="card-text">
                            We deliver cutting-edge, scalable web solutions designed to
                            enhance user experience, boost performance, and accelerate your
                            digital transformation with precision and expertise.
                        </p>
                    </div>
                ) : (
                    <motion.div
                        className="card-right cards"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 1.0, duration: 1.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h2 className="card-title">Why Choose Sanjit Tech?</h2>
                        <p className="card-text">
                            We deliver cutting-edge, scalable web solutions designed to
                            enhance user experience, boost performance, and accelerate your
                            digital transformation with precision and expertise.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default WhyChoose;
