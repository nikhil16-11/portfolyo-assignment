import React from 'react'
import "../css/colors.css";
import "../css/plugins.css";
import "../css/style.css";
import facebook from '../img/svg/social/facebook.svg'
import twitter from '../img/svg/social/twitter.svg'
import instagram from '../img/svg/social/instagram.svg'
import dribbble from '../img/svg/social/dribbble.svg'
import tiktok from '../img/svg/social/tik-tok.svg'


function Copyright() {

  return (
<div class="ryker_tm_section">
		<div class="ryker_tm_copyright">
			<div class="container">
				<div class="copyright_inner">
					<div class="text" >
						<p>Copyright &copy; 2021. All rights are reserved</p>
					</div>
					<div class="social" >
						<ul>
							<li><a href="#"><img class="svg" src={facebook} alt="" /></a></li>
							<li><a href="#"><img class="svg" src={twitter} alt="" /></a></li>
							<li><a href="#"><img class="svg" src={instagram} alt="" /></a></li>
							<li><a href="#"><img class="svg" src={dribbble} alt="" /></a></li>
							<li><a href="#"><img class="svg" src={tiktok} alt="" /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Copyright