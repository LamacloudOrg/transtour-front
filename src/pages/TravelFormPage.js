import React, { Component } from 'react';
import Menu from '../components/Menu'
import TravelForm from '../Form/TravelForm'


class TravelFormPage extends Component {
    render(){

        const { history } = this.props;
        const token = localStorage.getItem("token")
        if (!token) {   history.push("/") }

        return (
            <Menu>
                <TravelForm/>
            </Menu>
        )
    }
}

export default TravelFormPage;