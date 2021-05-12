import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelForm from '../Form/TravelForm'

class Home extends Component {
    render(){
        return (
            <div className="container">
                Home principal
                <div className="row">
                <TravelForm />
                </div>
            </div>
        )
    }
}

export default Home;