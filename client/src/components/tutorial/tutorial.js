import React, { Component, useEffect, useState } from 'react';
import './tutorial.css'

class tutorial extends Component {

    render() {
        return (

            <div className="bg-tutorial">
                <div className="bg-tutorial1">
                    <p>วิธีใช้</p>
                    <div class="grid-container-tutorial">
                        <div class="grid-item-tutorial">
                            <img
                                className="pic"
                                src="/tutorial-1.png"
                            />
                            <p>1.กดบริจาคเงิน</p>

                        </div>
                        <div class="grid-item-tutorial">
                        <img
                                className="pic"
                                src="/tutorial-2.png"
                            />
                            <p>1.กดบริจาคเงิน</p>
                        </div>
                        <div class="grid-item-tutorial">
                        <img
                                className="pic"
                                src="/tutorial-3.png"
                            />
                            <p>1.กดบริจาคเงิน</p>
                        </div>
                        <div class="grid-item-tutorial">
                        <img
                                className="pic"
                                src="/tutorial-4.png"
                            />
                            <p>1.กดบริจาคเงิน</p>
                        </div>
                        <div class="grid-item-tutorial">
                        <img
                                className="pic"
                                src="/tutorial-5.png"
                            />
                            <p>1.กดบริจาคเงิน</p>
                        </div>
                        <div class="grid-item-tutorial">
                        <img
                                className="pic"
                                src="/tutorial-6.png"
                            />
                            <p>1.กดบริจาคเงิน</p>
                        </div>
                        <div class="grid-item-tutorial">

                        </div>
                        <div class="grid-item-tutorial">

                        </div>
                        <div class="grid-item-tutorial">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default tutorial