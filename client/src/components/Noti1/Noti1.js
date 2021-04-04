import React,{useState,useRef} from 'react'
import './Noti1.css'
import {Button,Overlay,Popover} from "react-bootstrap"
import Axios from 'axios';
import { ContactSupportOutlined } from '@material-ui/icons';

function Notification({open,t}) {

    const username = localStorage.getItem('currentUser')
    const user_id = localStorage.getItem('currentUser_id')
    const user_contact = localStorage.getItem('currentUser_phone')

    function accept(record){
        const item = record.notification
        const sendTo = record.requester
        const data = {username, sendTo, item}
        Axios.post('/Too-Panjai/recieveAccept', data,{
        }).then(res => {
        }).catch(error => console.log(error))
        window.alert("Send contact to "+record.requester)
    }

    const [ noti, setNoti ] = useState([])
    const [ recieves, setRecieve ] = useState([])

    Axios.post('/Too-Panjai/notifications/'+user_id,{
    }).then(res => {
        //console.log(res.data);
        setNoti(res.data)
    }).catch(error => console.log(error))

    Axios.post('/Too-Panjai/findRecieve/'+user_id,{
    }).then(res => {
        console.log(res.data);
        setRecieve(res.data)
    }).catch(error => console.log(error))
    
    const [ input, setInput ] = useState("")
    //console.log(noti)
    return (
        <div>
            {/* <Button onClick={handleClick}>Holy guacamole!</Button> */}

            <Overlay
            //true แสดง
                show={open}
                target={t}
                placement="bottom"
                // container={ref.current}
                // containerPadding={20}
            >
                <Popover id="popover-contained" className="NotiPanel">
                    <Popover.Title as="h3">การแจ้งเตือน</Popover.Title>
                    <Popover.Content>
                    
                       
                        <div className="boxNoti">
                            <div className="boxtext">คำขอ</div>
                            {
                                noti.map((record, index) => {
                                    return(
                                        <div className="grid">
                                        <div className="NameKamko">{record.requester} ต้องการ {record.notification} จากคุณ</div>
                                        <div>
                                            <i onClick={() => accept(record)} class="fas fa-check-circle" ></i>
                                            <i class="fas fa-times-circle"></i>
                                        </div>
                                    </div>
                                    )
                                })
                            }

                        </div>
                        
                        
                           
                        
                        {/* คำตอบรับ */}
                        <div className="boxNoti">
                            <div className="boxtext">คำขอ</div>
                            {
                                recieves.map((record, index) => {
                                    return(
                                        <div className="grid">
                                        <div className="NameKamko">{record.owner} ได้ยอมรับคำขอ ({record.item}) ของคุณแล้ว<br/>โปรดติดต่อ : {record.owner_contact}</div>
                                    </div>
                                    )
                                })
                            }

                        </div>
                        
               
                    </Popover.Content>
                    
                </Popover>
            </Overlay>
        </div>
    )
}

export default Notification
