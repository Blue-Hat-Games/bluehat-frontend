import './App.css';

import Login from './components/Login';
import React, { useState } from "react"
import Explore from './pages/Explore';
import Market from './pages/Market';
import Download from './pages/Download';
import About from './pages/About'
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import PostView from './pages/PostView';

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
    if (user) {
      const decoded = parseJwt(user.acessToken);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('user');
        setUser(null);
      }
    }
  });

  const authHeader = () => {
    const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
    if (user && user.accessToken) {
        return { "Authorization": user.accessToken };
    } else {
        return {};
    }
};

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Explore />} />
        <Route path="/market" element={<Market />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/market/detail" element={<PostView/>} />
      </Routes>

    </Router>


  );
}

export default App;
