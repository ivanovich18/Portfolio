import React from 'react';
import './nav.css';
import logo from '../../assets/favicon_io/android-chrome-192x192.png';
import { Link } from 'react-scroll';
import { RiArrowRightSLine } from "react-icons/ri";


function Nav() {
    return (
        <nav className="navBar">
            <div className='navLeft'>
                <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                    <img className='nav-logo' src={logo}
                        alt='Website logo' />
                </Link>
                <span className='divider'>/</span>
                <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                    <a className='title' >Ivan Suralta</a>
                </Link>
            </div>

            <div className='navCenter'>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-60} duration={500} className='desktopLinkItems'>About</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopLinkItems'>Skills</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-90} duration={500} className='desktopLinkItems'>Experience</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopLinkItems'>Projects</Link>
                <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-100} duration={500} className='desktopLinkItems'>Certifications</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                <button className='desktopMenuBtn'>Contact Me <RiArrowRightSLine className='rightArrow' /></button>
            </Link>
        </nav>
    );
}

export default Nav;