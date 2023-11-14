import React from 'react';
import './App.css';
import About from './components/About'; 
import Info from './components/Info'; 
import Nav from './components/Nav';
import HoverEffect from './components/HoverEffect';

function App() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin : '0 auto',
    maxWidth : '1200px',
  };
  return (
    <div className="App" style={gridContainerStyle}>
      <Info />
      <About />
      <Nav />
    </div>
  );
}

export default App;
