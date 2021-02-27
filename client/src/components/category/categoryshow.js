import React, { Component, useEffect } from 'react';
import './category.css'
import { connect } from 'react-redux';
import * as action from '../../action/postFDT'
import moment from 'moment';
import Form from './Form'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Categoryshow({ classes, ...props }) {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        props.fetchAllPostFDT()
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    console.log(props)

    return (
        <>
            {
                props.postFDTList.filter(fdt => fdt._id == props.currentId.match.params.id).map((record, index) => {
                    return (
                        <>
                            <h2>{record.title}</h2>
                            <img variant="top" src={'http://localhost:3001/Foundation/' + record.image} />
                            <h2>{record.message}</h2>
                            <h2>{record.item}</h2>
                            <h2>{record.n_item}</h2>
                            <h2>{moment(record.Timestamp).calendar()}</h2>

                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                บริจาค
                            </Button>
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                            >
                                <DialogTitle id="responsive-dialog-title">บริจาคให้กับ{record.title}</DialogTitle>

                                <DialogContent>
                                    <DialogContentText>
                                        <Form {...record} />
                                    </DialogContentText>
                                </DialogContent>

                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        ยกเลิก
                                    </Button>
                                </DialogActions>

                            </Dialog>


                        </>
                    );
                })
            }
        </>
    );
}

const mapStateToProps = state => ({
    postFDTList: state.postFDT.list
})

const mapActionToProps = {
    fetchAllPostFDT: action.fetchAll,
    deletePostMessage: action.Delete
}


export default connect(mapStateToProps, mapActionToProps)(Categoryshow);
//export default Categoryshow;