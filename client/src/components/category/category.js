import React, { Component } from 'react';
import './category.css'
import { Card, Button } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

function category(props) {
    return (

        <div className="dek" >

            {/* <div className="box"> */}
                <div className="box-white">
                    <div className="Title"><i className="fab fa-gratipay"></i>เด็กและเยาวชน<i className="fab fa-gratipay"></i></div>
                    {/* <i className="fab fa-gratipay"></i> */}
                    <div className="foundation">
                        <div className="row m-0">
                            <div className="column col-4">
                                <Card className="foundat">
                                    <Card.Img variant="top" src="/1.1.jpg" />
                                    <Card.Body>
                                        <Link to="/category" className="Tfound">เด็กและเยาวชน</Link>
                                        <div className="information">thrfg</div>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="column col-4">
                                <Card className="foundat">
                                    <Card.Img variant="top" src="/1.2.jpg" />
                                    <Card.Body className="">
                                        <Link to="/profile" className="Tfound">ผู้สูงอายุ</Link>
                                        <div className="information">thrfg</div>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="column col-4">
                                <Card className="foundat">
                                    <Card.Img variant="top" src="/1.3.jpg" />
                                    <Card.Body>
                                        <Link to="/profile" className="Tfound">ผลิตสื่อนวัตกรรมการเรียนรู้วิทยาศาสตร์ สำหรับนักเรียนระดับมัธยมศึกษา</Link>
                                        <div className="information">thrfg</div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>


                    </div>
                </div>
{/* 
            </div> */}
        </div>

    );
}


export default category;