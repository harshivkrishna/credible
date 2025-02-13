import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons
import './Navbar.css'
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
            <img src="/assets/logo.png" alt="" />
        </div>
        
        {/* Navbar Links for Large Screens */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/experience">Experience</a>
          <a href="/info">Info</a>
          <a href="/connect"><button className='nav-btn'>CONNECT</button></a>
        </div>
        
        {/* Menu Icon for Small Screens */}
        <div className="menu-icon" onClick={toggleSidebar}>
          <i className={`bx bx-${!sidebarOpen?'menu':''}`}></i>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: sidebarOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="close-btn" onClick={toggleSidebar}>
          <i className="bx bx-x"></i>
        </div>
        <div className="sidebar-links">
        <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/experience">Experience</a>
          <a href="/info">Info</a>
          <a href="/connect"><button className='nav-btn'>CONNECT</button></a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
