import React, { useEffect, useState, Component, useRef } from "react";
import { TextField, withStyles, Button, colors, IconButton, Grid } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../../action/postPanjai";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn, Repeat } from "@material-ui/icons";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import axios from 'axios'

const defaultImageSrc = '/image.png'

const initialFieldValues = {
    title: '',
    message: '',
    contect: '',
    location: '',
    imageFile: null,
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
      
        width: "20%",
        padding: '10px 10px 10px 20px',
        fontFamily: 'mali',
        fontSize: '20px',
        background: 'rgba(187, 130, 44, 0.925)'
  
        
    },
   
    topic: {
        color: 'red'
    },
    input: {
        display: 'none',
    },
    imgpreview: {
        width: "30%",
        marginLeft: '125px',
        

    },
    primary: {
        background: 'white',
        padding: '10px 10px 10px 20px',
        marginBlock: '15px',
        boxShadow: '0 2px 3px 2px rgba(187, 130, 44, 0.925)',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    color1: {
        color: '#a13800',
        marginLeft: '150px'
    },
    paper: {
        fontFamily: 'mali',
    }

})


const PostPanjaiForm = ({ classes, ...props }) => {

    const [{ alt, src }, setImg] = useState({
        src: defaultImageSrc,
        alt: 'Upload an Image'
    });

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
                content: <Cinnamon.Crisp title="ตู้ปันใจ"
                    content="Submitted successfully"
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
                formData.append('contect', values.contect);
                formData.append('location', values.location);

                props.createPostPanjai(formData, onSuccess) //ส่งค่าไปserver
                // const currentUser = localStorage.setItem('currentUser', res.data);
            }
            else
                props.updatePostPanjai(props.currentId, values, onSuccess)
        }

    }

    const closeEdit = e => {
        e.preventDefault()
        resetForm()
        props.setCurrentId(0);
    }
    

// post
    if (props.currentId == 0) {
        return (
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>
                <Grid item xs={12} >
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
                    <label htmlFor="icon-button-file" >
                        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.color1} >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </Grid>


                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <TextField
                        // style={{backgroundColor:'white', marginBottom:'1rem', marginTop:'1rem'}}
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        name="title"
                        variant="filled"
                        label="ชื่อ"
                        size="small"
                        fullWidth
                        className={classes.paper}
                        value={values.title}
                        onChange={handleInputChange}
                        {...(errors.title && { error: true, helperText: errors.title })}
                    />
                </Grid>


                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" >

                    <TextField
                        name="message"
                        variant="filled"
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        label="ข้อมูล"
                        fullWidth
                        size="small"
                        multiline
                        // rows={4}
                        value={values.message}
                        onChange={handleInputChange}
                        {...(errors.message && { error: true, helperText: errors.message })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" >

                    <TextField
                        name="contect"
                        variant="filled"
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        label="เบอร์โทรศัพท์"
                        fullWidth
                        size="small"
                        multiline
                        value={values.contect}
                        onChange={handleInputChange}
                        {...(errors.contect && { error: true, helperText: errors.contect })}
                    />
                </Grid>

                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >

                    <TextField
                        name="location"
                        variant="filled"
                        // InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        label="ใส่ชื่อจังหวัด"
                        fullWidth
                        size="small"
                        multiline
                        value={values.location}
                        onChange={handleInputChange}
                        {...(errors.location && { error: true, helperText: errors.location })}
                    />
                </Grid>


                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    className={classes.postBtn}

                >โพสต์</Button>
            </form>
        );
        // กดแก้่ไข
    } else {
        return (
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>

                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <TextField
                        // style={{backgroundColor:'white', marginBottom:'1rem', marginTop:'1rem'}}
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        name="title"
                        variant="filled"
                        label="ชื่อ"
                        fullWidth
                        className={classes.paper}
                        value={values.title}
                        onChange={handleInputChange}
                        {...(errors.title && { error: true, helperText: errors.title })}
                    />
                </Grid>


                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" >

                    <TextField
                        name="message"
                        variant="filled"
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        label="ข้อมูล"
                        fullWidth
                        multiline
                        // rows={4}
                        value={values.message}
                        onChange={handleInputChange}
                        {...(errors.message && { error: true, helperText: errors.message })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" >

                    <TextField
                        name="contect"
                        variant="filled"
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        label="เบอร์โทรศัพท์"
                        fullWidth
                        multiline
                        value={values.contect}
                        onChange={handleInputChange}
                        {...(errors.contect && { error: true, helperText: errors.contect })}
                    />
                </Grid>

                <Grid item xs={12} sm={6}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >

                    <TextField
                        name="location"
                        variant="filled"
                        InputProps={{ style: { border: '3px', margin: '1rem 0 1rem 0', fontFamily: 'mali', } }}
                        label="ใส่ชื่อจังหวัด"
                        fullWidth
                        multiline
                        value={values.location}
                        onChange={handleInputChange}
                        {...(errors.location && { error: true, helperText: errors.location })}
                    />
                </Grid>


                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    className={classes.postBtn}

                >โพสต์</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={closeEdit}
                    className={classes.postBtn1}

                >ยกเลิก</Button>
            </form>
        );
    }

}


