// components/Contact.js
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  return (
    <section id="contact" className="contact">
      {/* <h2>Contact Me</h2> */}
      <h3>I'm actively looking to grow, learn from real-world experiences, and collaborate on meaningful projects.</h3>
      {/* <p>Email: yourname@example.com, 
      GitHub: github.com/yourusername, 
      LinkedIn: linkedin.com/in/yourusername</p> */}

<h3>Write me:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>

<div className="social-icons">
<h4>Social Media links :</h4>
  <a href="https://gmail.com/" className="icons" target="_blank"><FcGoogle /></a>
  <a href="https://www.facebook.com/" className="icons" target="_blank"><FaFacebookF /></a>
  <a href="https://github.com/" className="icons" target="_blank"><FaGithub /></a>
  <a href="https://in.linkedin.com/in/mukul-dogra-646620319?trk=profile-badge" className="icons" target="_blank"><FaLinkedinIn /></a>

{/* <div
    className="badge-base LI-profile-badge"
    data-locale="en_US"
    data-size="medium"
    data-theme="dark"
    data-type="VERTICAL"
    data-vanity="mukul-dogra-646620319"
    data-version="v1"
  >
    <a
      className="badge-base__link LI-simple-link"
      href="https://in.linkedin.com/in/mukul-dogra-646620319?trk=profile-badge"
    >
      Mukul Dogra
    </a>
  </div> */}

</div>
    </section>
  );
};

export default Contact;