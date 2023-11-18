import footerLogo from '../../assets/favicon_io/android-chrome-192x192.png';
import '../Footer/footer.css'
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from 'react-scroll';

function Footer() {
    return (
        <footer>
            <div className='dividerBottomSolid'></div>
            <section className='topFooter'>
                <div className='topLeft'>
                    <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                        <img className='footerLogo' src={footerLogo} alt='Website logo' />
                    </Link>
                    <span className='footerDivider'>/</span>
                    <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
                        <p className='footerTitle'>Ivan Suralta</p>
                    </Link>
                </div>
                <div className='topRight'>
                    <a href='mailto:ivangsuralta@gmail.com' target='_blank'><MdEmail className='socialIcons mail' /></a>
                    <a href='https://www.linkedin.com/in/ivan-suralta/' target='_blank'><BsLinkedin className='socialIcons' /></a>
                    <a href='https://github.com/ivanovich18' target='_blank'><BsGithub className='socialIcons github' /></a>
                    <a href='https://www.instagram.com/itsivansuralta/' target='_blank'><BsInstagram className='socialIcons instagram' /></a>
                    <a href='https://www.facebook.com/ivanovich0808' target='_blank'><BsFacebook className='socialIcons facebook' /></a>
                    <a href='https://twitter.com/ivanovich0808' target='_blank'><FaXTwitter className='socialIcons twitter' /></a>
                </div>
            </section>
            <div className='dividerBottomSolid'></div>
            <section className='botFooter'>
                <div className='botLeft'>
                    <AiOutlineCopyrightCircle className='copyrightLogo' />
                    <p>2023 Ivan Suralta. All rights reserved.</p>
                </div>
                <div className='botRight'>
                    <a href='https://github.com/ivanovich18/softdev1-portfolio-website/blob/main/LICENSE' target='_blank'><p>License</p></a>
                    <a href='https://github.com/ivanovich18/softdev1-portfolio-website' target='_blank'>
                        <p>Source Code</p>
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;