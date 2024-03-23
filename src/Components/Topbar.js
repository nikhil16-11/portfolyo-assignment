import React, { useState } from 'react';
import '../css/colors.css';
import '../css/plugins.css';
import '../css/style.css';
import dark from '../img/logo/dark.png';

function Topbar() {
  // State to manage menu open/close status
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle toggling the menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`ryker_tm_topbar ${menuOpen ? 'active' : ''}`}>
      <div className="topbar_inner">
        <div className="logo">
          <a href="/"><img src={dark} alt="" /></a>
        </div>
        <div className="menu">
          <div className="list">
            <ul className="anchor_nav">
              <li className="current"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="trigger" onClick={handleMenuToggle}>
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
