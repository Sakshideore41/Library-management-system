// src/About.js
import React from 'react';
import './styles.css';


const About = () => {
  return (
    <div className="about-container">
      <h2>Enabling equitable access to high-quality education</h2>
      <section>
        <h3>About Our Library Management System</h3>
        <p>
          We are an edtech company building solutions that empower schools & teachers, make the learning process enjoyable for students and enable parental aspirations. We strive to break the digital divide in the Indian school education system and create a brighter future for all children irrespective of their background.
        </p>
      </section>
   
      <section>
        <h3>What We Do</h3>
        <p>
          Our system is a trusted technology partner offering high-quality, affordable, and scalable solutions to schools across the globe. As a company, we are equally passionate about education and technology. Our solutions can empower teachers, enhance learning experiences for students, keep parents involved, and help schools become future-ready.
        </p>
      </section>
    </div>
  );
};

export default About;
