import React, {useState} from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const[selected, setSelected] = useState("nav-link-click");

    return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a className="nav-link" aria-current="page" href="/" id='title'>Bluehat Games</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/">
                            <a class="nav-link">Explore</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/market">
                            <a class="nav-link">Market</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/download">
                            <a class="nav-link">Download</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/about">
                            <a class="nav-link">About</a>
                            </Link>
                        </li>
                    </ul>
                    <Link to = "/login">
                    <button id="login-btn">Login</button>
                    </Link>
                </div>
            </nav>
    );
}

export default Navbar;