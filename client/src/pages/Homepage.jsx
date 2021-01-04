import Axios from 'axios';
import React from 'react';
import { useState } from 'react';

import { BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect
} from "react-router-dom";
/*----------------------------------------------------------------------*/
function Homepage() {
    return (
        <div>
            <div>Welcome</div>
            <Link to="/login">Login</Link><br/>
            <Link to="/register">Register</Link><br/>
            <Link to="/Too_panjai">Too panjai</Link>
        </div>
    )
}

export default Homepage;