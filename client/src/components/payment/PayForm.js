import React, { Component } from 'react';
import Checkout from './Checkout'
import axios from 'axios'
import uuid from "uuid";
import { AssignmentTurnedIn } from "@material-ui/icons";
import ButterToast, { Cinnamon } from "butter-toast";

// function PayForm({ money, cart }) {

const money = [
    {
        id: uuid(),
        title: "10 เหรียญ",
        price: 2000
    },
    {
        id: uuid(),
        title: "25 เหรียญ",
        price: 5000
    },
    {
        id: uuid(),
        title: "50 เหรียญ",
        price: 10000
    },
    {
        id: uuid(),
        title: "75 เหรียญ",
        price: 15000
    },
    {
        id: uuid(),
        title: "100 เหรียญ",
        price: 20000
    },
    {
        id: uuid(),
        title: "250 เหรียญ",
        price: 50000
    }
];

class PayForm extends Component {

    state = {
        money,
        charge: undefined,
        My_coin: 0,
        user_name: undefined,
        user_email: undefined,
    };

    onSuccess = async (id) => {
        console.log('**')
        await ButterToast.raise({
            content: <Cinnamon.Crisp title="เหรียญ"
                content="ทำรายการเสร็จสมบูรณ์"
                scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                icon={<AssignmentTurnedIn />}
            />
        })
        window.location.href = "/pay-coin" 
    }

    createCreditCardCharge = async (email, name, amount, token, user_id, my_coin) => {
        try {
            const res = await axios({
                method: "POST",
                url: "http://localhost:3001/pay-coin", //send to server
                data: { email, name, amount, token, user_id, my_coin },
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.data) {
                this.setState({ charge: res.data });
                localStorage.setItem('currentUser_coin', res.data.coin)
                console.log('***')
                this.onSuccess(res.data.user_id)
            }
        } catch (err) {
            console.log(err);
        }
    };


    componentDidMount() {
        const currentUserID = localStorage.getItem("currentUser_id")
        axios.post('/authenticate/information/' + currentUserID, {
        }).then(res => {
            this.setState({
                user_name: res.data.name,
                user_email: res.data.email,
                My_coin: res.data.coin
            })
            // console.log(this.My_coin)
            //console.log(res.data)
        }).catch(error => console.log(error))
    }

    render() {

        const currentUserID = localStorage.getItem("currentUser_id")
        const { money, charge } = this.state;
        const { My_coin, user_email, user_name } = this.state

        // console.log(charge)
        // console.log(My_coin)


        return (
            <>
                <div className="money">
                    <h1>เติมเหรียญ</h1>
                    <h1>เหรียญของฉัน : {My_coin}</h1>
                    {money.map(m => (
                        <div key={m.id} className="product__item">
                            <h1>{m.title}</h1>
                            <Checkout
                                money={new Intl.NumberFormat().format(m.price / 100)}
                                user_id={currentUserID}
                                user_name={user_name}
                                user_email={user_email}
                                my_coin={My_coin}
                                //cart={cart}
                                createCreditCardCharge={this.createCreditCardCharge}
                            />

                            {/* 
                        <button className="btn" onClick={addToCart(m.id)}>
                            {new Intl.NumberFormat().format(m.price / 100)} Baht
                        </button> */}

                        </div>
                    ))}
                </div>

            </>
        );
    }
}


export default PayForm;