const mapStateToProps = state => ({
    postPanjaiList: state.postPanjai.list
})

const mapActionToProps = {
    createPostPanjai: actions.create,
    updatePostPanjai: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjaiForm));



// const defaultImageSrc = '/img/image-1609160068242.jpg'

// const initialFieldValues = {

//     title: "",
//     message: "",
//     contect: "",
//     location: "",
//     image: null,
//     imageSrc: defaultImageSrc
// }

// const styles = theme => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1)
//         },
//     },
//     form: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center'
//     },
//     postBtn: {
//         width: "50%"
//     }
// })

// const PostPanjaiForm = ({ classes, ...props }) => {

//     const [file, setFile] = useState('');
//     //const [progress, setProgess] = useState(0);


//     useEffect(() => {
//         if (props.currentId != 0) {
//             setValues({
//                 ...props.postPanjaiList.find(x => x._id == props.currentId)
//             })
//             setErrors({})
//         }
//     }, [props.currentId])

//     const validate = () => {
//         let temp = { ...errors }
//         temp.title = values.title ? "" : "กรุณาใส่ข้อมูล."
//         temp.message = values.message ? "" : "กรุณาใส่ข้อมูล."
//         temp.contect = values.contect ? "" : "กรุณาใส่ข้อมูล."
//         temp.location = values.location ? "" : "กรุณาใส่ข้อมูล."
//         setErrors({
//             ...temp
//         })
//         return Object.values(temp).every(x => x == "")
//     }

//     // const handleSubmit = e => {
//     //     e.preventDefault()
//     //     const onSuccess = () => {
//     //         ButterToast.raise({
//     //             content: <Cinnamon.Crisp title="ตู้ปันใจ"
//     //                 content="Submitted successfully"
//     //                 scheme={Cinnamon.Crisp.SCHEME_PURPLE}
//     //                 icon={<AssignmentTurnedIn />}
//     //             />
//     //         })
//     //         resetForm()
//     //     }
//     //     if (validate()) {
//     //         if (props.currentId == 0)
//     //             props.createPostPanjai(values, onSuccess)
//     //         else
//     //             props.updatePostPanjai(props.currentId, values, onSuccess)
//     //     }
//     // }

//     const showPreview = e => {
//         if (e.target.files && e.target.files[0]) {
//             setFile(e.target.files[0]);
//             console.log(file);
//             // const reader = new FileReader();
//             // reader.onload = x => {
//             //     setValues({
//             //         ...values,
//             //         imageFile,
//             //         imageSrc: x.target.result
//             //     })
//             // }
//             // reader.readAsDataURL(imageFile)
//         }
//         else {
//             let ima = defaultImageSrc
//             setFile(ima
//                 // {
//                 // ...values,
//                 // imageFile: null,
//                 // imageSrc: defaultImageSrc
//                 // }
//             )
//         }
//     }

//     // const el = useRef();

//     // const handleChange = (e) => {
//     //     setProgess(0)
//     //     const file = e.target.files[0]; // accessing file
//     //     console.log(file);
//     //     setFile(file); // storing file
//     // }

