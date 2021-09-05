import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {withRouter  } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader,SidebarContent } from 'react-pro-sidebar';
import avatar from '../images/kike_avatar.jpeg'
import css from '../css/Menu.scss';



class SideBarMenu extends Component {

  constructor(props) {
		super(props);
        this.handleBoxToggleTravel.bind(this);
        this.handleBoxToggleVoucher.bind(this);
        this.handleLogout.bind(this);

        this.state = {
          showBoxTravels: true,
          showBoxVouchers: true
        };
        
	}


  handleBoxToggleTravel = () => this.setState({ showBoxTravels: !this.state.showBoxTravels });
  handleBoxToggleVoucher = () => this.setState({ showBoxVouchers: !this.state.showBoxVouchers });

 
   handleLogout=()=>{
    localStorage.removeItem("token");
    const { history } = this.props;
    history.push("/")
  }

    render() {      
        return (
          <ProSidebar >

          <SidebarHeader>
             <img className="avatar" src={avatar} alt="avatar" />
            </SidebarHeader>

            <SidebarContent>

            <Menu iconShape="circle">
              <MenuItem >Travels
              <SubMenu title="*" onClick={this.handleBoxToggleTravel} open={this.state.showBoxTravels}>
                <MenuItem>crear
                <Link to="/travel/crear"/>
                </MenuItem>
                <MenuItem>listar
                <Link to="/travels"/>
                </MenuItem>
                <MenuItem>buscar</MenuItem>
                <MenuItem>editar</MenuItem>
              </SubMenu>
              </MenuItem>

              <MenuItem >Vouchers
              <SubMenu title="*" onClick={this.handleBoxToggleVoucher} open={this.state.showBoxVouchers}>
                <MenuItem>crear
                <Link to="/voucher/crear"/>
                </MenuItem>
                <MenuItem>listar
                <Link to="/vouchers"/>
                </MenuItem>
                <MenuItem>buscar</MenuItem>
                <MenuItem>editar</MenuItem>
              </SubMenu>
              </MenuItem>
              <MenuItem onClick={()=>this.handleLogout()}>Salir </MenuItem>
            </Menu>
            </SidebarContent>
          </ProSidebar>
        );
    }
}


export default withRouter(SideBarMenu);
 