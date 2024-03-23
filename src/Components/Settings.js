import React from 'react'
import '../css/colors.css'
import '../css/plugins.css'
import '../css/style.css'
import setting from '../img/svg/setting.svg'
import arrow from '../img/svg/arrow.svg'
import cancel from '../img/svg/cancel.svg'

function Settings() {
  return (
    <>
    <div class="ryker_tm_settings">
		<div class="icon">
			<img class="svg" src={setting} alt="" />
			<a class="link" href="#"></a>
		</div>
		<div class="wrapper">
			<span class="title">Unlimited Colors</span>
			<ul class="colors">
				<li><a class="blue" href="#"></a></li>
				<li><a class="green" href="#"></a></li>
				<li><a class="brown" href="#"></a></li>
				<li><a class="pink" href="#"></a></li>
				<li><a class="orange" href="#"></a></li>
				<li class="bl"><a class="black" href="#"></a></li>
				<li class="wh"><a class="white" href="#"></a></li>
				<li><a class="purple" href="#"></a></li>
				<li><a class="sky" href="#"></a></li>
				<li><a class="cadetBlue" href="#"></a></li>
				<li><a class="crimson" href="#"></a></li>
				<li><a class="olive" href="#"></a></li>
				<li><a class="red" href="#"></a></li>
			</ul>
			<span class="title">Magic Cursor</span>
			<ul class="cursor">
				<li><a class="showme show" href="#"></a></li>
				<li><a class="hide" href="#"><img class="svg" src={arrow} alt="" /></a></li>
			</ul>
		</div>
	</div>


    <div class="ryker_tm_modalbox">
		<div class="box_inner">
			<div class="close">
				<a href="#"><img class="svg" src={cancel} alt="" /></a>
			</div>
			<div class="description_wrap"></div>
		</div>
	</div>
    </>
  )
}

export default Settings