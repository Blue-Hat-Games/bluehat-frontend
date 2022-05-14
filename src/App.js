import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import React, { useState } from "react"
import Explore from './pages/Explore';
import Market from './pages/Market';
import Feature from './pages/Feature';
import Download from './pages/Download';
import About from './pages/About'
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

function App() {
  const [user, setUser] = useState();
  let history = createBrowserHistory();
  history.listen((location, action) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(localStorage.getItem('user'))
    if (user) {
      const decoded = parseJwt(user.acessToken);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('user');
        setUser(null);
      }
    }
  });
  console.log("userdata", user);
  const authHeader = () => {
    console.log("local",localStorage.getItem("user"))
    const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
    console.log("user",user)
    console.log("user acesstoken",user.accessToken)
    if (user && user.accessToken) {
        return { "Authorization": user.accessToken };
    } else {
        return {};
    }
};
  console.log(authHeader());

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Explore />} />
        <Route path="/market" element={<Market />} />
        <Route path='/feature' element={<Feature />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Router>


  );
}

export default App;
