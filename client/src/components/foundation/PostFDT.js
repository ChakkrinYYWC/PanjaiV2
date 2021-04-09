import React, { useEffect, useState } from 'react';
import useForm from "../PostPanjai/useForm";
import * as actions from "../../action/postFDT";
import { connect } from "react-redux";
import {
    withStyles, Typography, IconButton, Button,
    TextField, MenuItem, FormControl, InputLabel,
    Select
} from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { PhotoCamera, AssignmentTurnedIn } from "@material-ui/icons"
import ButterToast, { Cinnamon } from "butter-toast";
import zIndex from '@material-ui/core/styles/zIndex';

const defaultImageSrc = '/image.png'


const initialFieldValues = {
    title: '',
    message: '',
    item1: '',
    item2: '',
    item3: '',
    n_item: '',
    category: null,
    promptpay: '',
    endtime: '',
    lat: '',
    lng: '',
    imageFile: null,
}

const styles = theme => ({
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    
    
    },
    root: {
        
        padding: theme.spacing(2),
        padding: "20px 20px 15px 20px",
      
       
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    imgpreview: {
        marginTop: "20px",
        width: "18%",

    },
    color1: {
        "&:hover": {
            color: "rgb(255, 255, 255)",
            backgroundColor: "rgb(193, 140, 87)"
        },
        color: '#a13800',
        backgroundColor: "rgb(248, 242, 236)",
        marginLeft: '25px',
        
    },   
    Btn: {
        "&:hover": {
            backgroundColor: "rgb(255, 230, 153)",
            fontSize: '13px'
        },
        color: "rgb(51, 38, 0)",
        background: 'rgb(255, 191, 0)',
        fontFamily: 'mali',
        fontSize: '15px'
    },
    want: {
        padding: "0 40px 0 0",
        margin: "0 0 10px 0"
    },
    formControl: {
        padding: "0",
        width: "25%",
    },
    titile: {
        width: "50%",
        margin: "0 0 10px 0"
   
    },
    detail: {
        margin: "0 0 10px 0"
    },
    promptpay: {
        margin: "0 0 10px 0"
    }

});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(0),
    },
}))(MuiDialogActions);


