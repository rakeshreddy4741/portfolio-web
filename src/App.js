import React from 'react';
import './App.css';
import About from './components/About'; 
import Info from './components/Info'; 

function App() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    
  };
  return (
    <div className="App" style={gridContainerStyle}>
      <Info />
      <About />
    </div>
  );
}

export default App;
