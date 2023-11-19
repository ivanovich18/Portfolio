// import aboutMePic from '../../assets/aboutme-pic.png';
import React, { useEffect } from 'react';
import aboutMePic2 from '../../assets/others/aboutme-pic2.png';
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
                <img className='aboutImage' data-aos="zoom-in-down" data-aos-duration="600" data-aos-delay="300" src={aboutMePic2} alt='Ivan portrait photo' />

                <div className='badges'>
                    <a href='https://www.credly.com/badges/8b5468c3-69ae-43d5-8d48-d43d7335e526/public_url' target='_blank'>
                        <img className='metaBadge' data-aos="zoom-in-right" data-aos-duration="600" data-aos-delay="500" src={metaBadge} alt='Meta Front-end Developer Badge' />
                    </a>
                    <a href='https://g.dev/ivan-suralta' target='_blank'>
                        <img className='gdscBadge' data-aos="zoom-in-left" data-aos-duration="600" data-aos-delay="700" src={gdscBadge} alt='GDSC Lead Badge' />
                    </a>
                </div>
            </section>
            <section className='aboutRight'>
                <p className='text1' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1100">👋🏻 Hello! My name is</p>
                <h2 className='text2' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1300">IVAN SURALTA</h2>
                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1500">A 3rd year Computer Engineering student at Cebu Technological University - Main Campus, highly interested in UI/UX Design and frontend web development, with specialization in ReactJS.</p>

                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1700">I am also the Lead of Google Developer Student Clubs - Cebu Technological University (GDSC CTU) for the term 2023-2024.</p>

                <p className='text3' data-aos="fade-left" data-aos-duration="600" data-aos-delay="1900">As an aspiring full-stack web developer, I am constantly expanding my skillset to ensure I can contribute to all aspects of web development.</p>

                <div className='buttons'>
                    <a href='https://www.linkedin.com/in/ivan-suralta/' target='_blank'>
                        <button className='aboutButtons' data-aos="zoom-out-up" data-aos-duration="600" data-aos-delay="2100"><AiFillLinkedin className='aboutIcons' />LinkedIn</button>
                    </a>

                    <a href='https://flowcv.com/resume/7jh4o2e0ac' target='_blank'>
                        <button className='aboutButtons' data-aos="zoom-out-up" data-aos-duration="600" data-aos-delay="2300" ><BsFileEarmarkPerson className='aboutIcons' />Résumé</button>
                    </a>
                </div>
            </section>
        </main >
    );
}

export default About;