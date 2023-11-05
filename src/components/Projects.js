import quiztionAIPic from '../assets/quiz-tion.png';
import studentEnrollmentPic from '../assets/student-enrollment.png';
import littleLemonPic from '../assets/little-lemon.png';
import mangataAndGalloPic from '../assets/mangata-and-gallo.png';

function Projects() {
    return (
        <>
            <section>
                <h2>Projects</h2>
                <section>
                    <h3>Quiz-tion AI</h3>
                    <img src={quiztionAIPic} alt='Quiztion AI Website' />
                </section>
                <section>
                    <h3>Student Enrollment Application</h3>
                    <img src={studentEnrollmentPic} alt='Student Enrollment Application' />
                </section>
                <section>
                    <h3>Little Lemon Restaurant Reservation</h3>
                    <img src={littleLemonPic} alt='Little Lemon Restaurant Reservation Website' />
                </section>
                <section>
                    <h3>Mangata & Gallo E-commerce Page</h3>
                    <img src={mangataAndGalloPic} alt='Mangata and Gallo E-commerce Webpage' />
                </section>
            </section>
        </>
    );
}

export default Projects;