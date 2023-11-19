import heroImg from '../../assets/others/hero-img-ivan.png';
// import ivanDev from '../../assets/ivan-dev.png'
import ivanDev2 from '../../assets/others/test.svg';
import '../Hero/hero.css'
// import { BsPlayCircle } from "react-icons/bs";

import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";

function Hero() {

    useEffect(()=>{
        AOS.init({
            once: true,
            duration: 2000
        })
    },[])

    return (
        <header id='hero' className='hero'>
            <div className='imgContainer' data-aos="fade-left" data-aos-duration="600" data-aos-delay="700">
                <img className='bigHeroImg' src={heroImg} alt='Ivan Suralta with Google background' />
                {/* <button className='helloBtn'><BsPlayCircle className='playBtn' />Hello, World!</button> */}
            </div>

            <div className='serviceAndLocation' data-aos="fade-down" data-aos-duration="600" data-aos-delay="700">
                <p className='service'>Web, Mobile and Design</p>
                <p className='location'>Cebu City, Philippines</p>
            </div>

            <img className='heroBigText' data-aos="flip-left" data-aos-duration="600" data-aos-delay="900" src={ivanDev2} />

            <div className='heroBottom' data-aos="fade-up" data-aos-duration="600" data-aos-delay="1000">
                <p className='bottomText'>Discover all the things about Ivan. </p>
                <p className='bottomText'>Join me in my journey in development and design.</p>
            </div>

            <div className='dividerBottomDashed heroDivider'></div>
        </header>
    );
}

export default Hero;