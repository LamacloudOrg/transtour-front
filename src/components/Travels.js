import React, { Component, useEffect} from 'react';
import { connect } from "react-redux";
import { travelAll } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

class  Travels extends Component {

    constructor(props) {
		super(props);
	}

   componentDidMount = (dispatch) => {
        this.props.loadTravels();	
    }



    render() {
        console.log(this.props);
        return(
          <>
            
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Passenger</th>
                <th scope="col">Chofer</th>
                <th scope="col">Origin</th>
                <th scope="col">Destiny</th>
                <th scope="col">Car</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">
                {this.props.state.travels.map(element =>
                (
                    <>
                    <td>{element.pasajero}</td>
                    <td>{element.chofer}</td>
                    <td>{element.conductor}</td>
                    <td>{element.hora}</td>
                    </>
                )    
            )}
            </th>
            </tr>
            </tbody>

            </table>
            
          </>

)};

}


const mapStateToProps = (state) => {

    console.log("state redux",state)
	return {
		travels: state.travels || []
	};
}

const mapDispatchToProps = dispatch => {
	return {
		loadTravels: () => dispatch(travelAll()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Travels)