import React, { useState } from 'react';

function Mobilemenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Your toggleMenu function should be called here if it's defined elsewhere
    // toggleMenu(); 
  };

  return (
    <div className={`ryker_tm_mobile_menu ${menuOpen ? 'active' : ''}`}>
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="/"><img src="img/logo/dark.png" alt="" /></a>
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
      <div className="dropdown">
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mobilemenu;
