import React, { Component } from 'react';
import { Formik, Field} from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { newTravel,travelEdition, getAllDrivers,getAllCompany } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Travel.scss';
import TotalAmount from '../components/TotalAmount';
import { ThumbUpSharp } from '@material-ui/icons';

class TravelForm extends Component {

  constructor() {
    super()
    this.loadCar = this.loadCar.bind(this);
    this.resetValues = this.resetValues.bind(this);    
    
    this.state = {
      error: '',
      chofer: '',
      choferName: '',
      patent: '',
      isLoading: true,
      company: ''
    }
  }


  componentWillMount() {
    this.props.loadDrivers();
    this.props.loadCompanies();
    this.setState({
      error: '',
      chofer: '',
      choferName:'',
      patent: '',
      isLoading: false,
      company: ''
    })
  }

  loadCar(e) {
    const inputCar = document.getElementById("car")
    const dni = e.target.value
    const driver_ =  this.props.drivers.filter((driver) => driver.dni.toString() === dni)[0]
    //console.log("car obtenido",car);
    if(driver_.cars.length > 0){
      inputCar.value = driver_.cars[0].patent.toString()
    }else{
      inputCar.value="";
    }
   // e.target.value = car.dni.toString()
    this.setState({
      error: this.state.error,
      chofer: driver_.dni.toString(),
      choferName:driver_.name,
      patent: inputCar.value.toString(),
      isLoading: this.state.isLoading,
    })
  }

  resetValues(values){
    let valuesArray = Object.values(values);
  
    for (let value of valuesArray) {
      values[value] =''
    }

 }

