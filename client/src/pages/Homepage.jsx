import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Foundation from './Foundation'
import Home from '../components/homepage/Homepage'
import Search from '../components/search/search'
import Admin from '../components/admin/User'
import Noti from '../components/admin/Noti'



import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

/*----------------------------------------------------------------------*/
function Homepage() {

    return (
        <>
            {/* <Link to="/login">Login</Link><br />
            <Link to="/register">Register</Link><br />
            <Link to="/Too_panjai">Too panjai</Link><br /> */}
            {/* <Foundation/> */}
            <Noti/>
            {/* <Search/> */}
        </>
           
    )
}

export default Homepage;