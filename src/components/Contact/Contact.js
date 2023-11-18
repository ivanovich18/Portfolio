import React, { useRef } from 'react';
import '../Contact/contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
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
            <h2 className='header2 smallerHeader'>Contact Me</h2>
            <p>I am always free for collaboration.</p>
            <p>Whether you need help for projects or other things, send me a message and let's chat.</p>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input required type='text' className='name' placeholder='Your Name' name='from_name' />
                <input required type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea required className='message' name='message' rows='5' placeholder='Your Message' ></textarea>
                <div>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                </div>
            </form>

        </section>
    );
}

export default Contact;