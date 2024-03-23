import React, { useContext, useEffect } from 'react'
import "../css/colors.css";
import "../css/plugins.css";
import "../css/style.css";
import portfolio1 from '../img/portfolio/1.jpg'
import portfolio2 from '../img/portfolio/2.jpg'
import portfolio3 from '../img/portfolio/3.jpg'
import portfolio4 from '../img/portfolio/4.jpg'
import portfolio5 from '../img/portfolio/5.jpg'
import portfolio6 from '../img/portfolio/6.jpg'
// import portfolio7 from '../img/portfolio/7.jpg'
// import portfolio8 from '../img/portfolio/8.jpg'
// import portfolio9 from '../img/portfolio/9.jpg'
// import thumbs4 from '../img/thumbs/4-2.jpg'
import thumbs1 from '../img/thumbs/1-1.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { myContext } from '../Context';

function Portfolio() {

	const {user}=useContext(myContext)

	const userProjects=user?.projects

	// const userProjects=user?.


	useEffect(()=>{
		AOS.init({duration:1000})
	  },[])
  return (
    <div class="ryker_tm_section" id="portfolio">
		<div class="ryker_tm_portfolio">
			<div class="container">
				<div class="portfolio_inner">
					<div class="ryker_tm_title">
						<span>Portfolio</span>
						<h3>Each project is a unique piece of development</h3>
					</div>
					<div class="portfolio_list">
						<ul class="gallery_zoom">
							{userProjects?.map((item)=>(
							<li class="wow" data-aos="fade-up">
								<div class="list_inner">
									<div class="image">
										<img src={thumbs1} alt="" />
										<div class="main" style={{ backgroundImage: `url(${item?.image?.url})` }}></div>
									</div>
									<div class="overlay"></div>
									<div class="details">
										<h3>{item.title}</h3>
										<span>{item.techStack}</span>
									</div>
									{/* <a class="ryker_tm_full_link popup-vimeo" href="https://vimeo.com/312334044"></a> */}
								</div>
							</li>
							))}
							
								
								 {/* Hidden informations for popup begin  */}
								{/* <div class="portfolio_hidden_infos">
									<div class="popup_details">
										<div class="top_image"></div>
										<div class="portfolio_main_title"></div>
										<div class="main_details">
											<div class="textbox">
												<p>The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China. A genomic study of the lemon indicated it was a hybrid between bitter orange and citron.</p>
												<p>The first substantial cultivation of lemons in Europe began in Genoa in the middle of the 15th century. The lemon was later introduced to the Americas in 1493 when Christopher Columbus brought lemon seeds to Hispaniola on his voyages. Spanish conquest throughout the New World helped spread lemon seeds.</p>
											</div>
											<div class="detailbox">
												<ul>
													<li>
														<span class="first">Client</span>
														<span>Alvaro Morata</span>
													</li>
													<li>
														<span class="first">Category</span>
														<span><a href="#">Detail</a></span>
													</li>
													<li>
														<span class="first">Date</span>
														<span>March 07, 2021</span>
													</li>
													<li>
														<span class="first">Share</span>
														<ul class="share">
															<li><a href="#"><img class="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
															<li><a href="#"><img class="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
										<div class="additional_images">
											<ul>
												<li>
													<div class="list_inner">
														<div class="my_image">
															<img src={thumbs4} alt="" />
															<div class="main" style={{ backgroundImage: `url(${portfolio7})` }}></div>
														</div>
													</div>
												</li>
												<li>
													<div class="list_inner">
														<div class="my_image">
															<img src={thumbs4} alt="" />
															<div class="main" style={{ backgroundImage: `url(${portfolio8})` }}></div>
														</div>
													</div>
												</li>
												<li>
													<div class="list_inner">
														<div class="my_image">
															<img src={thumbs4} alt="" />
															<div class="main" style={{ backgroundImage: `url(${portfolio9})` }}></div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div> */}
								 {/* Hidden informations for popup end */}
								
							
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Portfolio