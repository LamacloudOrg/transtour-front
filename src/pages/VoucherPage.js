import React, { Component } from 'react';
import Menu from '../components/Menu'
import Vouchers from '../components/Vouchers'


class TravelPage extends Component {
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
                    <Vouchers />
                    </div>
                </div>
            </div>
        )
    }
}

export default TravelPage;