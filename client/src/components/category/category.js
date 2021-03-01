import React, { Component, useEffect, useState } from 'react';
import './category.css'
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as action from '../../action/postFDT'
import moment from 'moment';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import imgdek from './dek.png';
// import old from './old.png';
import { urlencoded } from 'body-parser';



function Category({ classes, ...props }) {

    const [loading, setLoading] = useState(true);

    // const ArrayimgHeader = [
    //     {
    //         category: "เด็กและเยาวชน",
    //         img: "dek.png"
    //     },
    //     {
    //         category: "ผู้สูงอายุ",
    //         img: "https://www.rakkaya.com/wp-content/uploads/2019/11/geriatric-package.jpg"
    //     },
    // ]

    // const [imgHeaderPage,setimgHeaderPage] = useState();

    useEffect(async () => {
        await props.fetchAllPostFDT()
        console.log(props.postFDTList);

        // function getImg(ArrayimgHeader) {

        //     ArrayimgHeader.map((item) => {

        //         if (item.category === props.currentId.match.params.name) {
        //             // alert(item.img);
        //             setimgHeaderPage(item.img)
        //             console.log(imgHeaderPage);
        //         }

        //         return imgHeaderPage;
        //     })
        // }
        // await getImg(ArrayimgHeader);
        await setLoading(false);

    }, [])
    console.log(props)
    // console.log(props.currentId1)

    return (
        <>
            {
                loading ?
                    <div>loading...</div>

                    :
                    <div className="dek" >
                        {/* {alert(imgHeader)} */}
                        {/* style={{ backgroundImage: `url(${imgdek})` }} */}
                        <div className="box-white">
                            <div className="Title"><i className="fab fa-gratipay"></i>{props.currentId.match.params.name}<i className="fab fa-gratipay"></i></div>
                            <div className="foundation">
                                <div className="row m-0">
                                    {
                                        props.postFDTList.filter(fdt => fdt.category == props.currentId.match.params.name).map((record, index) => {
                                            return (
                                                <div className="column col-4">
                                                    <Card className="foundat">
                                                        <Card.Img variant="top" src={'http://localhost:3001/Foundation/' + record.image} />
                                                        <Card.Body>
                                                            <Link to={"/Foundation/" + props.currentId.match.params.name + "/" + record._id} className="Tfound">{record.title}</Link>
                                                            <div className="information">ต้องการรับบริจาค :{record.item}</div>
                                                            <div className="information">จำนวน :{record.n_item}</div>
                                                            <div className="information-1">วันที่ลง :{moment(record.Timestamp).calendar()}</div>
                                                            <Link to={"/Foundation/" + props.currentId.match.params.name + "/" + record._id} className="CardTitle">อ่านเพิ่มเติม</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

            }

        </>

    );
}

const mapStateToProps = state => ({
    postFDTList: state.postFDT.list
})

const mapActionToProps = {
    fetchAllPostFDT: action.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Category);