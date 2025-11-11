import React, { Component } from 'react';
import $ from 'jquery';

import './Nav.css'
import { smoothScroll } from '../App/App';

const Display = ({ setRef, isProject }) => (
  <nav
    ref={setRef}
    className={`navbar navbar-expand-lg navbar-light fixed-top ${
      isProject ? "navbar-shrink" : ""
    }`}
    id="mainNav"
  >
    <div className="container">
      <a
        onClick={isProject ? () => {} : smoothScroll}
        className="navbar-brand"
        href={(isProject ? "/" : "") + "#page-top"}
      >
        {"{ "}J<span className="name">uliet </span>S
        <span className="name">abol</span>
        {" }"}
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              onClick={isProject ? () => {} : smoothScroll}
              className="nav-link"
              href={(isProject ? "/" : "") + "#about"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={isProject ? () => {} : smoothScroll}
              className="nav-link"
              href={(isProject ? "/" : "") + "#contact"}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default class Nav extends Component {

	constructor(){
		super();
		this.ref = React.createRef();
		this.navbarCollapse = this.navbarCollapse.bind(this);
	}

	navbarCollapse = () => {
		const ref = this.ref.current;
		if(!ref) return;

    if (document.documentElement.scrollTop > 100) {
      ref.classList.add("navbar-shrink");
    } else {
      ref.classList.remove("navbar-shrink");
    }
  };

	componentDidMount(){
		if(!this.props.isProject)
			$(window).scroll(this.navbarCollapse);
	}

	render(){
		return <Display setRef={this.ref} isProject={this.props.isProject} />
	}
};