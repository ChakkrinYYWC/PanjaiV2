import React, { Component, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as action from '../../action/postFDT'
import { Link } from 'react-router-dom';

const ShowFDT = ({ ...props }) => {

    // useEffect(() => {
    //     props.fetchPostFDT()
    // }, [])

    // useEffect(() => {
    //     if (props != 0) {
    //         setValues({
    //             ...props.postFDTList.find(x => x._id == props)
    //         })
    //         setErrors({})
    //     }
    // }, [props])

    return (
        <>

        </>
    );
}

const mapStateToProps = state => ({
    postFDTList: state.postFDT.list
  })

const mapActionToProps = {
    fetchPostFDT: action.fetchById,
    deletePostMessage: action.Delete
}

export default connect(mapStateToProps, mapActionToProps)(ShowFDT);