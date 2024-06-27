import React, { Component } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';




class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div>
        <Header />
        <AboutMe />
      
        <Skills />
        <Projects/>
        <Experience />
        <Footer/>
      
      </div>
    );
  }
}

export default App;
