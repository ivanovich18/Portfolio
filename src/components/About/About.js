import aboutMePic from '../../assets/aboutme-pic.png';
import metaBadge from '../../assets/meta-front-end-developer-certificate.png';
import gdscBadge from '../../assets/gdsc-badge.png';
import '../About/about.css'
import { AiFillLinkedin } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";

function About() {
    return (
        <main className='aboutPage'>
            <section className='aboutLeft'>
                <img className='aboutImage' src={aboutMePic} alt='Ivan portrait photo' />

                <div className='badges'>
                    <img className='metaBadge' src={metaBadge} alt='Meta Front-end Developer Badge' />
                    <img className='gdscBadge' src={gdscBadge} alt='GDSC Lead Badge' />
                </div>
            </section>
            <section className='aboutRight'>
                <p className='text1'>👋🏻 Hello! My name is</p>
                <h2 className='text2'>IVAN SURALTA</h2>
                <p className='text3'>A 3rd year Computer Engineering student at Cebu Technological University - Main Campus, highly interested in UI/UX Design and frontend web development, with specialization in ReactJS.</p>

                <p className='text3'>I am also the Lead of Google Developer Student Clubs - Cebu Technological University (GDSC CTU) for the term 2023-2024.</p>

                <p className='text3'>As an aspiring full-stack web developer, I am constantly expanding my skillset to ensure I can contribute to all aspects of web development.</p>

                <div className='buttons'>
                    <button className='aboutButtons'><AiFillLinkedin className='aboutIcons' />LinkedIn</button>
                    <button className='aboutButtons'><BsFileEarmarkPerson className='aboutIcons' />Résumé</button>
                </div>
            </section>
        </main >
    );
}

export default About;