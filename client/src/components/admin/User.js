import React from 'react';
import { useState, useEffect } from 'react';
import './ModalNoti.css'
import Axios from 'axios';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

import { Card, Button, Modal } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


/*----------------------------------------------------------------------*/

function SearchUser() {
  const [userSearchInput, setUserSearchInput] = useState("")
  const [foundUser, setFoundUser] = useState([])
  var userPopup = localStorage.getItem('userPopup')
  //console.log(userPopup)
  if (userPopup == "false") {
    var isShow = false
  }
  if (userPopup == "true") {
    var isShow = true
  }
  // const [show, setShow] = useState("");
  // console.log(show)

  const handleClose = async () => {
    await localStorage.setItem('userPopup', false);
    //console.log(localStorage.getItem('userPopup'))
    window.location.reload()
  };

  const userSearch = () => {
    Axios.get('/search/findUser/' + userSearchInput, {
    }).then(async function (res) {
      setFoundUser(res.data)
    }).catch(error => console.log(error))
  }

  function BanUser(data){
    Axios.get('/authenticate/banUser/' + data, {
    }).then(res => {
        console.log(res)
    }).catch(error => console.log(error))
  }

  // ==================================== Search admin =================================================================
  return (
    <div>
      <div className="bigpopup">
        <Modal className="popup" show={isShow}>
          <div className="pd">
            <Modal.Header
              className="popuptitle"
              closeButton
              onClick={handleClose}
            >
              Finding User
              </Modal.Header>
            <Modal.Body>
              <div className="field">
                <input type="text" className="ui-input" placeholder="ค้นหา"
                  onChange={(event) => {
                    setUserSearchInput(event.target.value)
                  }} />
                <button onClick={() => userSearch()} className="search-bt">
                  ค้นหา
                </button>
              </div><br />
              <div>
                {
                  foundUser.map((record, index) => {
                    return (
                      <div>
                        <div>
                          <a>{record.username}</a>
                          <button onClick={ () => BanUser(record._id)}>Ban</button>
                          <button>View profile</button>
                        </div>
                      </div>
                    )
                  })

                }
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </div>
  );
}





export default SearchUser;