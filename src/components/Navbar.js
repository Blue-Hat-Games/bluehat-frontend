import React from 'react';
import '../css/Navbar.css';

const Navbar =() => {
 return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="nav-link active" aria-current="page" href="#" id='title'>Bluehat Games</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link-click" href="#">Explore</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Market</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Feature</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Download</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <button id="login-btn">Login</button>
      </div>

  </nav>
 );
}

export default Navbar;