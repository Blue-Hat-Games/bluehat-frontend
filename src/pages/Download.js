import React from 'react';
import '../css/Download.css';
import Navbar from '../components/Navbar';

const Download = () => {
    return (
        <div >
            <Navbar />
            <header class="showcase">
                <div class="showcase-content">
                    <h1>Bluehat Games</h1>
                    <p>Find your own bluehat</p>
                    <a href="#" class="btn btn-xl"> Download</a>
                </div>
            </header>
        </div>

    )
}


export default Download;