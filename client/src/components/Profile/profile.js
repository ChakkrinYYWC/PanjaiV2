import React, { Component } from 'react';
import './profile.css'
import { Link } from 'react-router-dom';

function profile() {

    return (
        <div className="container">
            <div className="box">


                <section>

                    <div className="box-text">
                    <h1> ประวัติส่วนตัว</h1>
                        <div className="textinforuser">
                            <span> <i className="fa fa-user"> </i> ชื่อ-นามสกุล</span>
                            <p>เจมส์ จิรายุ</p>
                        </div>
                        <div className="textinforuser">
                            <span> <i className="fas fa-phone"> </i> เบอร์โทรศัพท์</span>
                            <p>098-9847077</p>
                        </div>
                        <div className="textinforuser">
                            <span> <i className="fas fa-address-card"> </i> ที่อยู่</span>
                            <p>129 ซ.สุขสวัสดิ์ 26 แยก 10-5 แขวงบางปะกอก เขตราษฎร์บูรณะ กทม.10140</p>
                        </div>
                        <div className="textinforuser">
                            <span> <i className="fas fa-envelope"> </i> อีเมล</span>
                            <p>june_25431@hotmail.com</p>
                        </div>
                       
                       </div>

                    <div className="btn-bottom-profile">
                        <div className="EditProfile">
                            <button className="button">EditProfile</button>
                        </div>
                        <div className="Like">
                            <i className="fab fa-gratipay"></i>
                            {/* <Link  to={item.href}></Link> */}
                        </div>
                    </div>


                </section>


            </div>
            <div className="Post">
                <p>Post ของฉัน </p>
            </div>
        </div>

    )
}




export default profile;