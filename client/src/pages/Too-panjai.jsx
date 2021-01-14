import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Provider } from "react-redux";
import PostPanjai from "../components/PostPanjai/PostPanjai";
import { store } from "../action/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    primary: {
        background: 'white',
        padding: '10px 10px 10px 20px',
        marginBlock: '15px'
    },
    toopanjaitext: {
        color: 'rgba(187, 130, 44, 0.925)',
        fontFamily: 'mali',
        fontSize: '36px'
    }


});

function Too_panjai() {
    const classes = useStyles();
    return (
        <Provider store={store}>
            <Container maxWidth="lg">
                <AppBar position="static" className={classes.primary}>
                    <Typography
                        variant="h2"
                        align="center">
                        {/* ข้อความ */}
                        <span className={classes.toopanjaitext}>ตู้ปันใจ</span>
                    </Typography>
                </AppBar>
                <PostPanjai />
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
            </Container>
        </Provider>
    );
}

export default Too_panjai;