  render() {
  
    let initValues = {
      orderNumber: '', dateCreated: '', car: this.state.patent, carDriver: this.state.chofer,
      carDriverName:this.state.choferName, time: '', company: '',
      bc: '', passenger: '', reserveNumber: '', originAddress: '', destinyAddress: '', observation: '', amount: '',
      whitingTime: 0.0, toll: 0.0, parkingAmount: 0.0, taxForReturn: 0.0, totalAmount: 0.0, isEdition:false
    }

    

    if (this.props.location.state !== undefined && !this.state.isLoading && this.props.drivers !== undefined){
      const {detail} = this.props.location.state
      console.log("mis drivers ", this.props.drivers)
      const driver_ = this.props.drivers.filter((driver) => driver.dni.toString() === detail.carDriver)[0]
      console.log(driver_)
      initValues.isEdition = true
      initValues.carDriver =detail.carDriver
      if (driver_ !==undefined) initValues.car = driver_.car.id

      initValues.orderNumber = detail.orderNumber
      initValues.dateCreated = detail.dateCreated
      initValues.passenger = detail.passenger
      initValues.time = detail.time
      initValues.company = detail.company
      initValues.bc = detail.bc
      initValues.reserveNumber = detail.reserveNumber
      initValues.observation = detail.observation
      initValues.originAddress = detail.originAddress
      initValues.destinyAddress = detail.destinyAddress
      initValues.amount = detail.amount
      initValues.toll = detail.toll
      initValues.taxForReturn = detail.taxForReturn
      initValues.parkingAmount = detail.parkingAmount
      initValues.whitingTime = detail.whitingTime
      initValues.totalAmount = parseFloat(detail.amount) + parseFloat(detail.toll) +  parseFloat(detail.taxForReturn) +  parseFloat(detail.parkingAmount) +  parseFloat(detail.whitingTime)  

    }

    const schema = Yup.object({

     // orderNumber: Yup.string().required("Requerido"),
      dateCreated: Yup.date().required('Requerido'),
      time: Yup.string().required("Requerido"),
     // company: Yup.string().required("Requerido"),
      passenger: Yup.string().required("Requerido"),
      originAddress: Yup.string().required("Requerido"),
      destinyAddress: Yup.string().required("Requerido"),
      amount: Yup.number().required("Requerido"),
      whitingTime: Yup.number().required("Requerido"),
      toll: Yup.number().required("Requerido"),
      parkingAmount: Yup.number().required("Requerido"),
      taxForReturn: Yup.string().required("Requerido"),
      //company: Yup.string().required("Requerido"),
    });

    return (

      <>
        {
          this.state.isLoading && <h1>loading</h1>

        }
        {
          !this.state.isLoading && <Formik

            initialValues={initValues}
            validationSchema={schema}

            onSubmit={async (values, actions) => {
              console.log(values);
              try {
                values.car = this.state.patent
                values.carDriver = this.state.chofer
                values.carDriverName = this.state.choferName
                console.log("antes de llamar" , values);
                initValues.isEdition === true ? this.props.update(values)  : this.props.create(values)
                const { history } = this.props;
                history.push("/travels");
              } catch (error) {
                this.setState({
                  patent: this.state.patent,
                  chofer: this.state.chofer,
                  choferName:this.state.choferName,
                  isLoading: this.state.isLoading,
                  error: 'No se pudo crear el viaje'
                })
              }
            }}
          >

            {props => (
              <>
                {this.state.error && <div className="row"><h3 className="text-center  text-danger"> {this.state.error}</h3> </div>}

                <form onSubmit={props.handleSubmit}>

                  <div class="row">
                    <div class="col-4 form-group">
                    {!props.values.isEdition &&
                       <>
                      <label className="control-label">Numero Orden: </label>
                      <input type="text" value={props.values.orderNumber} onChange={props.handleChange} className="form-control" name="orderNumber" disabled />
                      </>
                    }

                    {props.values.isEdition &&
                       <>
                      <label className="control-label">Numero Orden: </label>
                      <input type="text" value={props.values.orderNumber} onChange={props.handleChange} className="form-control" name="orderNumber" disabled />
                      </>
                    }

                    </div>


                    <div class="col-4 form-group">
                      <label >Fecha: </label>
                      <input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.dateCreated}
                        label="dateCreated"
                        name="dateCreated"
                        type="date"
                        className="form-control"
                      />
                      {props.errors.dateCreated && <div class="p-a-1 bg-warning" id="feedback">{props.errors.dateCreated}</div>}
                    </div>

                    <div class="col-4 form-group">
                      <label className="control-label">Hora: </label>
                      <input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.time}
                        label="time"
                        name="time"
                        type="time"
                        className="form-control"
                      />
                      {props.errors.time && <div class="p-a-1 bg-warning" id="feedback">{props.errors.time}</div>}
                    </div>

                  </div>

                  <div class="row">
                    <div class="col-4 form-group">

                      <label className="control-label col-sm-2">Vehiculo: </label>
                      <input type="text"
                        value={this.state.patent !== '' ? this.state.patent : props.values.car}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className="form-control"
                        id="car" name="car" />
                      {props.errors.car && <div class="p-a-1 bg-warning" id="feedback">{props.errors.car}</div>}
                      <br />
                    </div>

                    <div class="col-4 form-group">
                      <label className="control-label col-sm-2">Chofer: </label>
                      <select
                        onChange={props.handleChange}
                        onChange={(e) => this.loadCar(e)}
                        onBlur={props.handleBlur}
                        value={this.state.chofer ? this.state.chofer :props.values.carDriver}
                        className="form-control"
                        name="carDriver"
                      >

                        {this.props.drivers.length > 0 && this.props.drivers.map((driver) => (
                          <option type="text" value={driver.dni}>{driver.name}</option>
                        ))
                        }
                      </select>
                      {props.errors.carDriver && <div class="p-a-1 bg-warning" id="feedback">{props.errors.carDriver}</div>}
                    </div>

                    <div class="col-4 form-group">
                      <label className="control-label">Empresa: </label>
                      <select
                        onChange={props.handleChange}
                        value={props.values.company}
                        className="form-control"
                        name="company"
                      >

                        {this.props.companies.length > 0 && this.props.companies.map((company) => (
                          <option type="text" value={company.fullName}>{company.nickName}</option>
                        ))
                        }
                      </select>

                      {props.errors.company && <div class="p-a-1 bg-warning" id="feedback">{props.errors.company}</div>}
                      <br />
                    </div>

                  </div>


                  <div class="row">
                    <div class="col-4 form-group">


                      <label className="control-label">BC: </label>
                      <input type="text" value={props.values.bc} onChange={props.handleChange} className="form-control" name="bc" />
                      {props.errors.bc && <div class="p-a-1 bg-warning" id="feedback">{props.errors.bc}</div>}
                      <br />
                    </div>

                    <div class="col-4 form-group">
                      <label className="control-label">Pasajero/s: </label>
                      <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.passenger}
                        className="form-control"
                        name="passenger"
                      />
                      {props.errors.passenger && <div class="p-a-1 bg-warning" id="feedback">{props.errors.passenger}</div>}
                      <br />
                    </div>

                    <div class="col-4 form-group">
                      <label className="control-label">Numero Reserva: </label>
                      <input type="text" 
                      value={props.values.reserveNumber}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      className="form-control" name="reserveNumber" />
                    </div>
                    <br />
                  </div>

                  <div class="row">
                    <div class="col-6 form-group">

                      <label className="control-label">Origen: </label>
                      <input type="text" value={props.values.originAddress} onChange={props.handleChange} className="form-control" name="originAddress" />
                      {props.errors.originAddress && <div class="p-a-1 bg-warning" id="feedback">{props.errors.originAddress}</div>}
                      <br />
                    </div>

                    <div class="col-6 form-group">
                      <label className="control-label">Destino </label>
                      <input type="text" value={props.values.destinyAddress} onChange={props.handleChange} className="form-control" name="destinyAddress" />
                      {props.errors.destinyAddress && <div class="p-a-1 bg-warning" id="feedback">{props.errors.destinyAddress}</div>}
                      <br />

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12 form-group">
                      <label className="control-label">Observaciones: </label>
                      <textarea rows="1" cols="50" value={props.values.observation} onChange={props.handleChange} className="form-control" name="observation" />
                      {props.errors.observation && <div class="p-a-1 bg-warning" id="feedback">{props.errors.observation}</div>}
                      <br />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2 form-group">
                      <label className="control-label">Importe: </label>
                      <input type="number" value={props.values.amount} 
                      onChange={props.handleChange}
                      className="form-control" name="amount" />
                      {props.errors.amount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.amount}</div>}
                      <br />
                    </div>

                    <div class="col-2 form-group">

                      <label className="control-label">Espera horas: </label>
                      <input type="number" value={props.values.whitingTime} 
                      onChange={props.handleChange}
                      className="form-control" name="whitingTime" />
                      {props.errors.whitingTime && <div class="p-a-1 bg-warning" id="feedback">{props.errors.whitingTime}</div>}
                      <br />
                    </div>

                    <div class="col-2 form-group">
                      <label className="control-label">Peajes: </label>
                      <input type="number" value={props.values.toll} 
                      onChange={props.handleChange}
                      className="form-control" name="toll" />
                      {props.errors.toll && <div class="p-a-1 bg-warning" id="feedback">{props.errors.toll}</div>}
                      <br />
                    </div>

                    <div class="col-2 form-group">
                      <label className="control-label">Estacionamiento: </label>
                      <input type="number" value={props.values.parkingAmount} 
                      onChange={props.handleChange}
                      className="form-control" name="parkingAmount" />
                      {props.errors.parkingAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.parkingAmount}</div>}
                      <br />
                    </div>

