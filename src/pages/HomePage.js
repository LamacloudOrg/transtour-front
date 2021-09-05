import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu'
import Home from '../components/Home'

class HomePage extends Component {
    render(){

        const { history } = this.props;
        const token = localStorage.getItem("token")
        if (!token) {   history.push("/") }

        return (
        
            <>
            <Menu>
            <Home />
            </Menu>            
            </>
        )
    }
}

export default HomePage;