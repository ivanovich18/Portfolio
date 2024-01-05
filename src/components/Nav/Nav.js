import React, { useState, useEffect } from 'react';
import './nav.css';
import logo from '../../assets/favicon_io/android-chrome-192x192.png';
import { Link } from 'react-scroll';
import { RiArrowRightSLine } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

import AOS from "aos";
import 'aos/dist/aos.css';


function Nav() {

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    return (
        <div className='fullWidth'>
        <nav className="navBar">
            <div className='navLeft' data-aos="fade-left" data-aos-duration="600" data-aos-delay="700">
                <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                    <img className='nav-logo' src={logo}
                        alt='Website logo' />
                </Link>
                <span className='divider'>/</span>
                <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                    <a className='title' >Ivan Suralta</a>
                </Link>
            </div>

            <div className='navCenter' data-aos="">
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='desktopLinkItems'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="700">About</a></Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopLinkItems' ><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="900">Skills</a></Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-90} duration={500} className='desktopLinkItems'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="1100">Experience</a></Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopLinkItems'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="1300">Projects</a></Link>
                <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-100} duration={500} className='desktopLinkItems'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="1500">Certifications</a></Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                <button className='desktopMenuBtn' data-aos="fade-right" data-aos-duration="600" data-aos-delay="700">Contact Me <RiArrowRightSLine className='rightArrow' /></button>
            </Link>

            <RxHamburgerMenu className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />

            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-80} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-65} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-80} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>Experience</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-80} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>Certifications</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500} className='mobileItem' onClick={() => setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav >
        </div>
    );
}

export default Nav;