import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../action/postPanjai'
import { Divider, Grid, Paper, Typography, withStyles, List, ListItem, ListItemText, Button } from '@material-ui/core';
import PostPanjaiForm from './PostPanjaiForm'
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import moment from 'moment';
import { Img } from 'react-image';

const styles = theme => ({
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    },
    test: {
        background: 'rgba(187, 130, 44, 0.925)',
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 'auto',
        padding: '30px 30px',
        marginBlock: '15px',
    },
    // test1: {
    //     background: '#f9a825',
    //     borderRadius: 5,
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //     color: 'white',
    //     height: 'auto',
    //     padding: '10px 10px',
    //     marginBlock: '15px',
    // }
    
})

const PostPanjai = ({ classes, ...props }) => {

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllPostPanjai()
    }, [])

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
        if (window.confirm('ต้องการลบโพสนี้ใช่หรือไม่?'))
            props.deletePostMessage(id, onSuccess)
    }

    return (
        <>
            <Grid container>
                <Grid item xs={8}>
                <Paper className={classes.test}>
                        <PostPanjaiForm {...{ currentId, setCurrentId }} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                    {/* ฝั่งขวา ใช้ classes.ชื่ออื่่น */}
                            {
                                props.postPanjaiList.map((record, index) => {
                                    return (
                                        <Grid item xs={12} sm={4} >
                                        <Paper className={classes.test1}>
                                        <Fragment key={index}>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant='h5'>
                                                        {record.title}
                                                    </Typography>
                                                    <div>
                                                        ข้อมูล : {record.message}  
                                                    </div>
                                                    <div>
                                                        <img src={record.image} />
                                                    </div>
                                                    <div>
                                                        เวลาที่ลง : {moment(record.Timestamp).calendar()}
                                                    </div>
                                                    <div>
                                                        โทร : {record.contect}
                                                    </div>
                                                    <div>
                                                        {record.location}
                                                    </div>
                                                    <div className={classes.botton1}>
                                                        <Button variant="contained" color="primary" size="small"
                                                            className={classes.smMargin}
                                                            // จำเป็น
                                                            onClick={() => setCurrentId(record._id)}>
                                                            แก้ไข
                                                    </Button>
                                                        <Button variant="contained" color="secondary" size="small"
                                                            className={classes.smMargin}
                                                            onClick={() => onDelete(record._id)}>
                                                            ลบ
                                                    </Button>
                                                    </div>
                                                    {/* รูปแบบช่อง */}
                                                </ListItemText>
                                            </ListItem>
                                            <Divider component='li' />
                                        </Fragment>
                                        </Paper>
                                        </Grid>
                                    )
                                })
                            }
            </Grid>
        </>
    );
}

const mapStateToProps = state => ({
    postPanjaiList: state.postPanjai.list
})

const mapActionToProps = {
    fetchAllPostPanjai: action.fetchAll,
    deletePostMessage: action.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjai));