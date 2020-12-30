import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import { Link, Redirect } from 'react-router-dom';
import FileUpload from "../components/FileUpload";



function Register() {
/*------------------------------------------------------------*/
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");
    const [file, setFile] = useState("");
    console.log(file)

    const addUser = () => {
        const fd = new FormData();
        const image = file
        fd.append('image',file, file.name);
        console.log(fd)
        Axios.post('http://localhost:3001/authenticate/register',{
        username: username,
        password: password,
        CPassword: CPassword,
        content: image
        })
    }

    // const onPasswordIncorrect = () => {
    //     window.confirm('Confirm password incorrect!')
    //     // ButterToast.raise({
    //     //     content: <Cinnamon.Crisp title="Register"
    //     //         content="Confirm password incorrect!!"
    //     //         scheme={Cinnamon.Crisp.SCHEME_PURPLE}
    //     //         icon={<DeleteSweep />}
    //     //     />
    //     // })
    // }

    const onPasswordIncorrect = () => {
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="ตู้ปันใจ"
                    content="Deleted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<DeleteSweep />}
                />
            })
        }
    }

    const Submit = () =>{
        if (password !== CPassword){
            window.alert('Confirm password incorrect!')
            return <Redirect to="/register"></Redirect>
        }
        else{
            //window.alert('Welcome!')
            addUser()
        //     return(
                
        //     )
        }
    }
/*-----------------------------------------------------------*/
    return (
        <div className="container">
        <h1>Register</h1>
        <h6>Please register.</h6>
        <div>
            <form>
                <div>
                    <label>Username:</label>
                    <input
                    type="text"
                    name="Username"
                    placeholder="Enter name"
                    onChange={(event) =>{
                        setUsername(event.target.value)
                    }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    type="password"
                    name="Password"
                    placeholder="Enter Password"
                    onChange={(event) =>{
                        setPassword(event.target.value)
                    }}
                    />
                </div>
                <div>
                    <label>Confirm password:</label>
                    <input
                    type="password"
                    name="CPassword"
                    placeholder="Enter Password"
                    onChange={(event) =>{
                        setCPassword(event.target.value)
                    }}
                    />
                </div>
                <div>
                    <FileUpload/>
                </div>
                <div>
                    <button onClick={Submit}>Register</button>
                </div>
            </form>
        </div>
        </div>
    )
}
// function App() {
// /*-----------------------------------------------------------*/
//   const [userList, setUserList] = useState([]);
//   const getUsers = () =>{
//     Axios.get('http://localhost:3001/user').then((response) =>{
//       setUserList(response.data)
//     });
//   }
// /*-----------------------------------------------------------*/
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [CPassword, setCPassword] = useState("");

//   const addUser = () => {
//     Axios.post('http://localhost:3001/createUser',{
//       username: username,
//       password: password,
//       CPassword: CPassword 
//     }).then(() => {
//       setUserList([
//         ...userList,
//         {
//           username: username,
//           password: password,
//           CPassword: CPassword 
//         }
//       ])
//     })
//   }
// /*-----------------------------------------------------------*/
// const [newUsername, setNewUsername] = useState("");

// const updateUser = (id) => {
//   Axios.put("http://localhost:3001/userUpdate", { username: newUsername, id: id }).then((response) => {
//       setUserList(
//         userList.map((val) => {
//           return val._id == id
//             ? {
//                 username: newUsername
//               }
//             : val;
//         })
//       );
//     }
//   );
// };
// /*-----------------------------------------------------------*/
// const removeUser = (Pid) => {
//   Axios.delete('http://localhost:3001/userRemove/'+Pid).then((response) => {
//       console.log(Pid)
//       setUserList(
//         userList.filter((val) =>{
//           return val._id != Pid;
//         })
//       );
//     }
//   );
// };
// /*-----------------------------------------------------------*/
//   return (
//     <div className="App1 container">
//       <h1>User information</h1>
//       <div>
//         <form>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               name="Username"
//               placeholder="Enter name"
//               onChange={(event) =>{
//                 setUsername(event.target.value)
//               }}
//               >
//             </input>
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="text"
//               name="Password"
//               placeholder="Enter Password"
//               onChange={(event) =>{
//                 setPassword(event.target.value)
//               }}
//               >
//             </input>
//           </div>
//           <div>
//             <label>Comfirm Password:</label>
//             <input
//               type="text"
//               name="CPassword"
//               placeholder="Comfirm Password"
//               onChange={(event) =>{
//                 setCPassword(event.target.value)
//               }}
//               >
//             </input>
//           </div>
//           <div>
//             <button onClick={addUser}>Register</button>
//           </div>
//         </form>
//         <div>
//           <button onClick={getUsers}>Show Users</button>

//           {userList.map((val, key) => {
//             return(
//               <div className="card">
//                 <p>Username: {val.username}</p>
//                 <div>
//                   <input type='text'
//                     placeholder="New username"
//                     onChange={(event) => {
//                       setNewUsername(event.target.value)
//                     }}
//                   >
//                   </input>
//                   <button onClick={() => {updateUser(val._id)}}>Update</button>
//                   <button onClick={() => {removeUser(val._id)}}>Remove</button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

export default Register;