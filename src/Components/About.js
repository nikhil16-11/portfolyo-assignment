import React, { useContext, useEffect } from 'react';
import '../css/colors.css';
import '../css/plugins.css';
import '../css/style.css';
import thumb1 from '../img/thumbs/1-1.jpg'
import about2 from '../img/about/2.jpg'
import sign from '../img/signature.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { myContext } from '../Context';

function About() {

  const {user}=useContext(myContext)

  const userInfo=user?.about
  
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div className="ryker_tm_section" id="about">
      <div className="ryker_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left" data-aos="fade-right">
              <div className="image">
                <img src={thumb1} alt="" />
                <div className="main" style={{ backgroundImage: `url(${userInfo?.avatar?.url})` }}></div>
                <div className="experience">
                  <h3 className="year" style={{ backgroundImage: `url(${userInfo?.avatar?.url})` }}>7</h3>
                  <div id="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                      <defs>
                        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                      </defs>
                      <circle cx="150" cy="100" r="75" fill="none"/>
                      <g>
                        <use xlinkHref="#circlePath" fill="none"/>
                        <text fill="#000">
                          <textPath xlinkHref="#circlePath">Years of best and successful work experience</textPath>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="right" data-aos="fade-left">
              <div className="ryker_tm_title">
                <span>About Me</span>
                <h3>{userInfo?.subTitle}</h3>
              </div>
              <div className="text">
                <p>{userInfo?.description}</p>
              </div>
              <div className="signature">
                <img src={sign} alt="" />
              </div>
              <div className="ryker_tm_button">
                <a href="#">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
