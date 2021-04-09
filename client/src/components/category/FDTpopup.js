import React, { Component, useEffect, useState } from 'react';
import './FDTpopup.css'
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as action from '../../action/postFDT'
import moment from 'moment';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";


function Popup({ classes, ...props }) {
    alert("The URL of this page is: " + window.location.href);
    return (

        <div className="dek" >
            <div className="box-white">

                <div className="Title"><i className="fab fa-gratipay"></i>อยากกินนมเย็น<i className="fab fa-gratipay"></i></div>
                <div className="foundation">
                    <div className="row m-0">


                        <div className="column col-xs-6 col-sm-6 col-md-6 col-lg-4">
                            <Card className="foundat">
                                <Card.Img variant="top" src={'http://localhost:3001/Foundation/'} />
                                <Card.Body>
                                    <Link to={"/Foundation"} className="Tfound">ฃื่อโครงการ</Link>
                                    <div className="information">ต้องการรับบริจาค :</div>
                                    <div className="information">จำนวน :</div>
                                    <div className="information-1">วันที่ลง :</div>
                                    <Link to={"/Foundation"} className="CardTitle">อ่านเพิ่มเติม</Link>

                                </Card.Body>
                            </Card>
                        </div>

                        

                    </div>
                </div>
            </div>


        </div>

    );
}



export default Popup;