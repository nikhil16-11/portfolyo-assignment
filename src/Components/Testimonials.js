import React, { useContext } from 'react'
import '../css/colors.css'
import '../css/plugins.css'
import '../css/style.css'
import star from '../img/svg/star.svg'
import quote from '../img/svg/quote.svg'
import { myContext } from '../Context'
// import about2 from '../img/about/2.jpg'
// import about1 from '../img/about/1.jpg'
// import about3 from '../img/about/3.jpg'

function Testimonials() {
	const {user}=useContext(myContext)
	
	const userTestimonials=user?.testimonials
	
  return (
    <div class="ryker_tm_section">
		<div class="ryker_tm_testimonials">
			<div id="grouploop">
				<div class="item-wrap">
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
					<div class="item"><span>Testimonials</span></div>
				</div>
			</div>
			<div class="container">
				<div class="testimonials_list">
					<div>
						{userTestimonials?.map((item)=>(

						<div class="wr_in item">
							<div class="list_inner">
								<ul class="stars">
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
								</ul>
								<div class="text">
									<p>{item?.review}</p>
								</div>
								<div >
									<h3 class="author"><span>{item?.name}</span></h3>
									<h3 class="job"><span>{item?.position}</span></h3>
								</div>
								<div class="avatar">
									<img style={{height:"8rem"}} src={item?.image?.url} alt='no image'/>
								</div>
								<img class="svg myquote" src={quote} alt="" />
							</div>
						</div>
						))}
						{/* <div class="wr_in item">
							<div class="list_inner">
								<ul class="stars">
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
								</ul>
								<div class="text">
									<p>The quality of the design is very high, and with a bit of knowledge about HTML and CSS also very easy to customize. Overall a good design, that I am quite happy with. Really appreciate that.</p>
								</div>
								<div class="details">
									<h3 class="author"><span>Avon Smith</span></h3>
									<h3 class="job"><span>Designer</span></h3>
								</div>
								<div class="avatar">
									<div class="image" style={{ backgroundImage: `url(${about1})` }}></div>
								</div>
								<img class="svg myquote" src={quote} alt="" />
							</div>
						</div>
						<div class="wr_in item">
							<div class="list_inner">
								<ul class="stars">
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
									<li><img class="svg" src={star} alt="" /></li>
								</ul>
								<div class="text">
									<p>I had a problem finding something, asked the support team, got a reply and a solution within a few minutes. Brilliant support! very happy with the website I bought. Thank you developers!!</p>
								</div>
								<div class="details">
									<h3 class="author"><span>Bruce Kennedy</span></h3>
									<h3 class="job"><span>Photographer</span></h3>
								</div>
								<div class="avatar">
									<div class="image" style={{ backgroundImage: `url(${about3})` }}></div>
								</div>
								<img class="svg myquote" src={quote} alt="" />
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Testimonials