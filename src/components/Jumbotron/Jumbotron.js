import React, { Component } from 'react';
import Typing from 'react-typing-animation'

import './Jumbotron.css';
import { smoothScroll } from '../App/App';

const Display = () => (
  <header className="masthead text-center d-flex">
    <div className="container my-auto">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <p className="">Hi, my name is</p>
          <h1>
            {"{"}
            <span className="mx-5">
              J
              <Typing
                className="inline"
                startDelay={800}
                speed={80}
                hideCursor={true}
              >
                uliet{" "}
              </Typing>
              S
              <Typing
                className="inline"
                startDelay={1500}
                speed={80}
                hideCursor={true}
              >
                abol
              </Typing>
            </span>
            {"}"}
          </h1>
          <hr />
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="mb-5">Software Engineer</div>
          <a
            onClick={smoothScroll}
            className="btn btn-primary btn-xl js-scroll-trigger"
            href="#about"
          >
            About Me
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default class Jumbotron extends Component {

	render(){
		return <Display />
	}
}