import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Gym from './pages/Gym';
import Corsi from './pages/Corsi';
import Prenotazioni from './pages/Prenotazioni';
import TopBar from './components/TopBar';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <TopBar />
      <div className="App flex">
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Gym" element={<Gym />} />
            <Route path="/Corsi" element={<Corsi />} />
            <Route path="/Prenotazioni" element={<Prenotazioni />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
