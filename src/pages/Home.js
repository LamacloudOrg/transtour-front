import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelForm from '../components/Travel'
import Menu from '../components/Menu'

class Home extends Component {
    render(){

        const { history } = this.props;
        const token = localStorage.getItem("token")
        if (!token) {   history.push("/") }

        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-2">
                    <Menu />
                    </div>
                    <div className="col-9">
                    <TravelForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;