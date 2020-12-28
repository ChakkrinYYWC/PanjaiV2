import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Provider } from "react-redux";
import PostPanjai from "../components/PostPanjai";
import { store } from "../action/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";

function Too_panjai() {
    return(
        <Provider store={store}>
            <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography
                variant="h2"
                align="center">
                ตู้ปันใจ
                </Typography>
            </AppBar>
            <PostPanjai />
            <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
            </Container>
        </Provider>
    );
}

export default Too_panjai;