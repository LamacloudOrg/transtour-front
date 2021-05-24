import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {withRouter  } from 'react-router-dom';
import '../css/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Menu extends Component {


  render() {

    const handleLogout=()=>{
        localStorage.removeItem("token");
    }

    return (
   
        <div className="main-menu">
            <nav class="navbar bg-light">

            <ul class="navbar-nav">
            <li class="nav-item">
            <Link to="/home"><a class="nav-link" >create</a></Link>
            </li>
            <li class="nav-item">
            <Link to="/travels"><a class="nav-link" >travels</a></Link>
            </li>
            <li class="nav-item">
            <Link to="/search"><a class="nav-link" >search</a></Link>
            </li>

            <li class="nav-item">
            <Link to="/"><a class="nav-link" onClick={()=>handleLogout()}>logout</a></Link>
            </li>
            </ul>

            </nav>
        </div>
    
    )
  } 
}

export default withRouter(Menu);