import React, { Component} from 'react';
import { connect } from "react-redux";
import { loadVouchers,downloadVoucher } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

class  Vouchers extends Component {

    constructor(props) {
		super(props);
        this.download.bind(this);
        
        this.state = {
            isLoading:true
        }
	}

   componentWillMount = () => {
       this.props.load();
   }

   componentDidMount = () => {
        this.setState({
            isLoading:false
        })
    }

   download=(voucherId)=>{
        this.props.downloadFile(voucherId)
   }


    render() {
        return(
          <>
            {this.state.isLoading && <h1>loading</h1>}
            {
              !this.state.isLoading &&
              <table class="table table-striped">
              <thead>
                  <tr>
                  <th scope="col"></th>
                  <th scope="col">voucherId</th>
                  <th scope="col">company</th>
                  <th scope="col">date</th>
                  <th scope="col">hour</th>
                  <th scope="col">status</th>
                  </tr>
              </thead>
              <tbody>
              
                
                  { this.props.vouchers && this.props.vouchers.map(element =>
                  (
                      <tr key={element.travelId}>
                      <th scope="row"></th>
                      <td>{element.travelId}</td>
                      <td>{element.company}</td>
                      <td>{element.dateCreated}</td>
                      <td>{element.time}</td>
                      <td>{element.status}</td>
  
                      <td> <button  className="btn btn-primary" onClick={()=>this.download(element.travelId)}>descargar</button> </td>
                      </tr>
                  )    
              )}
              </tbody>
  
              </table>
            
            }
             </>

)};

}

const mapStateToProps = (state) => {

    const { vouchers} = state.voucherReducer
    console.log("vouchers",vouchers.content)
	return {
		vouchers: vouchers.content	
    };
}


const mapDispatchToProps = dispatch => {
	return {
		downloadFile: (voucherId) => dispatch(downloadVoucher(voucherId)),
        load: () => dispatch(loadVouchers())	
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vouchers)