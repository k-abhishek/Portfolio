import React, {Component} from 'react';
import Navbar from "./Components/Navbar";
import ContactMe from "./Components/ContactMe";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";

class Routes extends Component {
  render() {
    return (
      <>
          <Navbar />
          <main className='main'>
              <Home />
              <About />
              <Experience />
              <ContactMe />
          </main>
      </>
    );
  }
}

export default Routes;
