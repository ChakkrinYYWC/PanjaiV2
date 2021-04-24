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

function Blacklist() {
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
  
  // ====================================== Blacklist =========================================
  return (
    <div>
      <div className="bigpopup">
        <Modal className="popup" show={isShow}>
          <div className="pd">
            <Modal.Header className="popuptitle" closeButton onClick={handleClose}>
              Blacklist
            </Modal.Header>
            <Modal.Body><table width="100%">

              <tr>
                <td>Username1</td>
                <td><button > Profile </button></td>
                <td><button > Release </button></td>
              </tr>
              <br />
              <tr>
                <td>Username2</td>
                <td><button > Profile </button></td>
                <td><button > Release </button></td>
              </tr>
            </table>
            </Modal.Body>





          </div>
        </Modal>
      </div>
    </div>
  );
}
export default Blacklist;