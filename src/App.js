import React from 'react';
import Particles from "react-particles-js";
import './index.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function App() {
  return (
    <React.Fragment>
      Particles Example
      <Particles className="particles" params={particlesOptions} />
    </React.Fragment>
  );
}

export default App;
