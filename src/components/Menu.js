import React, { Component } from 'react';
import  {withRouter  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBarMenu from './SideBarMenu';
import Footer from './Footer';
import menuCss from '../css/Menu.scss'
import Header from './Header';



class Menu extends Component {


  render() {

    return (

        <>
        <Header/>
        <div id="page-content-wrapper">
        <div className="container-fluid">
            <div className="row">
                <SideBarMenu/>
                <div className="col-9">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        </div>

        </div>

        </>
    
    )
  } 
}

export default withRouter(Menu);