import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import loginImg from "../img/login.svg";
import "./login.css";

function RegisterFrom() {
/*------------------------------------------------------------*/
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [CPassword, setCPassword] = useState();
    const [Email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [file, setFile] = useState();

    const PanjaiToken = localStorage.getItem('PanjaiToken');
    // Axios.post('/authenticate/register', PanjaiToken,{
    // }).then(res => {
    //     console.log(res)
    //     if(res.data === "noLogin"){
    //         window.location.href = "http://localhost:3000/Login"
    //     } else {
    //         console.log(PanjaiToken)
    //     }
    // }).catch(error => console.log(error))

    const uploadFile = (event) => {
        event.preventDefault()
        // console.log(file)
        // console.log(username)
        // console.log(password)
        // console.log(Email)
        if (password !== CPassword){
            window.alert('Confirm password incorrect!')
            //window.location.href = "http://localhost:3000/Login"
        }
        else{
            const formData = new FormData();
            formData.append('IDcard', file); // appending file
            formData.append('username', username)
            formData.append('password', password)
            formData.append('email', Email)
            formData.append('address', address)
            formData.append('phone', phone)
            formData.append('PanjaiToken', PanjaiToken)
            //console.log(JSON.stringify(formData))
            Axios.post('/authenticate/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res)
                if(res.data.name) {
                    window.alert("Error: "+res.data.message)
                    console.log("error")
                } else {
                    window.location.href = "http://localhost:3000/Login"
                }
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className="grid-container">
            <div className="item1">
                <div className="image">
                    <img src={loginImg} />
                </div>
            </div>

            <div className="item2">
                <h3>สมัครสมาชิก</h3><br/>
                <form>
                    <div className="form-group">
                        <label>ชื่อผู้ใช้:</label><br />
                        <input
                            type="text"
                            name="Username"
                            placeholder="ชื่อผู้ใช้"
                            onChange={(event) =>{
                                setUsername(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>รหัสผ่าน: </label><br/>
                        <input
                            type="password"
                            name="Password"
                            placeholder="รหัสผ่าน"
                            onChange={(event) =>{
                                setPassword(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>ยืนยันรหัสผ่าน: </label><br/>
                        <input
                            type="password"
                            name="CPassword"
                            placeholder="รหัสผ่าน"
                            onChange={(event) =>{
                                setCPassword(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>อีเมล: </label><br/>
                        <input
                            type="email"
                            name="email"
                            placeholder="อีเมล"
                            onChange={(event) =>{
                                setEmail(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>ที่อยู่: </label><br/>
                        <input
                            type="text"
                            name="address"
                            placeholder="ที่อยู่"
                            onChange={(event) =>{
                                setAddress(event.target.value)
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>เบอร์โทรศัพท์: </label><br/>
                        <input
                            type="phone number"
                            name="phone"
                            placeholder="เบอร์โทรศัพท์"
                            onChange={(event) =>{
                                setPhone(event.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <label>ภาพบัตรประจำตัวประชาชน: </label><br/>
                        <input
                            type='file'
                            id='customFile'
                            onChange={(event) =>{
                                setFile(event.target.files[0])
                            }}
                        />
                    </div> 

                    <br/>
                    <div>
                        <button className="btn btn-lg " onClick={uploadFile}>สมัครสมาชิก</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterFrom;