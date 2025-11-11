import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import $ from 'jquery';

import './App.css';
import Nav from '../Nav/Nav';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from "../About/About";
import Project from '../Work/Project';
import Contact from '../Contact/Contact';

const smoothScroll = (e) => {
  e.preventDefault()
  const id = e.currentTarget.getAttribute('href').slice(1)
  
  if(!document.getElementById(id)) return;

  $('html, body').animate({
    scrollTop: (document.getElementById(id).offsetTop - 56)
  }, 1000, "easeInOutExpo");

  // collapse the menu
  $('.navbar-collapse').collapse('hide');
}

const Home = (props) => (
  <div>
    <Nav />
    <Jumbotron />
    <About />
    <Contact />
  </div>
);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div id="page-top" className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project/:project" component={Project} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
export { smoothScroll };