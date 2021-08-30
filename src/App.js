
import React, { Component } from 'react';
import { connect } from "react-redux";
import Routes from './routes/Routes'
import css from './css/App.scss'

class App extends Component {

	render() {
		return (
			<Routes/>
        )
    }
}

export default connect()(App);