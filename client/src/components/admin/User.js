import React from 'react';
import { useState, useEffect } from 'react';


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



// ==================================== Search admin =================================================================
    return (
      <div>
        <div className="bigpopup">
          <Modal className="popup" show={show}>
            <div className="p">
              <Modal.Header
                className="popuptitle"
                closeButton
                onClick={handleClose}
              >
                {/* <div className="y"></div> */}
              </Modal.Header>
              <Modal.Body>หาUser?</Modal.Body>
              <div className="field">
                <input type="text" className="ui-input" placeholder="ค้นหา" />
                <button type="submit" className="search-bt">
                  ค้นหา
                </button>
              </div>


              <br/><br/>
              <table width="100%">

                <tr>
                  <td>Username1</td>
                  <td><button > Profile </button></td>
                </tr>
                <br/>
                <tr>
                  <td>Username2</td>
                  <td><button > Profile </button></td>
                </tr>
              </table>
            </div>
          </Modal>
        </div>
      </div>
    );
}





export default SearchUser;