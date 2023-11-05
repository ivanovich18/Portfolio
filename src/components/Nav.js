import logo from '../assets/favicon_io/android-chrome-512x512.png'

function Nav() {
    return (
        <>
            <nav>
                <img src={logo} alt='Website logo' />
                <p>/ Ivan Suralta</p>
                <ul>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Skills</a></li>
                    <li><a href=''>Experience</a></li>
                    <li><a href=''>Projects</a></li>
                    <li><a href=''>Certifications</a></li>
                    <button>Contact Me</button>
                </ul>
            </nav>
        </>
    );
}

export default Nav;