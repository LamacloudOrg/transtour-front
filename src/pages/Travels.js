import React, { Component } from 'react';
import Menu from '../components/Menu'
import Travels from '../components/Travels'


class Travels extends Component {
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
                    <Travels />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;