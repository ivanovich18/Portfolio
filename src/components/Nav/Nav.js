import React from 'react';
import './nav.css';
import logo from '../../assets/favicon_io/android-chrome-192x192.png';
import { Link } from 'react-scroll';
import { RiArrowRightSLine } from "react-icons/ri";


function Nav() {
    return (
        <nav className="navBar">
            <div className='navLeft'>
                <img className='nav-logo' src={logo} alt='Website logo' />
                <span className='divider'>/</span>
                <a className='title' href='' target='_self'>Ivan Suralta</a>
            </div>

            <div className='navCenter'>
                <Link className='desktopLinkItems'>About</Link>
                <Link className='desktopLinkItems'>Skills</Link>
                <Link className='desktopLinkItems'>Experience</Link>
                <Link className='desktopLinkItems'>Projects</Link>
                <Link className='desktopLinkItems'>Certifications</Link>
            </div>
            <button className='desktopMenuBtn'>Contact Me <RiArrowRightSLine className='rightArrow' /></button>
        </nav>
    );
}

export default Nav;