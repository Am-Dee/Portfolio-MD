// components/Skills.js
import React from 'react';

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Technologies I’m Learning and Practicing</h2>
    <p>I specialize in modern, responsive web development using React, JavaScript, and backend tools.</p>
<table>
    <tr>
      <th>Front-End:</th>
      <th>Back-End:</th>
      <th>Tools:</th>
    </tr>
    <tr>
    <td>HTML5, CSS</td>
    <td>Node.js</td>
    <td>Git & GitHub</td>
    </tr>
    <tr>
      <td>JavaScript (ES6+)</td>
      <td>Express.js</td>
      <td>VS Code</td>
    </tr>
    <tr>
      <td>React JS, Redux</td>
      <td>MongoDB</td>
      <td>Postman</td>
    </tr>
    <tr>
      <td>Bootstrap </td>
      <td>REST APIs</td>
      <td>Netlify / Vercel / Render</td>
    </tr>
    </table>
  </section>
);

export default Skills;