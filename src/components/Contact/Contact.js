import React from 'react';



const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading mb-5">Contact Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ml-auto text-center">
          <a href="https://www.linkedin.com/in/jasabol/">
            <i className="fab fa-linkedin fa-3x mb-3 sr-contact"></i>
            <p>Linkedin</p>
          </a>
        </div>
        <div className="col-md-4 mr-auto text-center">
          <a href="mailto:julietsabol@gmail.com">
            <i className="far fa-envelope fa-3x mb-3 sr-contact"></i>
            <p>julietsabol@gmail.com</p>
          </a>
        </div>
        <div className="col-md-4 ml-auto text-center">
          <a href="https://github.com/jsabol">
            <i className="fab fa-github fa-3x mb-3 sr-contact"></i>
            <p>jsabol</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;