import React, {useEffect, useState} from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [selected, setSelected] = useState("nav-link-click");
    const [loginStatus, setLoginStatus] = useState("/login");

    useEffect(() => {
        const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
        if (user) {
            setLoginStatus("/profile");
        }

    }, [])


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
                        <Link to="/download">
                            <a class="nav-link">Download</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about">
                            <a class="nav-link">About</a>
                        </Link>
                    </li>
                </ul>
                <Link to={loginStatus}>
                    <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 25C0 11.1929 11.1929 0 25 0V0C38.8071 0 50 11.1929 50 25V25C50 38.8071 38.8071 50 25 50V50C11.1929 50 0 38.8071 0 25V25Z"
                            fill="#F5F5F5"/>
                        <path
                            d="M35 36.25V33.75C35 32.4239 34.4732 31.1521 33.5355 30.2145C32.5979 29.2768 31.3261 28.75 30 28.75H20C18.6739 28.75 17.4021 29.2768 16.4645 30.2145C15.5268 31.1521 15 32.4239 15 33.75V36.25"
                            stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M25 23.75C27.7614 23.75 30 21.5114 30 18.75C30 15.9886 27.7614 13.75 25 13.75C22.2386 13.75 20 15.9886 20 18.75C20 21.5114 22.2386 23.75 25 23.75Z"
                            stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;