import React, { useRef, useEffect, useState } from 'react';
import '../Contact/contact.css';
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  const form = useRef();

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  function showSnackbar() {
    var x = document.getElementsByClassName('snackbar')[0];

    x.classList.add('show');

    setTimeout(function(){ x.classList.remove('show'); }, 3000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSendingEmail(true);

    emailjs
      .sendForm('service_s81q0il', 'template_hgp5xsr', form.current, 'GXYsuqagPT2dk0x13')
      .then(
        (result) => {
          console.log(result.text);
          showSnackbar();
          e.target.reset();
          setIsSendingEmail(false);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          alert('Please fill all fields');
          setIsSendingEmail(false);
        }
      )
      .catch((error) => {
        console.log(error);
        setIsSendingEmail(false);
      });
  };

  const handleInputChange = () => {
    const nameInput = form.current['from_name'];
    const emailInput = form.current['from_email'];
    const messageInput = form.current['message'];

    const isValid = nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && messageInput.value.trim() !== '';
    setIsFormValid(isValid);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="header2 smallerHeader" data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
        Contact Me
      </h2>
      <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">I am always free for collaboration.</p>
      <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
        Whether you need help for projects or other things, send me a message and let's chat.
      </p>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          required
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
          data-aos="flip-left"
          data-aos-duration="600"
          data-aos-delay="700"
          onChange={handleInputChange}
        />
        <input
          required
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
          data-aos="flip-left"
          data-aos-duration="600"
          data-aos-delay="800"
          onChange={handleInputChange}
        />
        <textarea
          required
          className="message"
          data-aos="flip-left"
          data-aos-duration="600"
          data-aos-delay="900"
          name="message"
          rows="5"
          placeholder="Your Message"
          onChange={handleInputChange}
        ></textarea>
        <div>
          <button type="submit" value="Send" className="submitBtn" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" disabled={!isFormValid || isSendingEmail || isSubmitted}>
            Submit
          </button>
        </div>
        <div className='snackbar'>Message successfully sent!</div>
      </form>
    </section>
  );
}

export default Contact;