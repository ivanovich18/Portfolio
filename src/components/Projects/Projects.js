import React, { useEffect } from 'react';
import quiztionAIPic from '../../assets/others/quiz-tion.png';
import studentEnrollmentPic from '../../assets/others/student-enrollment.png';
import littleLemonPic from '../../assets/others/little-lemon.png';
import mangataAndGalloPic from '../../assets/others/mangata-and-gallo.png';
import '../Projects/projects.css';

import AOS from "aos";
import 'aos/dist/aos.css';

function Projects() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    return (
        <section id='projects' className='projects'>
            <h2 className='header2' data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">Projects</h2>
            <div className='projectShowcase'>
                <a className='transform' href='https://github.com/ivanovich18/Quiz-tion-AI' target='_blank'  data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
                    <section className='projectPic'>
                        <h3>Quiz-tion AI</h3>
                        <img src={quiztionAIPic} alt='Quiztion AI Website' />
                    </section>
                </a>
                <a href='https://github.com/ivanovich18/Student-Enrollment-Application' target='_blank' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700">
                    <section className='projectPic' >
                        <h3>Student Enrollment Application</h3>
                        <img src={studentEnrollmentPic} alt='Student Enrollment Application' />
                    </section>
                </a>
                <a href='https://github.com/ivanovich18/little-lemon-ivan-suralta' target='_blank'  data-aos="zoom-in" data-aos-duration="600" data-aos-delay="900">
                    <section className='projectPic'>
                        <h3>Little Lemon Restaurant Reservation</h3>
                        <img src={littleLemonPic} alt='Little Lemon Restaurant Reservation Website' />
                    </section>
                </a>
                <a href='https://github.com/ivanovich18/Mangata-and-Gallo-Landing-Page' target='_blank' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1100">
                    <section className='projectPic' >
                        <h3>Mangata & Gallo E-commerce Page</h3>
                        <img src={mangataAndGalloPic} alt='Mangata and Gallo E-commerce Webpage' />
                    </section>
                </a>
            </div >
            <div className='dividerBottomDashed projectDiv'></div>
        </section >
    );
}

export default Projects;