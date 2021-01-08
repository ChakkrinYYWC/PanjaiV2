import React, { useEffect, useState, Component, useRef } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../../action/postPanjai";
import ButterToast, { Cinnamon } from "butter-toast";
import { AssignmentTurnedIn } from "@material-ui/icons";
import axios from 'axios'

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

const defaultImageSrc = '/img/image-1609160068242.jpg'

const initialFieldValues = {
    title: '',
    message: '',
    contect: '',
    location: '',
    image: null,
    imageSrc: defaultImageSrc
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
    },
    test: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
})

const PostPanjaiForm = ({ classes, ...props }) => {

    const [file, setFile] = useState('');
    const el = useRef();
    const [progress, setProgess] = useState(0);


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

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     const onSuccess = () => {
    //         ButterToast.raise({
    //             content: <Cinnamon.Crisp title="ตู้ปันใจ"
    //                 content="Submitted successfully"
    //                 scheme={Cinnamon.Crisp.SCHEME_PURPLE}
    //                 icon={<AssignmentTurnedIn />}
    //             />
    //         })
    //         resetForm()
    //     }
    //     if (validate()) {
    //         if (props.currentId == 0)
    //             // {
    //             //     const formData = new FormData()
    //             //     formData.append('title', values.title)
    //             //     formData.append('message', values.message)
    //             //     formData.append('contect', values.contect)
    //             //     formData.append('location', values.location)
    //             //     formData.append('imageFile', values.imageFile)
    //             //     props.createPostPanjai(formData, onSuccess)
    //             // }
    //             props.createPostPanjai(values, onSuccess)
    //         else
    //             props.updatePostPanjai(props.currentId, values, onSuccess)
    //     }
    // }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, props.setCurrentId)

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            console.log(file);
            // const reader = new FileReader();
            // reader.onload = x => {
            //     setValues({
            //         ...values,
            //         imageFile,
            //         imageSrc: x.target.result
            //     })
            // }
            // reader.readAsDataURL(imageFile)
        }
        else {
            let ima = defaultImageSrc
            setFile(ima
                // {
                // ...values,
                // imageFile: null,
                // imageSrc: defaultImageSrc
                // }
            )
        }
    }

    // const el = useRef();
    // const [file, setFile, data] = useState();
    // const [progress, setProgess] = useState(0);

    // const handleChange = (e) => {
    //     setProgess(0)
    //     const file = e.target.files[0]; // accessing file
    //     console.log(file);
    //     setFile(file); // storing file
    // }

    const uploadFile = e => {
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

        const formData = new FormData();
        formData.append('image', file); // appending file
        formData.append('title', values.title);
        formData.append('message', values.message);
        formData.append('contect', values.contect);
        formData.append('location', values.location);

        props.createPostPanjai(formData, onSuccess) //ส่งค่าไปserver

        // axios.post('http://localhost:3001/Too-Panjai', formData, {
        //     onUploadProgress: (ProgressEvent) => {
        //         let progress = Math.round(
        //         ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        //         //setProgess(progress);
        //     }
        // }).then(res => {
        //     console.log(res);
        // }).catch(err => console.log(err))

    }

    return (
        <div>

            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
                onSubmit={uploadFile}
            >
                {/* <img src={values.imageSrc} className='card-img-top' /> */}
                
                <input type='file'
                    accept='image/*'
                    className="form-control-file"
                    value={values.image}
                    onChange={showPreview}
                    id="image-uploader"
                />

                <TextField
                    name="title"
                    variant="outlined"
                    label="ชื่อ"
                    fullWidth
                    value={values.title}
                    onChange={handleInputChange}
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
                />
                <TextField
                    name="contect"
                    variant="outlined"
                    label="เบอร์โทรศัพท์"
                    fullWidth
                    multiline
                    value={values.contect}
                    onChange={handleInputChange}
                />
                <TextField
                    name="location"
                    variant="outlined"
                    label="ใส่ชื่อจังหวัด"
                    fullWidth
                    multiline
                    value={values.location}
                    onChange={handleInputChange}
                />
                <Button
                    //onClick={uploadFile}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    className={classes.postBtn}
                >โพสต์</Button>

            </form>
        </div>
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

// function PostPanjaiForm() {
//     const [file, setFile] = useState("");
//     const [titel, setTitel] = useState("");
//     const [message, setMessage] = useState("");
//     const [contect, setContect] = useState("");
//     const [location, setLocation] = useState("");
//     const el = useRef();


//     const [errors, setErrors] = useState({})


//     const postForm = () => {
//         axios.post('http://localhost:3001/Too-Panjai/create', {

//             title: titel,
//             message: message,
//             contect: contect,
//             location: location,
//             image: file,

//         })
//     }

//     const uploadFile = () => {
//                 const formData = new FormData();
//                 formData.append('image', file); // appending file

//                 axios.post('http://localhost:3001/Too-Panjai', formData, {
//                     title: titel,
//                     message: message,
//                     contect: contect,
//                     location: location,
//                     onUploadProgress: (ProgressEvent) => {
//                         let progress = Math.round(
//                             ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
//                         setProgess(progress);
//                     }
//                 }).then(res => {
//                     console.log(res);
//                 }).catch(err => console.log(err))
//             }

//     return (
//         <form>

//             <input
//                 name="title"
//                 type="file"
//                 onChange={(e) => {
//                     const file = e.target.files[0];
//                     console.log(file);
//                     setFile(file);
//                 }}
//             />

//             <TextField
//                 name="title"
//                 variant="outlined"
//                 label="ชื่อ"
//                 fullWidth
//                 onChange={(e) => {
//                     const title = e.target.value;
//                     console.log(title);
//                     setTitel(title);
//                 }}
//             />
//             <TextField
//                 name="message"
//                 variant="outlined"
//                 label="ข้อมูล"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 onChange={(e) => {
//                     const message = e.target.value;
//                     console.log(message);
//                     setMessage(message);
//                 }}
//             />
//             <TextField
//                 name="contect"
//                 variant="outlined"
//                 label="เบอร์โทรศัพท์"
//                 fullWidth
//                 multiline
//                 onChange={(e) => {
//                     const con = e.target.value;
//                     console.log(con);
//                     setContect(con);
//                 }}
//             />
//             <TextField
//                 name="location"
//                 variant="outlined"
//                 label="ใส่ชื่อจังหวัด"
//                 fullWidth
//                 multiline
//                 onChange={(e) => {
//                     const loca = e.target.value;
//                     console.log(loca);
//                     setLocation(loca);
//                 }}
//             />
//             <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 type="submit"
//                 onClick={uploadFile}
//             >โพสต์</Button>

//         </form>

//     );

// }

// export default PostPanjaiForm;