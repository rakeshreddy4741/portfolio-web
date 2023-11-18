import React from 'react';
import './App.css';
import About from './components/About';
import Info from './components/Info';
import Nav from './components/Nav';
import Socials from './components/Socials';
import Experience from './components/Experience';
import Projects from './components/Projects';
import HoverEffect from './components/HoverEffect';

function App() {

  return (
    <div className="grid grid-cols-2 gap-2 max-w-screen-lg mx-auto" >
      <div className='text-white my-10 ml-10 p-5 sticky top-0' >
        <Info />
        <Nav />
        <Socials />
      </div>
      <div className='text-color my-10 mr-16 p-5'>
        <About />
        <Experience />
        <Projects />
      </div>

    </div>
  );
}

export default App;
