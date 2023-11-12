import quiztionAIPic from '../../assets/quiz-tion.png';
import studentEnrollmentPic from '../../assets/student-enrollment.png';
import littleLemonPic from '../../assets/little-lemon.png';
import mangataAndGalloPic from '../../assets/mangata-and-gallo.png';
import '../Projects/projects.css';

function Projects() {
    return (
        <section id='projects' className='projects'>
            <h2 className='header2'>Projects</h2>
            <div className='projectShowcase'>
                <a href='https://github.com/ivanovich18/Quiz-tion-AI' target='_blank'>
                    <section className='projectPic'>
                        <h3>Quiz-tion AI</h3>
                        <img src={quiztionAIPic} alt='Quiztion AI Website' />
                    </section>
                </a>
                <a href='https://github.com/ivanovich18/Student-Enrollment-Application' target='_blank'>
                    <section className='projectPic'>
                        <h3>Student Enrollment Application</h3>
                        <img src={studentEnrollmentPic} alt='Student Enrollment Application' />
                    </section>
                </a>
                <a href='https://github.com/ivanovich18/little-lemon-ivan-suralta' target='_blank'>
                    <section className='projectPic'>
                        <h3>Little Lemon Restaurant Reservation</h3>
                        <img src={littleLemonPic} alt='Little Lemon Restaurant Reservation Website' />
                    </section>
                </a>
                <a href='https://github.com/ivanovich18/Mangata-and-Gallo-Landing-Page' target='_blank'>
                    <section className='projectPic'>
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