const PostFDT = ({ classes, ...props }) => {

    // console.log('*')
    // console.log(props)

    const [{ alt, src }, setImg] = useState({
        src: defaultImageSrc,
        alt: 'Upload an Image'
    });

    useEffect(() => {
        if (props.current != 0) {
            setValues({
                ...props.postFDTList.find(x => x._id == props.current)
            })
            setErrors({})
        }
    }, [props.current])

    const validate = () => {
        let temp = { ...errors }
        temp.title = values.title ? "" : "กรุณาใส่ข้อมูล."
        temp.message = values.message ? "" : "กรุณาใส่ข้อมูล."
        temp.item1 = values.item1 ? "" : "กรุณาใส่ข้อมูล."
        temp.item2 = values.item2 ? "" : "กรุณาใส่ข้อมูล."
        temp.item3 = values.item3 ? "" : "กรุณาใส่ข้อมูล."
        temp.n_item = values.n_item ? "" : "กรุณาใส่ข้อมูล."
        temp.lat = values.lat ? "" : "กรุณาใส่ข้อมูล."
        temp.lng = values.lng ? "" : "กรุณาใส่ข้อมูล."
        // temp.category = values.category ? "" : "กรุณาใส่ข้อมูล."
        temp.promptpay = values.promptpay ? "" : "กรุณาใส่ข้อมูล."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormFDT,
        file,
        setFile,
        category,
        setCategory
    } = useForm(initialFieldValues, props.setCurrent)

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            console.log(file);
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
        else {
            let pic = defaultImageSrc
            setFile(pic)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Foundation"
                    content="Post successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<AssignmentTurnedIn />}
                />
            })
            resetFormFDT()
            setImg({
                src: defaultImageSrc,
                alt: 'Upload an Image'
            });
        }
        if (validate()) {
            if (props.current == 0) {
                console.log('***')
                const formData = new FormData();
                
                formData.append('image', file); // appending file
                formData.append('title', values.title);
                formData.append('message', values.message);
                formData.append('item1', values.item1);
                formData.append('item2', values.item2);
                formData.append('item3', values.item3);
                formData.append('n_item', values.n_item);
                formData.append('category', category);
                formData.append('promptpay', values.promptpay);
                formData.append('endtime', values.endtime);
                formData.append('lat', values.lat);
                formData.append('lng', values.lng);

                props.createPostFDT(formData, onSuccess) //ส่งค่าไปserver
            }
            else
                    props.updatePostFDT(props.current, values, onSuccess)
        }

    }

    const handleChange = e => {
        setCategory(e.target.value);
    };

    if (props.current == 0) {
        return (
            <form noValidate autoComplete="off" className={`${classes.root} ${classes.form}`}>

                <Typography gutterBottom>
                    <TextField
                        id="standard-basic"
                        label="หัวข้อ"
                        className={classes.titile}
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                        {...(errors.title && { error: true, helperText: errors.title })}
                    />
                    <TextField
                        id="standard-basic"
                        name="message"
                        className={classes.detail}
                        label="รายละเอียด"
                        fullWidth
                        multiline
                        rows={2}
                        value={values.message}
                        onChange={handleInputChange}
                        {...(errors.message && { error: true, helperText: errors.message })}
                    />
                    <TextField
                        id="standard-basic"
                        name="item1"
                        label="ชิ้นที่1"
                        className={classes.want}
                        value={values.item1}
                        onChange={handleInputChange}
                        {...(errors.item1 && { error: true, helperText: errors.item1 })}
                    />
                    <TextField
                        id="standard-basic"
                        name="item2"
                        label="ชิ้นที่2"
                        className={classes.want}
                        value={values.item2}
                        onChange={handleInputChange}
                        {...(errors.item2 && { error: true, helperText: errors.item2 })}
                    />
                    <TextField
                        id="standard-basic"
                        name="item3"
                        label="ชิ้นที่3"
                        className={classes.want}
                        value={values.item3}
                        onChange={handleInputChange}
                        {...(errors.item3 && { error: true, helperText: errors.item3 })}
                    />
                    <TextField
                        id="standard-number"
                        name="n_item"
                        label="Number"
                        type="number"
                        label="จำนวนเงิน"
                        value={values.n_item}
                        onChange={handleInputChange}
                        {...(errors.n_item && { error: true, helperText: errors.n_item })}
                    />
                    <TextField
                        id="standard-basic"
                        name="promptpay"
                        className={classes.promptpay}
                        label="พร้อมเพย์"
                        value={values.promptpay}
                        onChange={handleInputChange}
                        {...(errors.promptpay && { error: true, helperText: errors.promptpay })}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">หมวดหมู่</InputLabel>
                        <Select
                            onChange={handleChange}
                        >
                            <MenuItem value={"เด็กและเยาวชน"}>เด็กและเยาวชน</MenuItem>
                            <MenuItem value={"ผู้สูงอายุ"}>ผู้สูงอายุ</MenuItem>
                            <MenuItem value={"สัตว์"}>สัตว์</MenuItem>
                            <MenuItem value={"ผู้พิการและผู้ป่วย"}>ผู้พิการและผู้ป่วย</MenuItem>
                            <MenuItem value={"สิ่งแวดล้อม"}>สิ่งแวดล้อม</MenuItem>
                            <MenuItem value={"อื่นๆ"}>อื่นๆ</MenuItem>
                        </Select>
                    </FormControl><br />
                    <TextField
                        id="standard-number"
                        name="lat"
                        label="ละติจูด"
                        value={values.lat}
                        onChange={handleInputChange}
                        {...(errors.lat && { error: true, helperText: errors.lat })}
                    />
                    <TextField
                        id="standard-number"
                        name="lng"
                        label="ลองจิจูด"
                        value={values.lng}
                        onChange={handleInputChange}
                        {...(errors.lng && { error: true, helperText: errors.lng })}
                    /><br />
                    <div>
                        <img src={src} alt={alt} className={classes.imgpreview} />
                    </div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                        onChange={showPreview}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.color1} >
                            <PhotoCamera />
                        </IconButton>
                    </label>

                </Typography>


                <DialogActions>
                    <Button onClick={handleSubmit} 
                    className={classes.Btn}
                    color="primary" >
                        Post
                </Button>
                </DialogActions>
            </form>
        );
    } else {
        return (
            <form noValidate autoComplete="off" className={`${classes.root} ${classes.form}`}>

                <Typography gutterBottom>
                    <TextField
                        id="standard-basic"
                        className={classes.titile}
                        label="หัวข้อ"
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                        {...(errors.title && { error: true, helperText: errors.title })}
                    />
                    <TextField
                        id="standard-basic"
                        name="message"
                        className={classes.detail}
                        label="รายละเอียด"
                        fullWidth
                        multiline
                        rows={2}
                        value={values.message}
                        onChange={handleInputChange}
                        {...(errors.message && { error: true, helperText: errors.message })}
                    />
                    <TextField
                        id="standard-basic"
                        name="item"
                        className={classes.want}
                        label="ต้องการรับบริจาค"
                        value={values.item}
                        onChange={handleInputChange}
                        {...(errors.item && { error: true, helperText: errors.item })}
                    />
                    <TextField
                        id="standard-number"
                        name="n_item"
                        label="Number"
                        type="number"
                        label="จำนวน"
                        value={values.n_item}
                        onChange={handleInputChange}
                        {...(errors.n_item && { error: true, helperText: errors.n_item })}
                    />
                    <TextField
                        id="standard-basic"
                        name="promptpay"
                        className={classes.promptpay}
                        label="พร้อมเพย์"
                        value={values.promptpay}
                        onChange={handleInputChange}
                        {...(errors.promptpay && { error: true, helperText: errors.promptpay })}
                    /><br />
                     <TextField
                        id="standard-number"
                        name="lat"
                        label="ละติจูด"
                        value={values.lat}
                        onChange={handleInputChange}
                        {...(errors.lat && { error: true, helperText: errors.lat })}
                    />
                    <TextField
                        id="standard-number"
                        name="lng"
                        label="ลองจิจูด"
                        value={values.lng}
                        onChange={handleInputChange}
                        {...(errors.lng && { error: true, helperText: errors.lng })}
                    /><br />
                    {/* <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                        onChange={showPreview}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <div>
                        <img src={src} alt={alt} className={classes.imgpreview} />
                    </div> */}
                </Typography>


                <DialogActions>
                    <Button onClick={handleSubmit} 
                    className={classes.Btn}
                    color="primary" >
                        Post
                </Button>
                </DialogActions>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    postFDTList: state.postFDT.list
})

const mapActionToProps = {
    createPostFDT: actions.create,
    updatePostFDT: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostFDT));
