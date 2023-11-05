import gdscLogo from '../assets/Google_for_Developers_logomark_color.png';
import dashlabsLogo from '../assets/dashlabs-logo.jpg';
import ctuLogo from '../assets/ctu-logo.png';

function Experience() {
    return (
        <>
            <section>
                <h2>Experience</h2>
                <section>
                    <h3>Lead</h3>
                    <p>Aug 2023 - present</p>
                    <p>Google Developer Student Clubs - CTU</p>
                    <p>Leading a student tech community on campus, interested in Google Developer technologies and even non-Google products that are industry trend and must haves in development.</p>
                    <img src={gdscLogo} alt='GDSC Logo' />
                </section>
                <section>
                    <h3>Client Success Intern</h3>
                    <p>Aug 2023 - Sep 2023</p>
                    <p>Dashlabs.ai</p>
                    <p>Led the Sales department's lead generation efforts, managed client inquiries via email and messenger, and initiated daily company-wide standup meetings that maintained strong client relationships, and cross-departmental communication.</p>
                    <img src={dashlabsLogo} alt='Dashlabs.ai Logo' />
                </section>
                <section>
                    <h3>Student</h3>
                    <p>September 2021 - present</p>
                    <p>Cebu Technological University - Main Campus</p>
                    <p>Studies Bachelor of Science in Computer Engineering (BSCpE) in a state technological university in Cebu City, Philippines. This 4-year program encompasses the software and hardware aspects.</p>
                    <img src={ctuLogo} alt='CTU Logo' />
                </section>
            </section>
        </>
    );
}

export default Experience;