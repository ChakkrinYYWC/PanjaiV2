import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Button from '@material-ui/core/Button';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import useForm from '../PostPanjai/useForm'
import uuid from "uuid";
import axios from 'axios';
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";


const fdt_coin = [
    {
        id: uuid(),
        coin: 10
    },
    {
        id: uuid(),
        coin: 25
    },
    {
        id: uuid(),
        coin: 50
    },
    {
        id: uuid(),
        coin: 100
    },
    {
        id: uuid(),
        coin: 250
    }
]


const Form = ({ ...props }) => {

    const currentUserID = localStorage.getItem("currentUser_id")
    const user_coin = localStorage.getItem("currentUser_coin")
    const [mycoin, setMycoin] = useState(user_coin);
    var newcoin = 0;

    const onSuccess = () => {
        ButterToast.raise({
            content: <Cinnamon.Crisp title="มูลนิธิ"
                content="บริจาคสำเร็จ"
                scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                icon={<AssignmentTurnedIn />}
            />
        })
    }

    const handleSubmit = async (coin) => {

        await axios.post('/authenticate/information/' + currentUserID, {
        }).then(async res => {
            //await setMycoin(res.data.coin)
            //console.log(res.data)
            newcoin = res.data.coin - coin
            //console.log(newcoin)

            if (window.confirm('คุณต้องการที่จะบริจาค ' + coin + ' เหรียญ ใช่หรือไม่?')) {

                if (newcoin <= 0) {
                    if (window.confirm('เหรียญของคุณไม่เพียงพอ กรุณาเติมเหรียญ')) {
                        window.location.href = "http://localhost:3000/pay-coin"
                    }
                } else {
                    console.log(newcoin)
                }

                const data = { newcoin }
                axios.post('/authenticate/mycoin/' + currentUserID, data, {
                }).then(res => {
                    onSuccess()
                    setMycoin(res.data.coin)
                    //console.log(res.data.coin)
                }).catch(error => console.log(error))
            }
        }).catch(error => console.log(error))

    }

    return (
        <div align="center">
            <h1>เหรียญของฉัน : {mycoin}</h1>
            {
                fdt_coin.map(c => (
                    <>
                        <Button
                            onClick={() => handleSubmit(c.coin)}
                            color="primary"
                        >
                            {c.coin} เหรียญ
                        </Button><br />
                    </>
                ))
            }

        </div>
    );
}
export default Form;

// <If condition={qrCode == 'sample'}>
// <Then>
//     <>
//         <h1>กรอกจำนวนเงิน</h1>
//         <input type="number" value={amount} onChange={handleAmount} />
//         <Button onClick={handleQR} color="primary">ยืนยัน</Button><br />
//     </>
// </Then>
// <Else>
//     <QRCode value={qrCode} />
// </Else>
// </If>