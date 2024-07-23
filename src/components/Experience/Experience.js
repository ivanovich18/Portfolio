import React, { useEffect } from 'react';
import gdscLogo from '../../assets/others/Google_for_Developers_logomark_color.png';
import dashlabsLogo from '../../assets/others/dashlabs-logo.jpg';
import ctuLogo from '../../assets/others/ctu-logo.png';
import symphLogo from '../../assets/others/symph-logo.png';
import raykanLogo from '../../assets/others/raykan-logo.jpeg';
import galaxyLogo from '../../assets/others/gcb-logo.png';
import '../Experience/experience.css'

import AOS from "aos";
import 'aos/dist/aos.css';

function Experience() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    return (
        <section id='experience' className='experience'>
            <h2 className='header2' data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">Experience</h2>
            <section class='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                <div className='expLeft'>
                    <h3 className='header3'>Galaxy Campus Student Ambassador </h3>
                    <p className='expDate'>July 2024 - Present</p>
                    <p>Samsung Electronics Philippines Corporation</p>
                    <p className='expDetails'>Created content promoting Samsung products, boosted Samsung's presence on campus, and executed promotional activities and campaigns.</p>
                </div>
                <div className='expRight'>
                    <img className='orgLogo' src={galaxyLogo} alt='Galaxy Campus Logo' />
                </div>
            </section>
            <div className='pulse pulseOne' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <div className='verticalLine verticalLineOne' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <section class='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                <div className='expLeft'>
                    <h3 className='header3'>Project Management Intern </h3>
                    <p className='expDate'>June 2024 - Present</p>
                    <p>Symph</p>
                    <p className='expDetails'>Facilitated team syncs and client meetings, prepared product/feature documentation, and performed quality assurance.</p>
                </div>
                <div className='expRight'>
                    <img className='orgLogo' src={symphLogo} alt='Symph Logo' />
                </div>
            </section>
            <div className='pulse pulseTwo' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <div className='verticalLine verticalLineTwo' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
             <section class='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                <div className='expLeft'>
                    <h3 className='header3'>Consultant </h3>
                    <p className='expDate'>June 2024 - Present</p>
                    <p>Google Developer Student Clubs - CTU</p>
                    <p className='expDetails'>Mentored core team members to develop their skills and build innovative solutions, collaborating to deliver engaging events while providing guidance and support.</p>
                </div>
                <div className='expRight'>
                    <img className='orgLogo' src={gdscLogo} alt='GDSC Logo' />
                </div>
            </section>
            <div className='pulse pulseThree' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <div className='verticalLine verticalLineThree' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <section class='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                <div className='expLeft'>
                    <h3 className='header3'>UI/UX Design Intern </h3>
                    <p className='expDate'>March 2024 - May 2024</p>
                    <p>Raykan Technologies</p>
                    <p className='expDetails'>Revamped client design systems, designed detailed wireframes and interactive prototypes, and collaborated with cross-functional teams.</p>
                </div>
                <div className='expRight'>
                    <img className='orgLogo' src={raykanLogo} alt='Raykan Technologies Logo' />
                </div>
            </section>
            <div className='pulse pulseFour' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <div className='verticalLine verticalLineFour' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <section className='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="500">
                <div className='expLeft'>
                    <h3 className='header3'>Lead </h3>
                    <p className='expDate'>August 2023 - June 2024</p>
                    <p>Google Developer Student Clubs - CTU</p>
                    <p className='expDetails'>Presided a 650+ member student tech community on campus, interested in Google Developer technologies and products that are industry trend and must haves in development.</p>
                </div>
                <div class='expRight'>
                    <img className='orgLogo' src={gdscLogo} alt='GDSC Logo' />
                </div>
            </section>
            <div className='pulse pulseFive' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <div className='verticalLine verticalLineFive' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <section class='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                <div className='expLeft'>
                    <h3 className='header3'>Client Success Intern </h3>
                    <p className='expDate'>August 2023 - October 2023</p>
                    <p>Dashlabs.ai</p>
                    <p className='expDetails'>Led the Sales department's lead generation efforts, managed client inquiries via email and messenger, and initiated daily company-wide standup meetings.</p>
                </div>
                <div className='expRight'>
                    <img className='orgLogo' src={dashlabsLogo} alt='Dashlabs.ai Logo' />
                </div>
            </section>
            <div className='pulse pulseSix' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <div className='verticalLine verticalLineSix' data-aos="zoom-in" data-aos-duration="650" data-aos-delay="500"></div>
            <section class='expContainer whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="700">
                <div className='expLeft'>
                    <h3 className='header3'>Student </h3>
                    <p className='expDate'>September 2021 - present</p>
                    <p>Cebu Technological University - Main Campus</p>
                    <p className='expDetails'>Studies BS in Computer Engineering (BSCpE) in a state technological university in Cebu City, Philippines. This 4-year program encompasses the software and hardware aspects.</p>
                </div>

                <div className='expRight'>
                    <img className='orgLogo' src={ctuLogo} alt='CTU Logo' />
                </div>
            </section>
            <div className='dividerBottomDashed expDivider'></div>
        </section>
    );
}

export default Experience;