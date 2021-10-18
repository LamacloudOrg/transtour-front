import React, { Component} from 'react';
import { connect } from "react-redux";
import { travelAll } from "../redux/actions";
import  {withRouter  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import lupa from '../images/lupa.png';
import pencil from '../images/pencil.png';
import pulgar from '../images/pulgar-arriba.jpg'

class  Travels extends Component {

    constructor(props) {
		super(props);
        this.toUpperCase.bind(this);
        this.isAproved.bind(this);
        this.loadInfo.bind(this);
        
        this.state = {
            isLoading:true
        }
      
	}

   componentWillMount = () => {
       this.props.loadTravels();
   }

   componentDidMount = ()=>{
        this.setState({
            isLoading:false
        })
   }

   toUpperCase=(name)=>{
    return name.toUpperCase()
   }

   isAproved=(status)=>{
    if (status.toString().toUpperCase() == "APROVED") return null;
    else return "ok";
    }


   loadInfo=(travel)=>{
    console.log("load info")
    this.props.history.push({
        pathname: '/travel/info',
        state: { detail: travel }
      })
   }

    

    render() {
        
        return(

            <>
            {
                this.state.isLoading &&
                <h1>loading</h1>
            }
            {
                !this.state.isLoading &&
                <div className="containter">    
                <div className="row align-items-center">
                <div className="col-8 mx-auto">
                <div className="jumbotron">  
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">orderNumber</th>
                    <th scope="col">Passenger</th>
                    <th scope="col">Date</th>
                    <th scope="col" >Hour</th>
                    <th scope="col">See</th>
                    <th scope="col" id="edit">Edit</th>
    
                    </tr>
                </thead>
                <tbody>
                
                  
                    { this.props.travels && this.props.travels.map(element =>
                    (
                        <tr key={element.orderNumber}>
                        <th scope="row"></th>
                        <td>{element.orderNumber}</td>
                        <td>{this.toUpperCase(element.passenger)}</td>
                        <td>{element.dateCreated}</td>
                        <td>{element.time}</td>
                        <td><a onClick={()=>this.loadInfo(element)}><img 
                        src={lupa} alt="lupa"
                        style={{
                            width: '20px',
                            height: '20px',
                            objectFit:'cover'
    
                        }}
                        /> </a></td>
                        {this.isAproved(element.status) &&
                        <td><a>
                        <img 
                        src={pencil} alt="edit"
                        style={{
                            width: '20px',
                            height: '20px',
                            objectFit:'cover'
    
                        }}
                        />
                        </a></td>
                        }
                        {!this.isAproved(element.status) &&
                        <td><a>
                        <img 
                        src={pulgar} alt="edit"
                        style={{
                            width: '20px',
                            height: '20px',
                            objectFit:'cover'
    
                        }}
                        />
                        </a>
                        </td>
    
                        }
                        </tr>
                    )    
                )}
    
                
                </tbody>
    
                </table>
                        
            </div>
            </div>
            </div>
    
    
            <div className="row align-items-center">
            <div className="col-8 mx-auto">
            <div className="jumbotron">  
    
            <input input className="btn btn-primary col-1" value="<<"/>    
            <input className="btn btn-primary col-2" value="1"/>
            <input className="btn btn-primary col-2" value="2"/>
            <input className="btn btn-primary col-2" value="3"/>
            <input className="btn btn-primary col-2" value="4"/>
            <input className="btn btn-primary col-2" value="5"/>
    
            <input className="btn btn-primary col-1" value=">>"/>
    
            </div>
            </div>
            </div>
            </div>
    
            }

          
       </>                 
)};

}


const mapStateToProps = (state) => {

    console.log (state);

    const { travels,isLoading} = state.travelReducer
    console.log("travels",travels)
	return {
		travels: travels.content,
        loading: isLoading
	};
}

const mapDispatchToProps = dispatch => {
	return {
		loadTravels: () => dispatch(travelAll())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Travels))