//     var {
//         values,
//         setValues,
//         errors,
//         setErrors,
//         handleInputChange,
//         resetForm
//     } = useForm(initialFieldValues, props.setCurrentId)

//     const uploadFile = e => {
//         e.preventDefault()
//         const onSuccess = () => {
//             ButterToast.raise({
//                 content: <Cinnamon.Crisp title="ตู้ปันใจ"
//                     content="Submitted successfully"
//                     scheme={Cinnamon.Crisp.SCHEME_PURPLE}
//                     icon={<AssignmentTurnedIn />}
//                 />
//             })
//             resetForm()
//         }
//         if (validate()) {
//             if (props.currentId == 0) {
//                 const formData = new FormData();
//                 formData.append('image', file); // appending file
//                 formData.append('title', values.title);
//                 formData.append('message', values.message);
//                 formData.append('contect', values.contect);
//                 formData.append('location', values.location);
//                 props.createPostPanjai(formData, onSuccess) //ส่งค่าไปserver
//             } else
//                 props.updatePostPanjai(props.currentId, values, onSuccess)
//         }

//         // const formData = new FormData();
//         // formData.append('image', file); // appending file
//         // formData.append('title', values.title);
//         // formData.append('message', values.message);
//         // formData.append('contect', values.contect);
//         // formData.append('location', values.location);

//         // props.createPostPanjai(formData, onSuccess) //ส่งค่าไปserver

//         // axios.post('http://localhost:3001/Too-Panjai', formData, {
//         //     onUploadProgress: (ProgressEvent) => {
//         //         let progress = Math.round(
//         //         ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
//         //         //setProgess(progress);
//         //     }
//         // }).then(res => {
//         //     console.log(res);
//         // }).catch(err => console.log(err))

//     }



//     return (

//         <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
//             onSubmit={uploadFile}>
//             {/* <img src={values.imageSrc} className='card-img-top' /> */}

//             <input type='file'
//                 accept='image/*'
//                 className="form-control-file"
//                 value={values.image}
//                 onChange={showPreview}
//                 id="image-uploader"
//             />

//             <TextField
//                 name="title"
//                 variant="outlined"
//                 label="ชื่อ"
//                 fullWidth
//                 value={values.title}
//                 onChange={handleInputChange}
//                 {...(errors.title && { error: true, helperText: errors.title })}
//             />
//             <TextField
//                 name="message"
//                 variant="outlined"
//                 label="ข้อมูล"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 value={values.message}
//                 onChange={handleInputChange}
//                 {...(errors.message && { error: true, helperText: errors.message })}
//             />
//             <TextField
//                 name="contect"
//                 variant="outlined"
//                 label="เบอร์โทรศัพท์"
//                 fullWidth
//                 multiline
//                 value={values.contect}
//                 onChange={handleInputChange}
//                 {...(errors.contect && { error: true, helperText: errors.contect })}
//             />
//             <TextField
//                 name="location"
//                 variant="outlined"
//                 label="ใส่ชื่อจังหวัด"
//                 fullWidth
//                 multiline
//                 value={values.location}
//                 onChange={handleInputChange}
//                 {...(errors.contect && { error: true, helperText: errors.contect })}
//             />
//             <Button
//                 //onClick={uploadFile}
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 type="submit"
//                 className={classes.postBtn}
//             >โพสต์</Button>

//         </form>

//     );
// }


// const mapStateToProps = state => ({
//     postPanjaiList: state.postPanjai.list
// })

// const mapActionToProps = {
//     createPostPanjai: actions.create,
//     updatePostPanjai: actions.update
// }

// export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostPanjaiForm));

// const defaultImageSrc = '/img/image-1609160068242.jpg'

// const initialFieldValues = {
//     title: '',
//     message: '',
//     contect: '',
//     location: '',
//     imageFile: null,
//     imageSrc: defaultImageSrc
// }

// export default function PostPanjai(props) {

//     const [values, setValues] = useState(initialFieldValues)
//     const [errors, setErrors] = useState({})
//     const [file, setFile] = useState('');

//     const handleInputChange = e => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: values
//         })
//     }

