import React, { Component, useEffect} from 'react';
import { connect } from "react-redux";
import { travelAll } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

class  Travels extends Component {

    constructor(props) {
		super(props);

	}

   componentDidMount = () => {
       this.props.loadTravels();
   }

    render() {
        const origin ="calle 4"
        return(
          <>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">id</th>
                <th scope="col">Passenger</th>
                <th scope="col">Chofer</th>
                <th scope="col">Origin</th>
                <th scope="col">Destiny</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                </tr>
            </thead>
            <tbody>
            
              
                { this.props.travels && this.props.travels.map(element =>
                (
                    <tr>
                    <th scope="row"></th>
                    <td>{element.id}</td>
                    <td>{element.pasajero}</td>
                    <td>{element.chofer}</td>
                    <td> {origin}</td>
                    <td>{element.direccion}</td>
                    <td>{element.fecha}</td>
                    <td>{element.hora}</td>
                    </tr>
                )    
            )}
            </tbody>

            </table>
          </>

)};

}


const mapStateToProps = (state) => {

    const { travels,isLoading} = state.travelReducer
    console.log("travels",travels)
	return {
		travels: travels.content || [],
        loading: isLoading
	};
}

const mapDispatchToProps = dispatch => {
	return {
		loadTravels: () => dispatch(travelAll()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Travels)