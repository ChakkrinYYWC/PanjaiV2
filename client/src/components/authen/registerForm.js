import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import { TextField, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';
import FileUpload from "../components/FileUpload";
import useForm from "../components/useForm";

function Register() {
/*------------------------------------------------------------*/
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [CPassword, setCPassword] = useState();
    const [Email, setEmail] = useState();
    const [file, setFile] = useState();

    const uploadFile = (event) => {
        event.preventDefault()
        if (password !== CPassword){
            window.alert('Confirm password incorrect!')
            return <Redirect to='/' />
        }
        else{
            const formData = new FormData();
            formData.append('IDcard', file); // appending file
            formData.append('username', username)
            formData.append('password', password)
            formData.append('email', Email)
            //console.log(formData)
            Axios.post('/authenticate/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res.data.message);
                window.alert("ERROR: "+res.data.message)
            }).catch(error => console.log(error))
        }
        return <Redirect to="/login"></Redirect>
    }

    return (
        <div className="container">
        <h1>Register</h1>
        <h6>Please register.</h6>
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
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    type="password"
                    name="Password"
                    placeholder="Enter Password"
                    onChange={(event) =>{
                        setPassword(event.target.value)
                    }}
                    />
                </div>
                <div>
                    <label>Confirm password:</label>
                    <input
                    type="password"
                    name="CPassword"
                    placeholder="Enter Password"
                    onChange={(event) =>{
                        setCPassword(event.target.value)
                    }}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(event) =>{
                        setEmail(event.target.value)
                    }}
                    />
                </div>
                <div>
                    <input
                        type='file'
                        id='customFile'
                        onChange={(event) =>{
                            setFile(event.target.files[0])
                        }}
                    />
                </div> 
                <div>
                    <button type="submit" onClick={uploadFile}>Register</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Register;