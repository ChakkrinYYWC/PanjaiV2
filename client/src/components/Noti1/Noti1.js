import React,{useState,useRef} from 'react'
import './Noti1.css'
import {Button,Overlay,Popover} from "react-bootstrap"

function Notification({open,t}) {

 

    const [ input, setInput ] = useState("")

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
                           <div className="grid">
                           <div className="NameKamko"> สรวงฤทัย ต้องการของชื่อ  </div>
                           
                           <div><i class="fas fa-check-circle" ></i>
                           <i class="fas fa-times-circle"></i></div>
                           
                           </div>

                        </div>
                        
                           
                        
                        {/* คำตอบรับ */}
                        <div className="boxNoti">
                           <div className="boxtext1">คำตอบรับ</div> 
                           
                           <div className="NameKamko"> สรวงฤทัย ตอบรับคำขอของคุณ
                           
                           </div>
                        </div>
                        
               
                    </Popover.Content>
                    
                </Popover>
            </Overlay>
        </div>
    )
}

export default Notification
