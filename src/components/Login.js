import React, { Component } from 'react';
import  {withRouter  } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService'
import '../css/Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import transtourIcon from  '../images/transtourImage.png';

class Login extends Component {

  constructor(){
      super()
      this.state = {
        form: {
          dni: '',
          password: ''
        },

    }
  }

  handleChange = async e => {
//    const rounds = 10
  //  const salt = bcrypt.genSaltSync(10);
    let value = e.target.value
  //  if (e.target.name==="password"){
    //  value = bcrypt.hashSync(e.target.name, salt);
 //   }
      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: value
        }
      });
  }
  
   init =()=>{
    this.setState({
      form:{
        dni: '',
        passWord: ''
      }})
  }

  startSession = async() =>{
    const { history } = this.props;
    try{
     const data = await AuthenticationService.autetincate(this.state.form)
     localStorage.setItem("token",data.token);
     history.push("/home")
    }catch(Error){
      console.log(Error)
    }
  }

  render() {

    return (

      <div className="containter">
      <div className="row align-items-center h-100" >
      <div className="col-4 mx-auto">
      <div className="jumbotron">

        <img 
        src={transtourIcon} />
        {this.state.error && <div className="aler-danger">{this.state.error}</div>}

          <div className="form-group">
            <label>Dni: </label>
            <br/>
            <input type="text" 
               name="dni"
               onChange={this.handleChange} 
               className="form-control"
            />
            <br/>
            <label>Password: </label>
            <br/>
            <input type="password" 
               name="password" 
               onChange={this.handleChange} 
               className="form-control"
            />
            <br/>
            <button className="btn btn-primary" onClick={()=> this.startSession()}> Login </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  } 
}

export default withRouter(Login);