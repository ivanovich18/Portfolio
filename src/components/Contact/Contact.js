import React, { useRef, useEffect } from 'react';
import '../Contact/contact.css'
import emailjs from '@emailjs/browser';

import AOS from "aos";
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s81q0il', 'template_hgp5xsr', form.current, 'GXYsuqagPT2dk0x13')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Please fill all fields');
            });
    };

    return (
        <section id='contact' className='contact'>
            <h2 className='header2 smallerHeader' data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">Contact Me</h2>
            <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">I am always free for collaboration.</p>
            <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">Whether you need help for projects or other things, send me a message and let's chat.</p>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input required type='text' className='name' placeholder='Your Name' name='from_name' data-aos="flip-left" data-aos-duration="600" data-aos-delay="700" />
                <input required type='email' className='email' placeholder='Your Email' name='from_email' data-aos="flip-left" data-aos-duration="600" data-aos-delay="800" />
                <textarea required className='message' data-aos="flip-left" data-aos-duration="600" data-aos-delay="900" name='message' rows='5' placeholder='Your Message' ></textarea>
                <div>
                    <button type='submit' value='Send' className='submitBtn' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000">Submit</button>
                </div>
            </form>

        </section>
    );
}

export default Contact;