import React from 'react'
import './Footer.css'
import Link from 'next/link';
import Contactform from './Contactform'
const Footer = () => {
    const hwfootinfo =  {
		logo: '../images/footer-logo.svg',
    	intro: 'HouseWorks is a HealthTech platform built for not just better healthcare, but a better healthcare experience.',
    	addressL1: '25550 Hawthorne Blvd,',
    	addressL2: 'Ste. 212 Torrance, CA 90505',
    	contact: '310-400-0645'
  	}

	return(
		<footer className="site-footer">
			<div className="top_footer">
				<div className="mx-auto">
					<Contactform />
				</div>
			</div>
			<div className="max-w-[1140px] mx-auto">
				<div className="footer_inner">
					<div className="footer_left">
                    	<a href="/"><img className="full" src={hwfootinfo.logo} alt="" /></a>
						<p className="footer_left_dec py-5 text-white max-w-[320px]">{hwfootinfo.intro}</p>
						<p className="py-7 text-white hidden sm:inline">Address:<br/> 
							{hwfootinfo.addressL1}<br/>
							{hwfootinfo.addressL2}
						</p>
						<p className="text-white  hidden sm:inline">Contact: {hwfootinfo.contact}</p>
                    </div>
                    <div className="footer_about">
						<h3 className="foot_title">About Us</h3>
						<div className="footer_links flex flex-col gap-3 mt-6">
							<Link href="/" 
							className='cursor-pointer hover:text-[#fff] active:text-[#6e2feb] focus:text-[#6e2feb]'>Home</Link>
							<Link href='/Casereview' 
							className='cursor-pointer hover:text-[#fff] active:text-[#6e2feb] focus:text-[#6e2feb]'>Case Review</Link>
							<Link href='/About' 
							className='cursor-pointer hover:text-[#fff] active:text-[#6e2feb] focus:text-[#6e2feb]'>About Us</Link>
							<Link href='/Contact' 
							className='cursor-pointer hover:text-[#fff] active:text-[#6e2feb] focus:text-[#6e2feb]'>Contact Us</Link>
                  
						</div>
					</div>
					<div className="footerEcosystem">
						<h3 className="foot_title">House Ecosystem</h3>
						<ul className="footer_links">
							<li><a href="#">House Works</a></li>
							<li><a href="#">House Medicine</a></li>
							<li><a href="#">House Transplant and Cancer</a></li>
						</ul>
					</div>
				</div>
				<div className="footer_bottom">
					<div className='footer_left text-left mb-6'>
						<p className="py-7 text-white inline-block sm:hidden">Address:<br/> 
							{hwfootinfo.addressL1}<br/>
							{hwfootinfo.addressL2}
						</p>
						<p className="text-white inline-block sm:hidden">Contact: {hwfootinfo.contact}</p>
					</div>
					<ul className="btmfoot_links list-inline gap-5">
						<li className='inline gap-5'><a href="#">Copy Right</a></li>
						<li className='inline gap-5'><a href="#">Privacy Policy</a></li>
						<li className='inline gap-5'><a href="#">Cookies Policy</a></li>
						<li className='inline gap-5'><a href="#">Accessibility</a></li>
						<li className='inline gap-5'><a href="/Termsofuse">Terms of Use</a></li>
					</ul>
				</div>
			</div>
		</footer>
  )
}

export default Footer
