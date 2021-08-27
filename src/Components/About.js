import React from 'react';
import about from './../images/about.jpg'

function About(props) {
  return (
    <section id='about' className="container grid section">
      <div className="header-container pos-rel">
        <h2 className="marker marker-center">About Me</h2>
      </div>
      <div className='information-container'>
        <div className="image-container">
          <img src={about} alt='my image' />
        </div>
        <div className="about-me-data">
          <span className="section-subheader">My Introduction</span>
          <div className="content">A problem solver who would like to join a team of like-minded developers. Abhishek has much experience in creating logical and innovative solutions to complex problems. He is thorough and precise in everything he does, and have a keen interest in technology, mobile applications and user experience.</div>
          <div className="aboutme-info">
            <div>
              <span className="title">04+</span>
              <span className="name">years <br/> experience </span>
            </div>
            <div>
              <span className="title">01+</span>
              <span className="name">Companies <br/> worked </span>
            </div>
          </div>
          <div className="cv__button">
            <a href="#" className="button"> Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
