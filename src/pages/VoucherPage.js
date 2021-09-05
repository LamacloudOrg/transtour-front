import React, { Component } from 'react';
import Menu from '../components/Menu'
import Vouchers from '../components/Vouchers'


class TravelPage extends Component {
    render(){

        const { history } = this.props;
        const token = localStorage.getItem("token")
        if (!token) {   history.push("/") }
        return (

                <Menu >
                <Vouchers />
                </Menu>

        )
    }
}

export default TravelPage;