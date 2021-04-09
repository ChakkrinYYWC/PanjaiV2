import React from 'react';
import { Provider } from "react-redux";
import { store } from "../action/store";
import Profile from "../components/Profile/profile";

function userInformation() {
    return (
        <Provider store={store} >
            <Profile />
        </Provider>

    )
}

export default userInformation;