import React, { Component } from 'react';
import  {withRouter  } from 'react-router-dom';

class Header extends Component{


  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    
    }
     
    handleClick =()=>{

        const { history } = this.props;
        history.push("/home")
    }

    render() {

    return(

    <div className="row">
        <h1 className="text-center" ><a href="#" onClick={()=>this.handleClick()}>Transtour Home Page</a></h1>
    </div>
    )
    }
}

export default withRouter(Header);