import aboutMePic from '../assets/aboutme-pic.png';
import metaBadge from '../assets/meta-front-end-developer-certificate.png';
import gdscBadge from '../assets/gdsc badge.png'

function About() {
    return (
        <>
            <main>
                <section>
                    <img src={aboutMePic} alt='Ivan portrait photo' />
                    <img src={metaBadge} alt='Meta Front-end Developer Badge' />
                    <img src={gdscBadge} alt='GDSC Lead Badge' />
                    <button>LinkedIn</button>
                    <button>Résumé</button>
                </section>

                <section>
                    <p>👋🏻 Hello! My name is</p>
                    <h2>IVAN SURALTA</h2>
                    <p>A 3rd year Computer Engineering student at Cebu Technological University - Main Campus, highly interested in UI/UX Design and frontend web development, with specialization in ReactJS.</p>

                    <p>I am also the Lead of Google Developer Student Clubs - Cebu Technological University (GDSC CTU) for the term 2023-2024.</p>

                    <p>As an aspiring full-stack web developer, I am constantly expanding my skillset to ensure I can contribute to all aspects of web development.</p>
                </section>
            </main >
        </>
    );
}

export default About;