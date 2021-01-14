import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import { TextField, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';
import loginImg from "../img/login.svg";
import "./login.css";

const styles = theme => ({
    container: {
        backgroundColor: 'red'
    }
})

function LoginFrom() {
/*------------------------------------------------------------*/
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const PanjaiToken = localStorage.getItem('PanjaiToken');

    const uploadFile = (event) => {
        event.preventDefault()
        // console.log(username)
        // console.log(password)
        const data = {username, password, PanjaiToken}
        //console.log(data)
        Axios.post('/authenticate/login', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            localStorage.setItem('PanjaiToken', res.data);
            //window.alert("ERROR: "+res.data.message)
        }).catch(error => console.log(error))
        return <Redirect to="/"></Redirect>
    }

/*-----------------------------------------------------------*/
    return (
        <div className="grid-container" >
            <div className="item1">
                <div className="image">
                     <img src={loginImg} />
                </div>
            </div>

            <div className="item2">
                <h1>เข้าสู่ระบบ</h1><br/>
                <form>
                
                    <div className="form-group">
                        <label>ชื่อผู้ใช้:</label><br />
                        <input
                        type="text"
                        placeholder="ชื่อผู้ใช้"
                        onChange={(event) =>{
                            setUsername(event.target.value)
                        }}
                        >
                        </input>
                    </div>

                    <div className="form-group">
                        <label>รหัสผ่าน:</label><br />
                        <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        onChange={(event) =>{
                            setPassword(event.target.value)
                        }}
                        >
                        </input>
                    </div>

                    <div className="button-login">
                        <button type='submit' className="btn btn-lg" onClick={uploadFile}>เข้าสู่ระบบ</button>
                    </div>
                </form>
                <div>
                 <br />
                     <h5>
                        <a href="/">ลืมรหัสผ่าน</a> | <a href="/">สมัครสมาชิก</a>
                    </h5>
                </div>
            </div>


        </div>
       
    )
}

export default (withStyles(styles)(LoginFrom));
//export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjaiForm));