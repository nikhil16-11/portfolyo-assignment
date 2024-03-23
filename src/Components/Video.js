import React, { useEffect } from 'react'
import "../css/colors.css";
import "../css/plugins.css";
import "../css/style.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Video() {
	useEffect(()=>{
		AOS.init({duration:1000})
	  },[])
  return (
    <div class="ryker_tm_section">
		<div class="ryker_tm_video">
			<div class="background">
				<div class="image jarallax" data-speed="0" data-img-url="img/hero/1.jpg"></div>
				<div class="overlay"></div>
			</div>
			<div class="content">
				<div class="container">
					<div class="content_inner">
						<span class="rounded"><a class="popup-youtube" href="https://www.youtube.com/watch?v=ICr_bOuM9Zo"></a></span>
						<h3 class="text" data-aos="fade-up">I am delivering beautiful digital products for my clients</h3>
						<div class="ryker_tm_button" data-aos="fade-up">
							<a class="popup-youtube" href="https://www.youtube.com/watch?v=ICr_bOuM9Zo">Watch Video</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Video