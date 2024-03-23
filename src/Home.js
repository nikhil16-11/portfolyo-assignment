import React from 'react'
import Settings from "./Components/Settings";
import '../src/css/colors.css'
import '../src/css/plugins.css'
import '../src/css/style.css'
import Topbar from "./Components/Topbar";
import Mobilemenu from "./Components/Mobilemenu";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Video from "./Components/Video";
import Testimonials from "./Components/Testimonials";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copyright";

function Home() {
  return (
    <div>
      {/* Wrapper All */}
      <div class="ryker_tm_all_wrap" data-magic-cursor="show" data-color="brown"> 
      <Settings/>
      <Topbar/>
      <Mobilemenu/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Video/>
      <Testimonials/>
      <News/>
      <Contact/>
      <Copyright/>
      </div>
      {/* Wrapper All */}
    </div>
  )
}

export default Home