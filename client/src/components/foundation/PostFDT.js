import React, { useEffect, useState } from 'react';
import useForm from "../PostPanjai/useForm";
import * as actions from "../../action/postFDT";
import { connect } from "react-redux";
import { withStyles, Typography, IconButton, Button, TextField } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { PhotoCamera, AssignmentTurnedIn } from "@material-ui/icons"
import ButterToast, { Cinnamon } from "butter-toast";

const defaultImageSrc = '/img/picture-28117_960_720.png'


const initialFieldValues = {
    title: '',
    message: '',
    item: '',
    n_item: '',
    imageFile: null,
}

const styles = theme => ({
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    root: {
            margin: 0,
            padding: theme.spacing(2),
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
    imgpreview: {
        width: "40%"
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

    const [{ alt, src }, setImg] = useState({
        src: defaultImageSrc,
        alt: 'Upload an Image'
    });

    const validate = () => {
        let temp = { ...errors }
        temp.title = values.title ? "" : "กรุณาใส่ข้อมูล."
        temp.message = values.message ? "" : "กรุณาใส่ข้อมูล."
        temp.item = values.item ? "" : "กรุณาใส่ข้อมูล."
        temp.n_item = values.n_item ? "" : "กรุณาใส่ข้อมูล."
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
        resetForm,
        file,
        setFile
    } = useForm(initialFieldValues, props.setCurrentId)

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
            resetForm()
            setImg({
                src: defaultImageSrc,
                alt: 'Upload an Image'
            });
        }
        if (validate()) {
            if (props.currentId == 0) {
                const formData = new FormData();

                formData.append('image', file); // appending file
                formData.append('title', values.title);
                formData.append('message', values.message);
                formData.append('item', values.item);
                formData.append('n_item', values.n_item);

                props.createPostFDT(formData, onSuccess) //ส่งค่าไปserver
            }
            else
                props.updatePostFDT(props.currentId, values, onSuccess)
        }

    }

    return (
        <form noValidate autoComplete="off" className={`${classes.root} ${classes.form}`}>
            <DialogContent dividers>
                <Typography gutterBottom>
                    <TextField
                        id="standard-basic"
                        label="หัวข้อ"
                        name="title"
                        value={values.title}
                        onChange={handleInputChange}
                        {...(errors.title && { error: true, helperText: errors.title })}
                    />
                    <TextField
                        id="standard-basic"
                        name="message"
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
                    <input
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
                    </div>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary" >
                    Post
                </Button>
            </DialogActions>
        </form>
    );
}

const mapStateToProps = state => ({
    postFDTList: state.postFDT.list
})

const mapActionToProps = {
    createPostFDT: actions.create,
    updatePostFDT: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostFDT));
