import React, { useEffect, useState } from 'react';
import Categoshow from '../components/category/categoryshow'
import { store } from "../action/store";
import { Provider } from "react-redux";


function Categoryshow({ classes, ...props }) {

    const [currentId, setCurrentId] = useState(props)

    console.log(props)

    return (
        <>
            <Provider store={store}>
                <Categoshow {...{ currentId, setCurrentId }} />
            </Provider>
        </>
    );
}
export default Categoryshow;