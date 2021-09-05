import React, { Component } from 'react';
import Menu from '../components/Menu'
import TravelDetail from '../components/TravelDetail';


class TravelInfoPage extends Component {
    render(){

        const { history } = this.props;
        const token = localStorage.getItem("token")
        if (!token) {   history.push("/") }

        return (
            <Menu>
                <TravelDetail/>
            </Menu>
        )
    }
}

export default TravelInfoPage;