//     const showPreview = e => {
//         if (e.target.files && e.target.files[0]) {
//             let imageFile = e.target.files[0];
//             console.log(imageFile);
//             setFile(file); 
//             // const reader = new FileReader();
//             // reader.onload = x => {
//             //     setValues({
//             //         ...values,
//             //         imageFile,
//             //         imageSrc: x.target.result
//             //     })
//             // }
//             // reader.readAsDataURL(imageFile)
//         }
//         else {
//             // setValues({
//             //     ...values,
//             //     imageFile: null,
//             //     imageSrc: defaultImageSrc
//             // })
//         }
//     }

//     const validate = () => {
//         let temp = {}
//         temp.title = values.title == "" ? false : true;
//         temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
//         setErrors(temp)
//         return Object.values(temp).every(x => x == true)
//     }

//     const resetForm = () => {
//         setValues(initialFieldValues)
//         document.getElementById('image-uploader').value = null;
//         setErrors({})
//     }

//     const handleFormSubmit = e => {
//         e.preventDefault()
//         if (validate()) {
//             const formData = new FormData()
//             formData.append('title', values.title)
//             formData.append('message', values.message)
//             formData.append('contect', values.contect)
//             formData.append('location', values.location)
//             formData.append('image', values.imageFile)

//             axios.post('http://localhost:3001/Too-Panjai', formData, {
//                 onUploadProgress: (ProgressEvent) => {
//                     let progress = Math.round(
//                         ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
//                     //setProgess(progress);
//                 }
//             })
//         }

//     }

//     const applyErrorClass = field => ((field in errors && errors[field] == false) ? '   invalid-field' : ''); //cssในindex.css

//     return (
//         <>
//             <div className="container test-center">
//                 <p className='lead'>POST</p>
//             </div>
//             <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
//                 <div className="card">
//                     <img src={values.imageSrc} className='card-img-top' />
//                     <div className="card-body">
//                         <div className='form-group'>
//                             <input
//                                 type='file'
//                                 accept='image/*'
//                                 className={"form-control-file"}
//                                 onChange={showPreview} id="image-uploader" />
//                         </div>

//                         <div className='form-group'>
//                             <input
//                                 className="form-control"
//                                 placeholder='ชื่อ'
//                                 name='title'
//                                 value={values.title}
//                                 onChange={handleInputChange} />
//                         </div>

//                         <div className="form-group">
//                             <input
//                                 className="form-control"
//                                 placeholder="ข้อมูล"
//                                 name='message'
//                                 value={values.message}
//                                 onChange={handleInputChange} />
//                         </div>

//                         <div className="form-group">
//                             <input
//                                 className="form-control"
//                                 placeholder="เบอร์โทรศัพท์" name='contect'
//                                 value={values.contect}
//                                 onChange={handleInputChange} />
//                         </div>

//                         <div className="form-group">
//                             <input
//                                 className="form-control"
//                                 placeholder="จังหวัด"
//                                 name='location'
//                                 value={values.location}
//                                 onChange={handleInputChange} />
//                         </div>

//                         <div className='form-group text-center'>
//                             <button
//                                 type='submit'
//                                 className='btn btn-light'>submit</button>
//                         </div>

//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }


// export default function FileUpload() {

//     const [file, setFile] = useState(''); // storing the uploaded file

//     const [progress, setProgess] = useState(0); // progess bar
//     const el = useRef(); // accesing input element

//     const handleChange = (e) => {
//         const file = e.target.files[0]; // accessing file
//         console.log(file);
//         setFile(file); // storing file
//     }

//     const uploadFile = () => {
//         const formData = new FormData();
//         formData.append('image', file); // appending file
//         axios.post('http://localhost:3001/Too-Panjai', formData, {
//             onUploadProgress: (ProgressEvent) => {
//                 let progress = Math.round(
//                 ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
//             }
//         }).then(res => {
//             console.log(res);
//         })
//     }

//     return (
//         <div>
//             <div className="file-upload">
//                 <input type="file" ref={el} onChange={handleChange} />

//                 <button onClick={uploadFile} className="upbutton">
//                    Upload
//                 </button>
//             <hr />


//             </div>
//         </div>
//     );
// }

// export default FileUpload;

