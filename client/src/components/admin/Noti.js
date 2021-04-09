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

    const [display, setDisplay] = useState(false)

    const Handledisplay = () => {
        setDisplay(!display);
    }
    const [show, setShow] = useState(false);


    const handleClose = () => {
        localStorage.setItem('Firstpopup', false);
        setShow(false);
    };


    useEffect(async () => {
        // const Firstpopup = localStorage.getItem('Firstpopup');
        await setShow(localStorage.getItem('Firstpopup'));
        await localStorage.setItem('Firstpopup', false);
    }, []);

// ==================================== FDT Report ====================================================
return (
    <div>
      <div className="bigpopup">
        <Modal className="popup" show={show}>
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
                          ขอรับ
                </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className="fav"
                        >
                          ถูกใจ
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