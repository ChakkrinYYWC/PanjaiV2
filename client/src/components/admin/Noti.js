import React from 'react';
import { useState, useEffect } from 'react';
import './ModalNoti.css'

import { Card, Button, Modal } from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";


/*----------------------------------------------------------------------*/

function Noti() {

  var blackListPopup = localStorage.getItem('blackListPopup')
  console.log(blackListPopup)
  if(blackListPopup == "false"){
    var isShow = false
  }
  if(blackListPopup == "true"){
    var isShow = true
  }
  // const [show, setShow] = useState("");
  // console.log(show)

  const handleClose = async () => {
    await localStorage.setItem('blackListPopup', false);
    console.log(localStorage.getItem('blackListPopup'))
    window.location.reload()
  };

// ==================================== FDT Report ====================================================
return (
    <div>
      <div className="bigpopup">
        <Modal className="popup" show={isShow}>
          <div className="bp">
            <Modal.Header
              className="popuptitle"
              closeButton
              onClick={handleClose}
            >
                Post Report
              {/* <div className="y"></div> */}
            </Modal.Header>
            <Modal.Body> 
                <div className="column  ">
                  <Card className="foundat">
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
                    />
                    <Card.Body>
                      <Link className="Tfound"></Link>
                      <div className="information">ผู้สร้าง :</div>
                      <div className="information">จังหวัด :</div>
                      <div className="information-1">วันที่ลง :</div>
                      <div className="pum">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className="want" // จำเป็น
                        >
                          ลบโพสต์
                </Button>
              
                      </div>
                    </Card.Body>
                  </Card>
                </div>






                <div className="column  ">
                  <Card className="foundat">
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnmt84Z13XWVUnKhEhuKpf18Kzy190Yz-7g&usqp=CAU"
                    />
                    <Card.Body>
                      <Link className="Tfound"></Link>
                      <div className="information">ผู้สร้าง :</div>
                      <div className="information">จังหวัด :</div>
                      <div className="information-1">วันที่ลง :</div>
                      <div className="pum">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className="want" // จำเป็น
                        >
                          ลบโพสต์
                     </Button>
                        
                      </div>
                    </Card.Body>
                  </Card>
                </div>
         
            </Modal.Body>
        
            

          </div>
        </Modal>



      </div>
      
    </div>
  );
}

export default Noti;