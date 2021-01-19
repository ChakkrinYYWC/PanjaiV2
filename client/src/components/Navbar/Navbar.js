import { Search } from '@material-ui/icons';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import Axios from 'axios';
import { Avatar } from "@material-ui/core";

import Menuitems from "./Menuitems";
import './Navbar.css';

const PanjaiToken = localStorage.getItem('PanjaiToken')
//console.log("PanjaiToken: "+PanjaiToken)
const currentUser = localStorage.getItem('currentUser')
const currentUser_id = localStorage.getItem('currentUser_id')
//console.log("currentUser_id#1: "+currentUser_id)

const data = {currentUser_id}

async function logout() {
    await Axios.post('/authenticate/logout', data, {
    }).then(res => {
        console.log(res.data);
        //window.alert(res.data)
        localStorage.setItem('PanjaiToken', null);
        localStorage.setItem('currentUser', null);
        localStorage.setItem('currentUser_id', null);
        localStorage.setItem('currentUser_email', null);
    }).catch(error => console.log(error))
    console.log("currentUser_id#2: "+currentUser_id)
}

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }

    render() {
        return (

            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">ปันใจ <i class="fab fa-gratipay"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {Menuitems.map((item, index) => {
                            return (
                                <li className="itemlist" key={index}>
                                    <Link className={item.cName} to={item.href}>
                                        {item.title}
                                    </Link>
                                </li>

                            )
                        })}

                        <li className="itemlist">
                            <If condition={PanjaiToken == "null"}>
                                <Then>
                                    <Link to="/Login" className="hidden">เข้าสู่ระบบ</Link>
                                </Then>
                                <Else>
                                    <Then>
                                        <Link onClick={logout} className="hidden">ออกจากระบบ</Link>
                                    </Then>
                                </Else>
                            </If>
                        </li>
                    </ul>

                    <span class="dropdown position-search">
                        <span type="button" data-toggle="dropdown"><i class="fas fa-search"></i></span>
                        <div class="dropdown-menu dropdown-menu-right">
                            <input type="Search" placeholder="ค้นหา..."></input>
                        </div>
                    </span>
                    <span class="noti">
                        <span type="button" href="" className="bell"><i class="fas fa-bell"></i></span>
                    </span>
                    <If condition={PanjaiToken == "null"} >
                        <Then>
                            <Link to="/Login" className="nav-links-mobile"> เข้าสู่ระบบ</Link>
                        </Then>
                        <Else>
                            <Then>
                                <Avatar>{currentUser.charAt(0).toUpperCase()}</Avatar>
                                <Link onClick={logout} className="nav-links-mobile"> ออกจากระบบ</Link>
                            </Then>
                        </Else>
                    </If>
                    
                    {/* <div type="button" href="Login" className="nav-links-mobile">เข้าสู่ระบบ</div> */}

                </nav>
            </div>
        )
    }
}




export default Navbar