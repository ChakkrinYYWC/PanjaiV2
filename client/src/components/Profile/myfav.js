import React, { useState, useEffect } from 'react';
import './profile.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Myfav() {
    const currentUser = localStorage.getItem('currentUser')
    const currentUser_email = localStorage.getItem('currentUser_email')
    const currentUser_phone = localStorage.getItem('currentUser_phone')
    const currentUser_address = localStorage.getItem('currentUser_address')
    const currentUser_id = localStorage.getItem('currentUser_id')

    const [fav, setFav] = useState([])

    function GetFav() {

        Axios.post('/profile/favorite/' + currentUser_id, {
        }).then(res => {
            console.log(res);
            setFav(res.data)
        }).catch(error => console.log(error))

        console.log("fav" + fav)
        return false
    }

    return (
        <div>
            <GetFav/>
            {
                fav.map((record, index) => {
                    return (
                        <div>
                            <h1>{record.title}</h1><br/>ข้อมูล: {record.message}<br/>ผู้สร้าง: {record.creator}<br/><br/>
                        </div>
                    )
                })
            }
        </div>
    )
}




export default Myfav;