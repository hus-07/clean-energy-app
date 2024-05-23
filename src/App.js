// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import SolarPower from './components/Solar/SolarPower';
import Initiatives from './components/Initiatives/ExtInitiatives';
import Hydropower from './components/Hydro/Hydropower';
import WindPower from './components/Wind/WindPower';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar" element={<SolarPower />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/hydropower" element={<Hydropower />} />
          <Route path="/windpower" element={<WindPower />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
