import React, { useState, useEffect } from 'react';
import './profile.css'
import { Link } from 'react-router-dom';

function Profile() {

    // false = ยังไม่ได้กด edit
    const [edit, setedit] = useState(false);
    //ข้อมูลโปรไฟล์
    const [profile, setprofile] = useState([]);
    //ข้อมูลเมื่อมีการแก้ไข
    // const [newProfile, setnewProfile] = useState([])
    const [newFirst, setnewFirst] = useState("");
    const [newPhone, setnewPhone] = useState("");
    const [newAddress, setnewAddress] = useState("");
    const CancelUpdate = () => {
        setedit(false);
    }

    function handleEditProfile() {
        setedit(true);
    }



    function handleFirstname(value) {
        setnewFirst(value);

    }
    function handleFirstPhone(value) {
        setnewPhone(value);

    }
    function handleFirstAddress(value) {
        setnewAddress(value);

    }
    // อัพเดตโปรไฟล์
    function confirmUpdate() {

    }






    useEffect(() => {

        const getprofile = () => {

            //fetch from server

            //ข้อมูล Demo
            setprofile(
                {

                    name: "june",
                    phone: "28178799812",
                    address: "พระราชวัง ประเทศอังกฤษ",
                    email: "june@gamil.com"

                }
            )
        }

        getprofile();

    }, [])


    return (
        <div className="container">
            <div className="box">
                <section>
                    {edit ?
                        //สามารถแก้ไขๆด้
                        (
                            <div>
                                <div className="box-text">
                                    <h1> ประวัติส่วนตัว</h1>
                                    <div className="textinforuser">
                                        <span> <i className="fa fa-user"> </i> ชื่อ-นามสกุล</span>
                                        {/* <p>เจมส์ จิรายุ</p> */}
                                        <input type="text" value={newFirst} onChange={(e) => { handleFirstname(e.target.value) }}></input>
                                    </div>
                                    <div className="textinforuser">
                                        <span> <i className="fas fa-phone"> </i> เบอร์โทรศัพท์</span>
                                        {/* <p>098-9847077</p> */}
                                        <input type="text" value={newPhone} onChange={(e) => { handleFirstPhone(e.target.value) }}></input>
                                    </div>
                                    <div className="textinforuser">
                                        <span> <i className="fas fa-address-card"> </i> ที่อยู่</span>
                                        <input type="text" value={newAddress} onChange={(e) => { handleFirstAddress(e.target.value) }}></input>
                                        {/* <p>129 ซ.สุขสวัสดิ์ 26 แยก 10-5 แขวงบางปะกอก เขตราษฎร์บูรณะ กทม.10140</p> */}
                                    </div>
                                    <div className="textinforuser">
                                        <span> <i className="fas fa-envelope"> </i> อีเมล</span>

                                        <p>june_25431@hotmail.com</p>
                                    </div>
                                    <div className="confirm-and-cancelEditProfile">
                                        <div className="confirmEditProfile">
                                            <button className="button" onClick={confirmUpdate}>บันทึก</button>
                                        </div>
                                        <div className="cancelEditProfile">
                                            <button className="button" onClick={CancelUpdate}>ยกเลิก</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )

                        :
                        //ข้อมูลปกติ
                        (
                            <div>
                                <div className="box-text">
                                    <h1> ประวัติส่วนตัว</h1>
                                    <div className="textinforuser">
                                        <span> <i className="fa fa-user"> </i> ชื่อ-นามสกุล</span>
                                        <p>{profile.name}</p>
                                    </div>
                                    <div className="textinforuser">
                                        <span> <i className="fas fa-phone"> </i> เบอร์โทรศัพท์</span>
                                        <p>{profile.phone}</p>
                                    </div>
                                    <div className="textinforuser">
                                        <span> <i className="fas fa-address-card"> </i> ที่อยู่</span>
                                        <p>{profile.address}</p>
                                    </div>
                                    <div className="textinforuser">
                                        <span> <i className="fas fa-envelope"> </i> อีเมล</span>
                                        <p>{profile.email}</p>
                                    </div>


                                    <div className="btn-bottom-profile">
                                        <div className="EditProfile">
                                            <button className="button" onClick={handleEditProfile}>EditProfile</button>
                                        </div>
                                        <div className="Like">
                                            <Link to="/profile/favorite"><i className="fab fa-gratipay"></i></Link>
                                            {/* <Link  to={item.href}></Link> */}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )

                    }







                </section>


            </div>
            <div className="Post">
                <p>Post ของฉัน </p>
            </div>
        </div>

    )
}




export default Profile;