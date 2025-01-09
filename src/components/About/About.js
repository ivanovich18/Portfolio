// import aboutMePic from '../../assets/aboutme-pic.png';
import React, { useEffect } from 'react';
import aboutMePic from '../../assets/others/aboutme-pic5.jpg';
import metaBadge from '../../assets/others/meta-front-end-developer-certificate.png';
import gdscBadge from '../../assets/others/gdsc-badge.png';
import '../About/about.css'
import { AiFillLinkedin } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";

import AOS from "aos";
import 'aos/dist/aos.css';

function About() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    return (
        <main id='about' className='aboutPage'>
            <section className='aboutLeft'>
                <div data-aos="zoom-in-down" data-aos-duration="600" data-aos-delay="300">
                <img className='aboutImage' src={aboutMePic} alt='Ivan portrait photo' loading='lazy'/>
                </div>

                <div className='badges'>
                    <a href='https://www.credly.com/badges/8b5468c3-69ae-43d5-8d48-d43d7335e526/public_url' target='_blank'  data-aos="zoom-in-right" data-aos-duration="600" data-aos-delay="500">
                        <img className='metaBadge' src={metaBadge} alt='Meta Front-end Developer Badge' />
                    </a>
                    <a href='https://g.dev/ivan-suralta' target='_blank'  data-aos="zoom-in-left" data-aos-duration="600" data-aos-delay="700" >
                        <img className='gdscBadge'src={gdscBadge} alt='GDSC Lead Badge' />
                    </a>
                </div>
            </section>
            <section className='aboutRight'>
                <p className='text1' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1100">👋🏻 Hello! My name is</p>
                <h2 className='text2' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1300">IVAN SURALTA</h2>
                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1500">A 4th year Computer Engineering student at Cebu Technological University - Main Campus. I'm interested in UI/UX design, web development, and project management.</p>

                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1700">I was the Lead of the Google Developer Student Clubs - CTU in 2023-2024 and currently serve as a Consultant.</p>

                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1900">I'm also a Galaxy Campus Student Ambassador representing Cebu Technological University for Samsung Philippines.</p>

                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="2100">As an aspiring seasoned software engineer, I am constantly learning and growing to contribute effectively across the entire development process.</p>

                <div className='buttons'>
                    <a href='https://www.linkedin.com/in/ivan-suralta/' target='_blank' data-aos="zoom-out-up" data-aos-duration="600" data-aos-delay="2100">
                        <button className='aboutButtons' ><AiFillLinkedin className='aboutIcons' />LinkedIn</button>
                    </a>
                    <a href='https://flowcv.com/resume/7jh4o2e0ac' target='_blank'  data-aos="zoom-out-up" data-aos-duration="600" data-aos-delay="2300">
                        <button className='aboutButtons'><BsFileEarmarkPerson className='aboutIcons' />Résumé</button>
                    </a>
                </div>
            </section>
        </main >
    );
}

export default About;