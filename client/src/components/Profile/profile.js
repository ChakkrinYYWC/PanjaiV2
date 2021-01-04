import React, { Component } from 'react';
import './profile.css'
import { Link } from 'react-router-dom';

class profile extends Component {

    render() {
        return (
            <div className="container">
                <div className="box">
                    <section>
                        <div className="box-img">
                            <img src="https://www.newtv.co.th/images/content/ct_20200712061446119.jpg"></img>
                        </div>
                    </section>

                    <section>
                        <div className="box-text">
                            <h1> ประวัติส่วนตัว</h1>
                            <i className="fa fa-user"><span> ชื่อ-นามสกุล </span></i>
                            <p>เจมส์ จิรายุ</p>
                            <i className="fas fa-phone"><span> เบอร์โทรศัพท์ </span></i>
                            <p>098-9847077</p>
                            <i className="fas fa-address-card"><span> ที่อยู่</span></i>
                            <p>129 ซ.สุขสวัสดิ์ 26 แยก 10-5 แขวงบางปะกอก เขตราษฎร์บูรณะ กทม.10140</p>
                            <i className="fas fa-envelope"><span> อีเมล</span></i>
                            <p>june_25431@hotmail.com</p>

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


}

export default profile