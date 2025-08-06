import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import '../Components/Navbar.css';
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => setOpen(!open);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleServiceClick = () => {
        setServicesOpen(false);
        if (isMobile) setOpen(false);
    };

    return (
        <header className="navbar-container">
            <nav className='navbar'>
                <div className="navbar-left">
                    <Link to="/">
                        <motion.img
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                            src={logo}
                            alt="Company Logo"
                            className='navbar-logo'
                            width={200}
                            height={60}
                            loading="eager"
                        />
                    </Link>
                </div>

         
                    <div className="navbar-right">
                        <ul className={`navbar-links ${open ? 'navbar-links-show' : ''}`}>
                            <li><Link to="/" className="navbar-link" onClick={() => setOpen(false)}>Home</Link></li>
                            <li><Link to="/about-us" className="navbar-link" onClick={() => setOpen(false)}>About us</Link></li>

                            <li className="navbar-services-menu">
                                <div
                                    className="navbar-services-wrapper"
                                    onMouseEnter={() => !isMobile && setServicesOpen(true)}
                                    onMouseLeave={() => !isMobile && setServicesOpen(false)}
                                >
                                    <li
                                        className="navbar-link"
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                    >
                                        Services
                                    </li>

                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                className="mega-menu"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="mega-menu-column">
                                                    <h4>Development</h4>
                                                    <Link to="/services/Web-development" className="navbar-link" onClick={handleServiceClick}>Web Development</Link>
                                                    <Link to="/services/App-development" className="navbar-link" onClick={handleServiceClick}>App Development</Link>
                                                    <Link to="/services/Software-development" className="navbar-link" onClick={handleServiceClick}>Software Development</Link>
                                                </div>
                                                <div className="mega-menu-column">
                                                    <h4>AI & Data</h4>
                                                    <Link to="/services/Artificial-intelligence" className="navbar-link" onClick={handleServiceClick}>Artificial Intelligence</Link>
                                                    <Link to="/services/Data-science" className="navbar-link" onClick={handleServiceClick}>Data Science</Link>
                                                </div>
                                                <div className="mega-menu-column">
                                                    <h4>Marketing</h4>
                                                    <Link to="/services/Digital-marketing" className="navbar-link" onClick={handleServiceClick}>Digital Marketing</Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </li>

                            <li><Link to="/contact-us" className="navbar-link" onClick={() => setOpen(false)}>Contact us</Link></li>
                        </ul>

                        <motion.button
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
                            className="navbar-menu-icon"
                            onClick={toggleMenu}
                        >
                            <MdMenu />
                        </motion.button>
                    </div>
            
            </nav>
        </header>
    );
};

export default Navbar;
