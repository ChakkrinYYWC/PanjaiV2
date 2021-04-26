import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../../action/postPanjai'
import * as action2 from '../../action/profile'
import './profile.css'
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import Axios from 'axios';
import { Card, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Divider, Grid, Paper, Typography, withStyles, ListItem, ListItemText, Button, TextField } from '@material-ui/core';
import moment from 'moment';
import useForm from '../PostPanjai/useForm'
import { AssignmentTurnedIn } from "@material-ui/icons";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

var once = false;

const initialFieldValues = {
    name: '',
    adress: '',
    phone: '',
}

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        "&:hover": {
            backgroundColor: "rgba(85, 52, 4, 0.925)"
        },
        margin: theme.spacing(1),
        background: 'rgba(187, 130, 44, 0.925)'
    },
    smMargin1: {
        "&:hover": {
            backgroundColor: "rgba(85, 52, 4, 0.925)"
        },
        margin: '0 auto',
        background: '#a13800',
        display: 'block'
    },
    // actionDiv: {
    //     textAlign: "center"
    // },
    post1: {

        // borderRadius: 5,
        boxShadow: '0 2px 3px 2px rgba(85, 52, 4, 0.925)',
        height: 'auto',
        padding: '30px 30px',
        marginBlock: '15px'

    },
    framepost: {
        boxShadow: "1px 1px 1px 1px rgba(187, 130, 44, 0.925)",
        color: 'rgba(187, 130, 44, 0.925)',
        height: '100%',
        padding: '10px 10px',
        borderRadius: "20px",
        marginBlock: '15px',
        magin: '10px'
    },
    frampicture: {
        padding: '10px 10px'

    },
    picture: {
        height: '150px',
        width: 'auto',
        margin: '10px auto',


    },
    frontpost: {
        fontFamily: 'mali',
        borderRadius: '50px'
    },
    color1: {
        color: '#a13800'
    },
    // judjudjud: {
    //     marginLeft: '75px'

    // },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },

})

