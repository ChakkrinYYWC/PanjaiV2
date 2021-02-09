import React, { useEffect, useState } from 'react';
import Category from "../components/category/category";
import { store } from "../action/store";
import { Provider } from "react-redux";

function Catego({ classes, ...props }) {

    const [currentId, setCurrentId] = useState(props)

    console.log(props)

    return (

        <Provider store={store}>
            <Category {...{ currentId, setCurrentId }} />
        </Provider>

    );
}

export default Catego;