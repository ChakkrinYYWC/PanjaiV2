import './App.css';

import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from "react-router-dom";

//pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Too_panjai from "./pages/Too-panjai";
import Navbar from "./components/Navbar/Navbar";  //forth
import Profile from "./pages/userInformation"; //june
import register from "./pages/register";
import Foundation from './pages/Foundation';
import category from './components/category/category';
import categoryshow from './components/category/categoryshow';
import { Category } from '@material-ui/icons';

import ShowFDT from './pages/FDTShow';
// import ShowFDT from './components/foundation/ShowFDT';
import PrivateRoute from 'react-private-route'

function App() {
  return (
    <Router>
    <Navbar></Navbar>
      <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={register}/>
        <Route path="/Too_panjai" component={Too_panjai}/>
        {/* <PrivateRoute   isAuthenticated={isLoggedIn()} path="/Too_panjai" component={Too_panjai}/> */}
        {/* <Route exact path="/Foundation/:id" component={ShowFDT}/>
        <Route path="/Foundation" component={Foundation}/> */}
        <Route path="/profile" component={Profile}/>
        <Route path="/Foundation/:name/:id" component={categoryshow}/>
        <Route path="/Foundation/:name" component={category}/>
      </Switch>
    </Router>
  );
}

export default App;
