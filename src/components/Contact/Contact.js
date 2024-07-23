import React, { useRef, useEffect, useState } from 'react';
import '../Contact/contact.css';
import emailjs from '@emailjs/browser';
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  // Initializes AOS library on component mount with a one-time animation duration of 2000 milliseconds.
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  // Creates a reference for the HTML form element.
  const form = useRef();

  // Defines a state variable open and a function setOpen to manage the visibility of the Snackbar.
  const [open, setOpen] = useState(false);

  // Defines a function handleToClose to handle Snackbar closing events.
  const handleToClose = (event, reason) => {
      if ("clickaway" == reason) return;
      setOpen(false);
  };

  // Defines a function handleClickEvent to handle opening the Snackbar.
  const handleClickEvent = () => {
      setOpen(true);
  };

  // Defines state variables (isFormValid, isSendingEmail, isSubmitted) to manage form validation and submission status.
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Defines a function sendEmail to handle form submission, send an email using the emailjs library, and manage form submission state.
  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSendingEmail(true);

    try {
      const result = await emailjs.sendForm('service_s81q0il', 'template_hgp5xsr', form.current, 'GXYsuqagPT2dk0x13');
      console.log(result.text);
      e.target.reset();
      setIsSendingEmail(false);
      setIsSubmitted(true);
      handleClickEvent();
    } catch (error) {
      console.log(error.text);
      alert('Please fill all fields');
      setIsSendingEmail(false);
      setIsSubmitted(false);
    }
  };

  // Defines a function handleInputChange to handle input changes and update form validity.
  const handleInputChange = () => {
    const nameInput = form.current['from_name'];
    const emailInput = form.current['from_email'];
    const messageInput = form.current['message'];

    const isValid = nameInput.value.trim() !== '' && emailInput.value.trim() !== '' && messageInput.value.trim() !== '';
    setIsFormValid(isValid);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="header2 smallerHeader" data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
        Contact Me
      </h2>
      <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">I am free for collaboration.</p>
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
        <Snackbar
                anchorOrigin={{
                    horizontal: "left",
                    vertical: "bottom",
                }}
                open={open}
                autoHideDuration={5000}
                message="Message successfully sent!"
                onClose={handleToClose}
                action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={handleToClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
      </form>
    </section>
  );
}

export default Contact;