import React, { Component } from 'react';
import  {withRouter  } from 'react-router-dom';
import AuthenticationService from '../service/AuthenticationService'
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import md5 from 'md5';


class Login extends Component {

  constructor(){
      super()
      this.state = {
        form: {
          userName: '',
          passWord: ''
        },

    }
  }

  handleChange = async e => {

      this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
      console.log(this.state.form);

  }  

  startSession = async() =>{
    const { history } = this.props;
    try{
     const token = await AuthenticationService.autetincate(this.state.form.userName, md5(this.state.form.passWord))
     localStorage.setItem("token",token)
     history.push("/home")
    }catch(Error){
      console.log(Error)
    }
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
                
        {this.state.error && <div className="aler-danger">{this.state.error}</div>}

          <div className="form-group">
            <label>User: </label>
            <br/>
            <input type="text" 
               name="userName" 
               onChange={this.handleChange} 
               className="form-control"
            />
            <br/>
            <label>Password: </label>
            <br/>
            <input type="password" 
               name="passWord" 
               onChange={this.handleChange} 
               className="form-control"
            />
            <br/>
            <button className="btn btn-primary" onClick={()=> this.startSession()}> Login </button>
          </div>
        </div>
      </div>
    )
  } 
}

export default withRouter(Login);