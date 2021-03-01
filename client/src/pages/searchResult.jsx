import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { TextField, withStyles, Button } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';

import Search from "../components/search/search";

function search() {
    return (
        <Search />
    )
}

export default search;
//export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjaiForm));