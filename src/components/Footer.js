import footerLogo from '../assets/favicon_io/android-chrome-512x512.png'

function Footer() {
    return (
        <>
            <footer>
                <section>
                    <img src={footerLogo} alt='Website logo' />
                    <p>/</p>
                    <p>Ivan Suralta</p>

                    <a href='mailto:ivangsuralta@gmail.com'>E</a>
                    <a href='https://www.linkedin.com/in/ivan-suralta/'>L</a>
                    <a href='https://github.com/ivanovich18'>G</a>
                    <a href='https://www.instagram.com/itsivansuralta/'>I</a>
                    <a href='https://www.facebook.com/ivanovich0808'>F</a>
                    <a href='https://twitter.com/ivanovich0808'>X</a>
                </section>
                <section>
                    {/* Comment */}
                </section>
            </footer>
        </>
    );
}

export default Footer;