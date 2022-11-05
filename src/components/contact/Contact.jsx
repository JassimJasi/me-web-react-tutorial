import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lk6yvba",
        "template_by0m70r",
        form.current,
        "_ztFAsZ65Yu4X54eq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a href="mailto:ripanroy111@gmail.com" target="_blank">
              Send a Messege
            </a>
          </article>

          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@abc</h5>
            <a href="https://twitter.com/IDxItachi" target="_blank">
              Send a Messege
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-74392@@@@@</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918637382327"
              target="_blank"
            >
              Send a Messege
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Messege"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Messege
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
