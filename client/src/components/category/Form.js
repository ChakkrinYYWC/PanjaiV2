import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Button from '@material-ui/core/Button';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

const generatePayload = require('promptpay-qr');

const Form = ({...props}) => {
    const [phoneNumber, setPhoneNumber] = useState(props.promptpay);
    const [amount, setAmount] = useState();
    const [qrCode, setqrCode] = useState("sample");

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }
    function handleAmount(e) {
        setAmount(parseFloat(e.target.value));
    }
    function handleQR() {
        setqrCode(generatePayload(phoneNumber, { amount }));
    }
    return (
        <div align="center">
            <If condition={qrCode == 'sample'}>
                <Then>
                    <>
                        <h1>กรอกจำนวนเงิน</h1>
                        {/* <input type="text" value={phoneNumber} onChange={handlePhoneNumber} /> */}
                        <input type="number" value={amount} onChange={handleAmount} />
                        <Button onClick={handleQR} color="primary">ยืนยัน</Button><br />
                    </>
                </Then>
                <Else>
                    <QRCode value={qrCode} />
                </Else>
            </If>
        </div>
    );
}
export default Form;