import courseraPic from '../assets/coursera.png';
import harvardPic from '../assets/harvard.png';
import uniOfPhilippinesOU from '../assets/upou.jpg';

function Certifications() {
    return (
        <>
            <section>
                <h2>Certifications</h2>
                <section>
                    <h3>Meta Front-End Developer Professional Certificate</h3>
                    <p>Coursera</p>
                    <p>Issued September 2023</p>
                    <p>Skills: Web Development · UI/UX Design · Web Applications </p>
                    <button>Show Credential</button>
                    <img src={courseraPic} alt='Coursera Logo' />
                </section>
                <section>
                    <h3>CS50’s Introduction to Computer Science (2023)</h3>
                    <p>CS50, Harvard University</p>
                    <p>Issued April 2023</p>
                    <p>Skills: Computer Science · Software Development · Programming </p>
                    <button>Show Credential</button>
                    <img src={harvardPic} alt='Harvard University Logo' />
                </section>
                <section>
                    <h3>Principles of Graphic Design</h3>
                    <p>University of the Philippines Open University</p>
                    <p>Issued February 2023</p>
                    <p>Skills: Graphics Design · Design Thinking · Product Design </p>
                    <button>Show Credential</button>
                    <img src={uniOfPhilippinesOU} alt='University of the Philippines Open University Logo' />
                </section>
                <section>
                    <h3>AWS Community Day - Cebu 2023 Volunteer</h3>
                    <p>Amazon Web Services</p>
                    <h3>WordPress with Divi Builder Workshop</h3>
                    <p>Proweaver</p>
                    <h3>Crash Course on Python</h3>
                    <p>Google, Coursera</p>
                    <h3>Computer Hardware Basics</h3>
                    <p>Cisco</p>
                    <h3>Version Control</h3>
                    <p>Meta</p>
                    <h3>Introduction to Front-End Development</h3>
                    <p>Meta</p>
                    <h3>Programming with JavaScript</h3>
                    <p>Meta</p>
                    <h3>Coding Interview Preparation</h3>
                    <p>Meta</p>
                    <h3>Front-End Developer Capstone</h3>
                    <p>Meta</p>
                    <h3>Advanced React</h3>
                    <p>Meta</p>
                    <h3>React Basics</h3>
                    <p>Meta</p>
                    <h3>Principles of UX/UI Design</h3>
                    <p>Meta</p>
                    <h3>HTML and CSS in depth</h3>
                    <p>Meta</p>
                    <h3>Responsive Web Design</h3>
                    <p>freeCodeCamp</p>
                </section>
            </section>
        </>
    );
}

export default Certifications;