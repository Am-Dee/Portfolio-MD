// components/Home.jsx
import React from 'react';

const Home = () => (
  <section id="home" className="home">
    <div className='containerHome' >
      <img src="MD.jpg" alt="" className='profilepic' />
    </div>
    <div className='containerHome' >
      <h2>Hi, I’m Mukul Dogra</h2>
      <h3>Aspiring Full Stack Web Developer </h3>
      <p>Welcome to my page! <br /><br />
        I’m a full stack web developer with a passion for building
        complete, functional, and user-friendly web applications — from beautiful front-end
        designs to efficient and secure back-end systems. I'm currently learning and practicing technologies like HTML, CSS, JavaScript,
        React JS, Redux, Node JS, Express JS and MongoDB.</p>
    </div>
  </section>
);

export default Home;