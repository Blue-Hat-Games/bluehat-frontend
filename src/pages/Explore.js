import React from 'react';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import '../css/Explore.css';
const Explore = () => {
    return (
        <div>
            <Navbar />
            <div className="container repairing">
            <div class="img">
            <img src="images/developing.svg" class="reparing-img"></img>
            </div>
            <h1 className='title'>Bluehat Games Website is developing</h1>
            <div className="content">Please wait release 2022.06.24</div>
            </div>
        </div>
    )
}


export default Explore;