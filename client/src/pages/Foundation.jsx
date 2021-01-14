import React, { useEffect, useState } from 'react';
import PostFDT from "../components/PostFDT";
import { store } from "../action/store";
import { Provider } from "react-redux";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";
import { Fab, makeStyles, withStyles, Typography, IconButton, Dialog, Button, TextField, Container } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';



const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});



function Foundation({ classes, ...props }) {

    const [open, setOpen] = React.useState(false);
    const [currentId, setCurrentId] = useState(0)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <Provider store={store}>
            <Fab size="small" color="primary" aria-label="add" onClick={handleClickOpen} >
                <AddIcon />
            </Fab>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Post Foundation
               </DialogTitle>
               <PostFDT {...{ currentId, setCurrentId }} />
                <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
            </Dialog>

        </Provider>
    );
}

export default Foundation;