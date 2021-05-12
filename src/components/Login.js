import React, { Component } from 'react';
import  { Redirect,RouteComponentProps, withRouter  } from 'react-router-dom';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
//import Cookies from 'universal-cookie';

const getUserUrlMock = "http://localhost:8088/v1/user/login";
//const cookie = new Cookies;

class Login extends Component {

    state = {
      form: {
        userName: '',
        passWord: ''
      }
    }

  handleChange = async e => {
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);

  }  

  startSession = async() =>{
    const { history } = this.props;

   // await axios.get(getUserUrlMock, {params: { userName: this.state.form.userName , passWord: md5(this.state.form.passWord)}})
   await axios.post(getUserUrlMock)
    .then(response=>{
      return response.data;
    })
    .then(response=>{
      if (response.length>0){
        console.log('Inicio correcto',  response)
        history.push("/home")

      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
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