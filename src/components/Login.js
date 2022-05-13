import { useState, useEffect } from "react";
import React, { Component } from 'react';
import axios from "axios";


function Login(){
    const [inputEmail, setInputEmail] = useState("");

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    }

    const onClickLogin = () => {
        axios.post("/auth", {
            email: inputEmail
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_email'>ID : </label>
                <input type='text' name='input_email' value={inputEmail} onChange={handleEmailChange} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}


export default Login;