                    <div class="col-3 form-group">
                      <label className="control-label">Recargo x vuelta: </label>
                      <input type="number" value={props.values.taxForReturn} 
                      onChange={props.handleChange} className="form-control" name="taxForReturn" />
                      {props.errors.taxForReturn && <div class="p-a-1 bg-warning" id="feedback">{props.errors.taxForReturn}</div>}
                      <br />
                    </div>

                  </div>



                  <label className="control-label">Importe total: </label>
                  <TotalAmount 
                  values={props.values} 
                  setFieldValue={props.setFieldValue} 
                  handleChange={props.handleChange} 
                  handleBlur={props.handleBlur} 
                  value={props.values.totalAmount}
                  id="totalAmount"
                  name="totalAmount"
                  />   
                  {props.errors.totalAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.totalAmount}</div>}
                  <br />

                  <div className="row">
                    <div className="col-md-2">
                      <button type="submit" className="btn btn-primary">crear</button>
                    </div>
                    <div className="col-md-2">
                      <button type="button" className="btn btn-primary">cancelar</button>
                    </div>
                    <div className="col-md-2">
                      <button type="button" 
                      className="btn btn-primary"
                      onClick={()=> this.resetValues(props.values)}
                      >resetear</button>
                    </div>
                  </div>

                </form>
              </>


            )}

          </Formik>
        }

      </>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  const { drivers } = state.userReducer
  const { companies } = state.companyReducer

  return {
    drivers: drivers,
    companies:companies
  };
}

const mapDispatchToProps = dispatch => {
  return {
    create: (travel) => dispatch(newTravel(travel)),
    update: (travel) => dispatch(travelEdition(travel)),
    loadDrivers: () => dispatch(getAllDrivers()),
    loadCompanies: () => dispatch(getAllCompany())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TravelForm))