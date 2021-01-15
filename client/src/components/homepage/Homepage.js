import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import $ from 'jquery';
// import Card from 'react-bootstrap/Card';
import { Card, Button } from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";


function Homepage() {

    const [display,setDisplay] = useState(false)

    const Handledisplay = () => {
        setDisplay(!display);
    }

    return (
        <div>
    
            {/* ----------------------slideshow------------------------------------------------*/}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.wongnai.com/p/1920x0/2021/01/04/5fbcd82c32974158b8b2c0aba5427bc4.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/05.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/02.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/06.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* <div id="demo" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.wongnai.com/p/1920x0/2021/01/04/5fbcd82c32974158b8b2c0aba5427bc4.jpg" alt="Los Angeles"></img>
                    </div>
                        <div className="carousel-item">
                            <img src="https://img.wongnai.com/p/1920x0/2020/01/15/d593f7cb890c47b78ea0862b774c75a7.jpg" alt="Chicago"></img>
                         </div>
                            <div className="carousel-item">
                                <img src="https://img.wongnai.com/p/1920x0/2021/01/04/5fbcd82c32974158b8b2c0aba5427bc4.jpg" alt="New York"></img>
                            </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                
            </div> */}


            {/* ---------------------------------category------------------------------------- */}
            <div className="category">
                <h3>ห ม ว ด ห มู่</h3>
                <div className="row m-0">
                    <div className="column col-4">
                        <Card className="cardd">
                            <Card.Img variant="top" src="/pngegg.png" />
                            <Card.Body>
                                <Link to="/profile" className="CardTitle">เด็กและเยาวชน</Link>
                                {/* <Card.Title Link to="/Too-panjai">เด็กและเยาวชน</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="column col-4">
                        <Card className="cardd">
                            <Card.Img variant="top" src="/2.png" />
                            <Card.Body className="">
                                <Link to="/profile" className="CardTitle">ผู้สูงอายุ</Link>
                                {/* <Card.Title>ผู้สูงอายุ</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="column col-4">
                        <Card className="cardd">
                            <Card.Img variant="top" src="/e.png" />
                            <Card.Body>
                                <Link to="/profile" className="CardTitle">สัตว์</Link>
                                {/* <Card.Title>สัตว์</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="column col-4">
                        <Card className="cardd">
                            <Card.Img variant="top" src="/4.png" />
                            <Card.Body>
                                <Link to="/profile" className="CardTitle">ผู้พิการและผู้ป่วย</Link>
                                {/* <Card.Title>ผู้พิการและผู้ป่วย</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="column col-4">
                        <Card className="cardd">
                            <Card.Img variant="top" src="/5.1.png" />
                            <Card.Body>
                                <Link to="/profile" className="CardTitle">สิ่งแวดล้อม</Link>
                                {/* <Card.Title>สิ่งแวดล้อม</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="column col-4">
                        <Card className="cardd">
                            <Card.Img variant="top" src="/6.png" />
                            <Card.Body>
                                <Link to="/profile" className="CardTitle">อื่นๆ</Link>
                                {/* <Card.Title>อื่นๆ</Card.Title> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            {/* ----------------------------ตู้ปันใจ------------------------------------------ */}
            <div className="tupanjai">
                <div class="row">
                    <div className="col-sm-4">
                        <div className="too">
                            <img src="to1.png" width="750" height="600"></img>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="tpjj">
                            <p>  สำหรับคนที่ต้องการสิ่งของหรือต้องการบริจาคสิ่งของ  </p>
                            <p>แต่ไม่รู้จะไปบริจาคที่ไหน สามารถบริจาคได้ที่ </p>
                            <a className="tpj" type="button" href="profile"><i class="far fa-hand-point-right"></i> ตู้ปันใจ</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------รอยยิ้ม------------------------------------------ */}
            <div className="card">
                <ul className={display? "card-stacks transition" : "card-stacks"}
                onClick={Handledisplay}
                >
                    <li class="title">
                        <h2>" รอยยิ้มแห่งความสุข<i class="far fa-smile-wink"></i> "</h2>
                    </li>
                    <li class="stack stack-1">
                        <ul class="cards-down">
                            <li class="card card-2"><img src="https://www.centralretail.com/storage/content/updates/our-projects/2020/01/20200131-134400-5.jpg" />
                                <div class="content">
                                    <center><p>" ช่วยกันปันน้ำใจ "</p></center>
                                </div>
                            </li>
                            <li class="card card-3"><img src="https://home4animals.org/wp-content/uploads/2018/01/img-06.jpg" />
                                <div class="content">
                                    <center><p>" ทุกชีวิตมีค่า "</p></center>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="stack stack-2">
                        <ul class="cards-down">
                            <li class="card card-2"><img src="https://f.ptcdn.info/629/060/000/phk8l2zd5SQ1Q10qxsm-o.jpg" />
                                <div class="content">
                                    <center><p>" คนไทยไม่ทิ้งกัน "</p></center>
                                </div>
                            </li>
                            <li class="card card-3"><img src="https://happymom.in.th/upload/d444294a3940ec9ccde7dc5514137f18.jpg" />
                                <div class="content">
                                    <center><p>" หนูดีใจมากๆเลยค่ะ "</p></center>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="stack stack-3">
                        <ul class="cards-down">
                            <li class="card card-2"><img src="https://4.bp.blogspot.com/-o8CwTuYhYrI/Ui_zq7jfYcI/AAAAAAAAACw/kCQQ6dFBIWo/s1600/yim.jpg" />
                                <div class="content">
                                    <center><p>" ยิ่งให้  ยิ่งได้ "</p></center>
                                </div>
                            </li>
                            <li class="card card-3"><img src="https://obs.line-scdn.net/0hmdaLuIDjMktcNRmSeHxNHGZjMSRvWSFIOANjSABbbH8kViEeaFMpJX83b3t4UHUVMgB_KHs0KXohUiUZYVIp/w644" />
                                <div class="content">
                                    <center><p>" ขอบคุณนะคะ5 "</p></center>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

// $('ul.card-stacks').on('click', function () {
//     $(this).toggleClass('transition');
// });


export default Homepage;