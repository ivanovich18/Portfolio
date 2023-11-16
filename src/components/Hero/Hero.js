import heroImg from '../../assets/others/hero-img-ivan.png';
// import ivanDev from '../../assets/ivan-dev.png'
import ivanDev2 from '../../assets/others/test.svg';
import '../Hero/hero.css'
// import { BsPlayCircle } from "react-icons/bs";

function Hero() {
    return (
        <header id='hero' className='hero'>
            <div className='imgContainer'>
                <img className='bigHeroImg' src={heroImg} alt='Ivan Suralta with Google background' />
                {/* <button className='helloBtn'><BsPlayCircle className='playBtn' />Hello, World!</button> */}
            </div>

            <div className='serviceAndLocation'>
                <p className='service'>Web, Mobile and Design</p>
                <p className='location'>Cebu City, Philippines</p>
            </div>

            <img className='heroBigText' src={ivanDev2} />

            <div className='heroBottom'>
                <p className='bottomText'>Discover all the things about Ivan. </p>
                <p className='bottomText'>Join me in my journey in development and design.</p>
            </div>

            <div className='dividerBottomDashed heroDivider'></div>
        </header>
    );
}

export default Hero;