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
import Navbar from "./components/Navbar/Navbar";  
import Footer from "./components/footer/footer";  
import Profile from "./pages/userInformation";
import register from "./pages/register";
import Foundation from './pages/Foundation';
import Noti1 from "./components/Noti1/Noti1";
import search from './pages/searchResult';
import favorite from './pages/myfavorite';
import About from "./components/aboutus/aboutus";

// import category from './components/category/category';
import category from './pages/Category';
import Categoryshow from './pages/Categoryshow';
import { Category } from '@material-ui/icons';
import ShowFDT from './pages/FDTShow';
// import ShowFDT from './components/foundation/ShowFDT';
// import PrivateRoute from 'react-private-route'


function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={register}/>
        <Route path="/Too_panjai" component={Too_panjai}/>
        {/* <PrivateRoute   isAuthenticated={isLoggedIn()} path="/Too_panjai" component={Too_panjai}/> */}
        {/* <Route exact path="/Foundation/:id" component={ShowFDT}/>
        <Route path="/Foundation" component={Foundation}/> */}
        <Route path="/profile/:id" component={Profile}/>
        <Route path="/notification" component={Noti1}/>
        <Route path="/Foundation/:name/:id" component={Categoryshow}/> 
        <Route path="/Foundation/:name" component={category}/>
        <Route path="/searchResult" component={search}/>
        <Route path="/myfav" component={favorite}/>
        <Route path="/aboutus" component={About}/>
        
    
      </Switch>
      {/* <Footer /> */}
    </Router>
    
  );
}

export default App;
