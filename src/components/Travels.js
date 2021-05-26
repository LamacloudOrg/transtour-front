import React, { Component} from 'react';
import { connect } from "react-redux";
import { travelAll,aprove } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

class  Travels extends Component {

    constructor(props) {
		super(props);
        this.aprove.bind(this);
        this.reject.bind(this);
        
	}

   componentDidMount = () => {
       this.props.loadTravels();
   }

   aprove=(orderNumber)=>{
    this.props.aproveTravel(orderNumber)
   }

   reject=(orderNumber)=>{
    console.log("desahutorizado")
   }


    render() {
        return(
          <>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">orderNumber</th>
                <th scope="col">Passenger</th>
                <th scope="col">Chofer</th>
                <th scope="col">Origin</th>
                <th scope="col">Destiny</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
            
              
                { this.props.travels && this.props.travels.map(element =>
                (
                    <tr key={element.orderNumber}>
                    <th scope="row"></th>
                    <td>{element.orderNumber}</td>
                    <td>{element.passenger}</td>
                    <td>{element.carDriver}</td>
                    <td>{element.originAddress}</td>
                    <td>{element.destinyAddress}</td>
                    <td>{element.dateCreated}</td>
                    <td>{element.time}</td>
                    <td>{element.status}</td>

                    <td> <button  className="btn btn-primary" onClick={()=>this.aprove(element.orderNumber)}>aprove</button> </td>
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
        aproveTravel: (orderNumber) => dispatch(aprove(orderNumber)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Travels)