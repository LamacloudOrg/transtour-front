import React, { Component } from 'react';
import Menu from '../components/Menu'
import Travels from '../components/Travels'


class TravelPage extends Component {
    render(){

        const { history } = this.props;
        const token = localStorage.getItem("token")
        if (!token) {   history.push("/") }

        return (
            <Menu>
                <Travels/>
            </Menu>
        )
    }
}

export default TravelPage;