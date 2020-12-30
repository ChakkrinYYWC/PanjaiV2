import Axios from 'axios';
import React from 'react';
import { useState } from 'react';

function Login() {
/*------------------------------------------------------------*/
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const checkUser = () => {
        Axios.post('http://localhost:3001/authenticate/login',{
            username: username,
            password: password,
        })
    }
/*-----------------------------------------------------------*/
    return (
        <div className="container">
        <h1>Login</h1>
        <div>
            <form>
            <div>
                <label>Username:</label>
                <input
                type="text"
                name="Username"
                placeholder="Enter name"
                onChange={(event) =>{
                    setUsername(event.target.value)
                }}
                >
                </input>
            </div>
            <div>
                <label>Password:</label>
                <input
                type="text"
                name="Password"
                placeholder="Enter Password"
                onChange={(event) =>{
                    setPassword(event.target.value)
                }}
                >
                </input>
            </div>
            <div>
                <button onClick={checkUser}>Register</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Login;