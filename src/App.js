import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import React from "react"

import Explore from './pages/Explore';
import Market from './pages/Market';
import Feature from './pages/Feature';
import Download from './pages/Download';
import About from './pages/About'

import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Explore/>} />
        <Route path="/market" element={<Market/>} />
        <Route path='/feature' element={<Feature/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </Router>


  );
}

export default App;
