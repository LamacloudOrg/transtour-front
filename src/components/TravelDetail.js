import React, { Component} from 'react';
import { connect } from "react-redux";
import  {withRouter  } from 'react-router-dom';
import { aprove } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';


class  TravelDetail extends Component {

    constructor(props) {
		super(props);
        this.toUpperCase.bind(this);
        this.concat.bind(this);
        this.isAproved.bind(this);
        this.back.bind(this);

        this.setState({
            status:''
        })
	}

    componentWillMount = () => {

       // console.log(this.props)
       // console.log("props location",this.props.location)
        const {state} = this.props.location

       // console.log("state",state)
        const {detail} = state
        this.setState({
            status : detail.status
        })
    }

    toUpperCase=(name)=>{
        return name.toUpperCase()
    }

    concat=(val1,val2)=>{
        return val1 + " : "+ val2
    }

    isAproved=(status)=>{
       if (status.toString().toUpperCase() == "APROVED") return null;
       else return "ok";
    }

    back=()=>{
        this.props.history.goBack();
    }

    aprove = (orderNumber)=>{
        this.props.aproveTravel(orderNumber);
        this.setState({
            status:'APROVED'
        })
    }

    render() {
        //console.log(this.props)
        //console.log("props location",this.props.location)
        const {state} = this.props.location


        if ( state === undefined) this.props.history.goBack();
        //console.log("state",state)
        const {detail} = state

        //console.log("detail",detail)

        if (!detail) this.props.history.goBack();

        return(
        <div className="containter">
                <div className="row align-items-center h-100" >
                <div className="col-8 mx-auto">
                <div className="jumbotron">
                <form> 
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled value={this.concat("Order Number", detail.orderNumber )} />
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("Passenger", this.toUpperCase(detail.passengerName) )} />
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("Date", detail.dateCreated + " " +detail.time  )} />
       

                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("Driver",detail.carDriverName + "(" + detail.carDriver +")" )} />
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("car", this.toUpperCase(detail.car) )} />
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("Company", detail.company )} />
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("Origin", detail.originAddress )} />
                    <input className="col-12 text-center bg-gradient-primary text-dark" type="text" disabled  value={this.concat("Destiny", detail.destinyAddress )} />
               
                    
                    <input className="col-12 text-center bg-gradient-primary text-warning" type="text" disabled  value={this.concat("Status", this.state.status )} />
                    <br/>
                    {
                        this.isAproved(this.state.status) &&
                        <div>
                        <button type="button" className="col-4 text-center btn btn-primary" onClick={()=>this.aprove(detail.orderNumber)}>aprove</button>
                        <button type="button" className="col-4 text-center btn btn-primary">desaprove</button>
                        <button type="button" className="col-4 text-center btn btn-primary" onClick={()=>this.back()}>back</button>
                        </div>
                    }
                    {
                        !this.isAproved(this.state.status) &&
                        <div>
                        <button type="button" className="col-12 text-center btn btn-primary" onClick={()=>this.back()}>back</button>
                        </div>
                    }
                </form>
                </div>
                </div>
                </div>
        </div>
)};

}



const mapDispatchToProps = dispatch => {
	return {
		aproveTravel: (orderNumber) => dispatch(aprove(orderNumber))
	};
};

export default connect(null, mapDispatchToProps)(withRouter(TravelDetail))
