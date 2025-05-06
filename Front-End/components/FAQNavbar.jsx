import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaChalkboardTeacher, FaCog, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa"; // Import icons
import { Button } from "react-bootstrap"; // For the logout button
import { motion } from "framer-motion"; // For animations

const FAQNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();  // Clear any stored auth/session data
    navigate("/login");  // Redirect user to login page after logout
  };

  return (
    <header className="bg-blue-500">
      {/* Top Bar Section (Company Branding and System Navigation Links) */}
      <div className="flex flex-col md:flex-row justify-between items-center p-3">
        <div className="w-full md:w-1/3 p-3 flex items-center justify-center md:justify-start">
          {/* Link FAQ System to Home */}
          <Link to="/" className="text-white font-bold text-[13px] md:text-[18px]">
            FAQ System
          </Link>
        </div>

        {/* System Navigation Links */}
        <div className="bg-paleBlue w-full md:w-2/3 p-3 flex justify-center md:justify-end items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}  // Animation on hover
            whileTap={{ scale: 0.9 }}    // Tap animation
            className="d-flex align-items-center my-2"
          >
            <Link to="/browse-faqs" className="text-white d-flex align-items-center">
              <FaQuestionCircle className="me-2 text-xl" /> Browse FAQs
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="d-flex align-items-center my-2"
          >
            <Link to="/student" className="text-white d-flex align-items-center">
              <FaUser className="me-2 text-xl" /> Student
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="d-flex align-items-center my-2"
          >
            <Link to="/tutor-dashboard" className="text-white d-flex align-items-center">
              <FaChalkboardTeacher className="me-2 text-xl" /> Tutor
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="d-flex align-items-center my-2"
          >
            <Link to="/admin" className="text-white d-flex align-items-center">
              <FaCog className="me-2 text-xl" /> Admin
            </Link>
          </motion.div>

          {/* Logout Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ms-auto my-2"
          >
            <Button variant="outline-light" onClick={handleLogout} className="d-flex align-items-center">
              <FaSignOutAlt className="me-2" /> Logout
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default FAQNavbar;
