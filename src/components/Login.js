import { useState, useEffect } from "react";
import React, { Component } from 'react';
import axios from "axios";
import '../css/Login.css';


function Login() {
    const [inputEmail, setInputEmail] = useState("");
    let [loginStatus, setLoginStatus] = useState("Login");

    const handleLoginStatus = async () => {
        setLoginStatus("Send");
    }

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    }

    const onClickLogin = () => {
        if (loginStatus === "Login") {
            axios.post("/auth", {
                email: inputEmail
            }).then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("이메일 전송 성공");
                    handleLoginStatus();
                }
            }).catch(err => {
                console.log(err);
            })
        } else if (loginStatus === "Send") {
            axios.post("/users", {
                email: inputEmail,
                "wallet_address": "ahahahaahahahahaah",
                "username": "hello"
            }).then(res => {
                console.log(res);
                if (res.status === 200 || res.status === 201) {
                    console.log("로그인 성공");
                    const data = JSON.stringify({accessToken : res.data.access_token});
                    console.log(data);
                    localStorage.setItem("user", JSON.stringify(data));
                    console.log(localStorage.getItem("user"));
                }
            }).catch(err => {
                console.log(err);
            })
        }

    }


    return (
        <div class="page-container">
            <div class="login-form-container shadow">
                <div class="login-form-right-side">
                    <div class="top-logo-wrap">

                    </div>
                    <h1>Bluehat Games Login</h1>
                    <p>The Most Interesting NFT Bluehat Games. Get Animal NFT doing our game</p>
                </div>
                <div class="login-form-left-side">
                    <div class="login-top-wrap">
                        <span>Don't have an account?</span>
                        <button class="create-account-btn shadow-light">Create Profile</button>
                    </div>
                    <div class="login-input-container">
                        <div class="login-input-wrap input-id">
                            <i class="far fa-envelope"></i>
                            <input placeholder="Email" type="text" name='input_email' value={inputEmail} onChange={handleEmailChange} />
                        </div>
                    </div>
                    <div class="login-btn-wrap">
                        <button class="login-btn" onClick={onClickLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;