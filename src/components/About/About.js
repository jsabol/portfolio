import React from 'react';

import './About.css'; 
import resume from "./Juliet Sabol Resume.pdf";
import portrait from "../../img/portrait.jpg";
import { smoothScroll } from "../App/App";

const About = () => (
  <section className="bg-primary" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-3 portrait">
          <img src={portrait} alt="Juliet Sabol Portrait" />
        </div>
        <div className="col-md-9 mx-auto">
          <h2 className="text-faded">About Me</h2>
          <p className="text-faded mb-4">
            I’m a versatile engineer with over a decade of experience turning
            complex, messy problems into clear, elegant solutions. I have
            identified critical gaps, defined new roles, and built teams to
            solve them. Primarily focused on front-end development, I bring the
            flexibility to work across the stack and deliver products that
            balance technical excellence with great user experience.
          </p>
          <a href={resume} target="_blank" className="btn btn-light btn-xl">
            <i className="fas fa-file-pdf" /> Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;