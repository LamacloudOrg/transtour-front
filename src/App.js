
import React, { Component } from 'react';
import { connect } from "react-redux";
import Routes from './routes/Routes'
class App extends Component {

	render() {
		console.log(process.env)
		return (
			<Routes/>
        )
    }
}

export default connect()(App);