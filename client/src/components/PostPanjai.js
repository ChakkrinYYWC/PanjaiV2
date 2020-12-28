import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../action/postPanjai'
import { Divider, Grid, Paper, Typography, withStyles, List, ListItem, ListItemText, Button } from '@material-ui/core';
import PostPanjaiFrom from './PostPanjaiForm';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import moment from 'moment';
import {Img} from 'react-image';

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
    }
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
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <PostPanjaiFrom {...{ currentId, setCurrentId }} />
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <Paper className={classes.paper}>
                    <List>
                        {
                            props.postPanjaiList.map((record, index) => {
                                return (
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
                                                    <img src={record.image}/>
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
                                                <div className={classes.actionDiv}>
                                                    <Button variant="contained" color="primary" size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => setCurrentId(record._id)}>
                                                        แก้ไข
                                                    </Button>
                                                    <Button variant="contained" color="secondary" size="small"
                                                        className={classes.smMargin}
                                                        onClick={() => onDelete(record._id)}>
                                                        ลบ
                                                    </Button>
                                                </div>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component='li' />
                                    </Fragment>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
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