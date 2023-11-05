import heroImg from '../assets/hero-img-ivan.png';
import ivanDev from '../assets/ivan-dev.png';

function Hero() {
    return (
        <>
            <header>
                <img src={heroImg} alt="Ivan Suralta with Google background" />
                <button>Hello, World!</button>
                <p>Web, Mobile and Design</p>
                <p>Cebu City, Philippines</p>
                {/* <img src={ivanDev} /> */}
                <h1>IVAN.DEV</h1>
                <p>Discover all the things about Ivan. </p>
                <p>Join me in my journey in development and design.</p>
            </header>
        </>
    );
}

export default Hero;