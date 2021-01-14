import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import { TextField, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';

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
        <div className="container">
            <h1>Login</h1>
            <div>
                <form>
                    <div>
                        <label>Username:</label>
                        <input
                        type="text"
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
                        type="password"
                        placeholder="Enter Password"
                        onChange={(event) =>{
                            setPassword(event.target.value)
                        }}
                        >
                        </input>
                    </div>
                    <div>
                        <button type='submit' onClick={uploadFile}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default (withStyles(styles)(LoginFrom));
//export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjaiForm));