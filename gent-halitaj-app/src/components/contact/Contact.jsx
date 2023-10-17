import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ptdcb2o', 'template_e1z65kl', form.current, 'XMAsYo1urHQvUympL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <article id='contact'>
      <h5>Get in touch with me</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gent.halitaj2005@gmail.com</h5>
            <a href="mailto:gent.halitaj2005@gmail.com" target='_blank'>Send a message</a>
          </div>
          <div className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>genthalitaj</h5>
            <a href="https://m.me/gent.halitaj.5" target='_blank'>Send a message</a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+383/ 44 446 002</h5>
            <a href="https://api.whatsapp.com/send?phone=+38344446002" target='_blank'>Send a message</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" placeholder='Your message' rows="7" required>Your message</textarea>
          <button type="submit" className='btn-end'>SEND MESSAGE</button>
        </form>
      </div>
  </article>
  )
}

export default Contact

