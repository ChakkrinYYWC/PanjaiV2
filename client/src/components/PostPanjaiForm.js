import React, { useEffect, useState } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../action/postPanjai";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";

const initialFieldValues = {
    title: '',
    message: '',
    contect: '',
    location: '',
    image:''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    postBtn: {
        width: "50%"
    }
})

const PostPanjaiForm = ({ classes, ...props }) => {

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.postPanjaiList.find(x => x._id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    const validate = () => {
        let temp = { ...errors }
        temp.title = values.title ? "" : "กรุณาใส่ข้อมูล."
        temp.message = values.message ? "" : "กรุณาใส่ข้อมูล."
        temp.contect = values.contect ? "" : "กรุณาใส่ข้อมูล."
        temp.location = values.location ? "" : "กรุณาใส่ข้อมูล."
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
        resetForm
    } = useForm(initialFieldValues, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="ตู้ปันใจ"
                    content="Submitted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<AssignmentTurnedIn />}
                />
            })
            resetForm()
        }
        if (validate()) {
            if (props.currentId == 0)
                props.createPostPanjai(values, onSuccess)
            else
                props.updatePostPanjai(props.currentId, values, onSuccess)
        }
    }

    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}>
            <div className='form-group'>
                <input
                    className='form-input bg-light'
                    name='image'
                    type='file'
                    value={values.image}
                    onChange={handleInputChange}
                />
            </div>
            <TextField
                name="title"
                variant="outlined"
                label="ชื่อ"
                fullWidth
                value={values.title}
                onChange={handleInputChange}
                {...(errors.title && { error: true, helperText: errors.title })}
            />
            <TextField
                name="message"
                variant="outlined"
                label="ข้อมูล"
                fullWidth
                multiline
                rows={4}
                value={values.message}
                onChange={handleInputChange}
                {...(errors.message && { error: true, helperText: errors.message })}
            />
            <TextField
                name="contect"
                variant="outlined"
                label="เบอร์โทรศัพท์"
                fullWidth
                multiline
                value={values.contect}
                onChange={handleInputChange}
                {...(errors.contect && { error: true, helperText: errors.contect })}
            />
            <TextField
                name="location"
                variant="outlined"
                label="ใส่ชื่อจังหวัด"
                fullWidth
                multiline
                value={values.location}
                onChange={handleInputChange}
                {...(errors.location && { error: true, helperText: errors.location })}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.postBtn}
            >โพสต์</Button>
        </form>
    );
}


const mapStateToProps = state => ({
    postPanjaiList: state.postPanjai.list
})

const mapActionToProps = {
    createPostPanjai: actions.create,
    updatePostPanjai: actions.update
}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjaiForm));