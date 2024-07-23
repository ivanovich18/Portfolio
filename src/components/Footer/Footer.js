import React, { useState, useEffect } from 'react';
import footerLogo from '../../assets/favicon_io/android-chrome-192x192.png';
import '../Footer/footer.css'
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from 'react-scroll';

import AOS from "aos";
import 'aos/dist/aos.css';

function Footer() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer>
            <div className='dividerBottomSolid'></div>
            <section className='topFooter'>
                <div className='topLeft' data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                    <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                        <img className='footerLogo' src={footerLogo} alt='Website logo' />
                    </Link>
                    <span className='footerDivider'>/</span>
                    <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                        <p className='footerTitle'>Ivan Suralta</p>
                    </Link>
                </div>
                <div className='topRight'>
                    <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="500" href='mailto:ivangsuralta@gmail.com' target='_blank'><MdEmail className='socialIcons mail' /></a>
                    <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="600" href='https://www.linkedin.com/in/ivan-suralta/' target='_blank'><BsLinkedin className='socialIcons' /></a>
                    <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="700" href='https://github.com/ivanovich18' target='_blank'><BsGithub className='socialIcons github' /></a>
                    <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="800" href='https://www.instagram.com/itsivansuralta/' target='_blank'><BsInstagram className='socialIcons instagram' /></a>
                    <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="900" href='https://www.facebook.com/ivanovich0808' target='_blank'><BsFacebook className='socialIcons facebook' /></a>
                    {/* <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="1100" href='https://twitter.com/ivanovich0808' target='_blank'><FaXTwitter className='socialIcons twitter' /></a> */}
                    <a data-aos="fade-right" data-aos-duration="600" data-aos-delay="1100" href='https://www.tiktok.com/@ivansuraltaph' target='_blank'><FaTiktok className='socialIcons' /></a>
                </div>
            </section>
            <div className='dividerBottomSolid'></div>
            <section className='botFooter'>
                <div className='botLeft'>
                    <AiOutlineCopyrightCircle className='copyrightLogo' />
                    <p>{currentYear} Ivan Suralta. All rights reserved.</p>
                </div>
                <div className='botRight'>
                    <a href='https://github.com/ivanovich18/softdev1-portfolio-website/blob/main/LICENSE' target='_blank'><p>License</p></a>
                    <a href='https://github.com/ivanovich18/softdev1-portfolio-website' target='_blank'>
                        <p>Source Code</p>
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;