function Profile({ classes, ...props }) {

    console.log(props)
    const currentUserID = localStorage.getItem("currentUser_id")
    const currentUser = localStorage.getItem("currentUser")
    const [allInform, setAllInform] = useState("");
    // false = ยังไม่ได้กด edit
    const [edit, setedit] = useState(false);
    //ข้อมูลโปรไฟล์
    const [myPost, setMyPost] = useState([])
    const route = useHistory()

    async function onetime() {
        if (once == false) {
            //once = true;
            await Axios.get('/profile/userInformation/' + currentUserID, {
            }).then(res => {
                // console.log(res)
                setAllInform(res.data)
            }).catch(error => console.log(error))

            await Axios.get('/profile/postInformation/' + currentUser, {
            }).then(res => {
                //console.log(res.data)
                setMyPost(res.data)
            }).catch(error => console.log(error))
        }
    }


    useEffect(() => {
        onetime();
        setErrors({})

    }, [])


    const validate = () => {
        let temp = { ...errors }
        temp.name = values.name ? "" : "กรุณาใส่ข้อมูล."
        temp.address = values.address ? "" : "กรุณาใส่ข้อมูล."
        temp.phone = values.phone ? "" : "กรุณาใส่ข้อมูล."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, currentUserID)

    const CancelUpdate = () => {
        setedit(false);
    }

    function handleEditProfile() {
        setedit(true);
    }

    const onDelete = id => {
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="ตู้ปันใจ"
                    content="Deleted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<DeleteSweep />}
                />
            })
        }
        if (window.confirm('ต้องการลบโพสนี้ใช่หรือไม่?')){
            props.deletePostMessage(id, onSuccess)
            window.location.href = "http://localhost:3000/profile/" + currentUserID
        }
    }

    // อัพเดตโปรไฟล์
    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="โปรไฟล์อัพเดต"
                    content="Submitted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<AssignmentTurnedIn />}
                />
            })
        }
        if (validate()) {
            props.updateProfile(currentUserID, values, onSuccess)
            window.location.href = "http://localhost:3000/profile/" + currentUserID
        }
    }

    return (
        <div className="back">
            <div className="container">
                <div className="box">
                    <section>
                        {edit ?
                            //สามารถแก้ไขได้
                            (
                                <div>
                                    <div className="box-text-profile">
                                        <h1> ประวัติส่วนตัว</h1>
                                        <div className="textinforuser">
                                            <span> <i className="fa fa-user"> </i> ชื่อ-นามสกุล</span>
                                            <TextField
                                                name="name"
                                                variant="filled"

                                                fullWidth
                                                size="small"
                                                value={values.name}
                                                onChange={handleInputChange}
                                                {...(errors.name && { error: true, helperText: errors.name })}
                                            />
                                        </div>
                                        <div className="textinforuser">
                                            <span> <i className="fas fa-phone"> </i> เบอร์โทรศัพท์</span>
                                            <TextField
                                                id="standard-basic"
                                                name="phone"
                                                type='number'
                                                variant="filled"

                                                fullWidth
                                                size="small"
                                                value={values.phone}
                                                onChange={handleInputChange}
                                                {...(errors.phone && { error: true, helperText: errors.phone })}
                                            />
                                        </div>
                                        <div className="textinforuser">
                                            <span> <i className="fas fa-address-card"> </i> ที่อยู่</span>
                                            <TextField
                                                name="address"
                                                variant="filled"

                                                fullWidth
                                                size="small"
                                                value={values.address}
                                                onChange={handleInputChange}
                                                {...(errors.address && { error: true, helperText: errors.address })}
                                            />
                                        </div>
                                        <div className="confirm-and-cancelEditProfile">
                                            <div className="confirmEditProfile">
                                                <button className="button" onClick={handleSubmit}>บันทึก</button>
                                            </div>
                                            <div className="cancelEditProfile">
                                                <button className="button" onClick={CancelUpdate}>ยกเลิก</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ) :

                            (
                                //ข้อมูลปกติ

                                <div>
                                    <div className="box-text-profile">
                                        <h1> ประวัติส่วนตัว</h1>
                                        <div className="textinforuser">
                                            <span> <i className="fa fa-user"> </i> ชื่อ-นามสกุล </span>
                                            <p>{allInform.name}</p>
                                        </div>
                                        <div className="textinforuser">
                                            <span> <i className="fas fa-phone"> </i> เบอร์โทรศัพท์</span>
                                            <p>{allInform.phone}</p>
                                        </div>
                                        <div className="textinforuser">
                                            <span> <i className="fas fa-address-card"> </i> ที่อยู่</span>
                                            <p>{allInform.address}</p>
                                        </div>
                                        <div className="textinforuser">
                                            <span> <i className="fas fa-envelope"> </i> อีเมล</span>
                                            <p>{allInform.email}</p>
                                        </div>
                                        <div className="grid-container1">
                                            <div className="EditProfile">
                                                <button className="button" onClick={handleEditProfile}>แก้ไข</button>
                                            </div>

                                            {/* <div className='Like'>
                                             <Link to="/myfav" className="button1" >โพสที่ถูกใจ</Link>
                                        </div> */}
                                            <div className='Like'>
                                                <button className="button1" type="button" onClick={() => { route.push('/myfav') }}  >
                                                    โพสที่ถูกใจ
                                        </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </section>


                </div>
                <br/>
                <div className="Post">
                    <span>Post ของฉัน </span>
                </div>
                <div>
                    <Grid container style={{ padding: '0 auto' }} spacing={4} >
                        {/* {console.log(myPost)} */}
                        {
                            myPost.map((record, index) => {

                                return (

                                    <Grid item xs={12} sm={4} >
                                        {/* {index} */}
                                        <Paper className={classes.framepost}>
                                            <Fragment key={index}>
                                                <ListItem>
                                                    <ListItemText>

                                                        <Grid container>
                                                            <Grid item xs={8}>
                                                                <Typography variant='h5' className={`${classes.color1} ${classes.frontpost}`}>
                                                                    {record.title}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>

                                                        <div className={classes.frontpost}>
                                                            ข้อมูล : {record.message}
                                                        </div>
                                                        <Grid container justify="center">
                                                            <div className={classes.frampicture} >
                                                                {console.log(record)}
                                                                <img src={'http://localhost:3001/image/' + record.image} alt={record.message} className={classes.picture} />
                                                            </div>
                                                        </Grid>
                                                        <div className={`${classes.color1} ${classes.frontpost}`}>
                                                            เวลาที่ลง : {moment(record.Timestamp).calendar()}
                                                        </div>
                                                        <div className={`${classes.color1} ${classes.frontpost}`}>
                                                            โทร : {record.contect}
                                                        </div>
                                                        <div className={`${classes.color1} ${classes.frontpost}`}>
                                                            จังหวัด : {record.location}
                                                        </div>
                                                        <div className={`${classes.color1} ${classes.frontpost}`}>
                                                            ผู้สร้าง : {record.creator}
                                                        </div>
                                                        {/* รูปแบบช่อง */}
                                                    </ListItemText>
                                                </ListItem>
                                            </Fragment>
                                            <Button variant="contained" color="secondary" size="small"
                                                className={`${classes.smMargin1} ${classes.frontpost}`}
                                                onClick={() => onDelete(record._id)}>
                                                ลบ
                                        </Button>
                                        </Paper>
                                    </Grid>
                                    // <div>
                                    //     <h1>{record.title}</h1><br/>ข้อมูล: {record.message}<br/>ผู้สร้าง: {record.creator}<br/><br/>
                                    // </div>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = state => ({
    postPanjaiList: state.postPanjai.list
})

const mapActionToProps = {
    fetchAllPostPanjai: action.fetchAll,
    fetchAllProfile: action2.fetchAll,
    deletePostMessage: action.Delete,
    updateProfile: action2.update
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Profile));