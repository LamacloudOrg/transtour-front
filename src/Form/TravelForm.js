import React, { Component } from 'react';
import { Formik,Field  } from 'formik';
import * as Yup from 'yup';
import  {withRouter  } from 'react-router-dom';
import { connect } from "react-redux";
import { generateNumber, newTravel,cleanOrderNumber,getAllDrivers} from "../redux/actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Travel.scss';

class TravelForm extends Component {

  constructor(){
    super()
    this.loadCar = this.loadCar.bind(this);
    this.cars =[{"dni":"34404216","patent":"LM 289 BC"}]
    this.state = {
      error:'',
      chofer:'',
      patent:''
    }

  }
  
  componentWillMount() {

    this.props.loadDrivers()

    if(this.props.newNumber==='0000'){
      this.props.generateNumber();
    }
  }

  componentDidMount() {
    if(this.props.newNumber==='0000'){
      this.props.generateNumber();
    }
  }

  loadCar (e){
    const inputCar = document.getElementById("car")
    const dni = e.target.value
    const car = this.cars.filter((car)=> car.dni === dni)[0]
    inputCar.value = car.patent.toString()
    e.target.value = car.dni.toString()
    this.setState({
      error:this.state.error,
      chofer:car.dni.toString(),
      patent:  inputCar.value
    })

    console.log(this.state)

  }
  
render() {

  const schema =Yup.object({

    orderNumber:Yup.string().required("Requerido"),
    dateCreated:Yup.date().required('Requerido'),
 //   car:Yup.string().required("Requerido"),
 //   carDriver:Yup.string().required("Requerido"),
    time:Yup.string().required("Requerido"),
    company:Yup.string().required("Requerido"),
    //bc:Yup.string().required("Requerido"),
    passenger:Yup.string().required("Requerido"),
    //reserveNumber:Yup.string().required("Requerido"),
    originAddress:Yup.string().required("Requerido"),
    destinyAddress:Yup.string().required("Requerido"),
    //observation:Yup.string().required("Requerido"),
    amount:Yup.number().required("Requerido"),
    whitingTime:Yup.number().required("Requerido"),
    toll:Yup.number().required("Requerido"),
    parkingAmount:Yup.number().required("Requerido"),
    taxForReturn:Yup.string().required("Requerido"),
    //totalAmount:Yup.string().required("Requerido")
  
  });

    return (    
      <>
      <Formik

      initialValues={{ orderNumber: this.props.newNumber, dateCreated:'', car:this.state.patent, carDriver:this.state.chofer, time:'',company:'', 
      bc:'', passenger:'', reserveNumber:'', originAddress:'', destinyAddress:'', observation:'', amount:'',
      whitingTime:0.0, toll:0.0, parkingAmount:0.0, taxForReturn:0.0, totalAmount:0.0}}
      validationSchema={schema}

      onSubmit={ async (values, actions) => {
          console.log(values);

          try {
            values.car = parseInt(this.state.patent)
            values.carDriver = this.state.chofer
            values.orderNumber = this.props.newNumber
         //   const response= await TravelService.create(values)
            this.props.create(values)
            console.log("el viaje fue creado")//,response);
            this.props.cleanOrderNumber('0000');
            const { history } = this.props;
            history.push("/travels");

          } catch (error) {
            this.setState({
              patent:this.state.patent,
              chofer:this.state.chofer,
              error:  'No se pudo crear el viaje'
            })
          }
      }}
>

{props => (
        <>
        {this.state.error && <h3> {this.state.error}</h3> }

        <form onSubmit={props.handleSubmit}>

        <div class="row">
            <div class="col-4 form-group">
        
            <label className="control-label">Numero Orden: </label>      
            <input type="text" value={props.values.orderNumber} className="form-control" name="orderNumber" disabled/>
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
             value={props.values.car} 
             value={this.state.patent}
             onChange={props.handleChange}
             onBlur={props.handleBlur} 
             className="form-control" 
             id="car" name="car" disabled/>
            {props.errors.car && <div class="p-a-1 bg-warning" id="feedback">{props.errors.car}</div>}
            <br/>
            </div>

            <div class="col-4 form-group">   
            <label className="control-label col-sm-2">Chofer: </label>
            <select
                onChange={props.handleChange}
                onChange={(e)=>this.loadCar(e)}
                onBlur={props.handleBlur}
                value={props.values.carDriver}
                value={this.state.chofer}
                className="form-control"
                name="carDriver"
              >

              {this.props.drivers.length >0 && this.props.drivers.map((driver)=>(
                <option type="text" value={driver.dni}>{driver.name}</option>
              ))
              }
              </select>
              {props.errors.carDriver && <div class="p-a-1 bg-warning" id="feedback">{props.errors.carDriver}</div>}
            </div>

            <div class="col-4 form-group"> 
            <label className="control-label">Empresa: </label>
            <input type="text" value={props.values.company} onChange={props.handleChange} className="form-control" name="company" />
            {props.errors.company && <div class="p-a-1 bg-warning" id="feedback">{props.errors.company}</div>}
            <br/>
            </div>

          </div>  


        <div class="row">
          <div class="col-4 form-group">   
          

          <label className="control-label">BC: </label>
          <input type="text" value={props.values.bc} onChange={props.handleChange} className="form-control" name="bc" />
          {props.errors.bc && <div class="p-a-1 bg-warning" id="feedback">{props.errors.bc}</div>}
          <br/>
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
          <br/>
          </div>
        
          <div class="col-4 form-group">
          <label className="control-label">Numero Reserva: </label>
          <input type="text" value={props.values.reserveNumber} onChange={props.handleChange} className="form-control" name="reserveNumber" />
          {props.errors.reserveNumber && <div class="p-a-1 bg-warning" id="feedback">{props.errors.reserveNumber}</div>}
          <br/>
          </div>

          </div>

          <div class="row">
          <div class="col-6 form-group">
         
          <label className="control-label">Origen: </label>
          <input type="text" value={props.values.originAddress} onChange={props.handleChange} className="form-control" name="originAddress" />
          {props.errors.originAddress && <div class="p-a-1 bg-warning" id="feedback">{props.errors.originAddress}</div>}
          <br/>
          </div>

          <div class="col-6 form-group">
          <label className="control-label">Destino </label>
          <input type="text" value={props.values.destinyAddress} onChange={props.handleChange} className="form-control" name="destinyAddress" />
          {props.errors.destinyAddress && <div class="p-a-1 bg-warning" id="feedback">{props.errors.destinyAddress}</div>}
          <br/>

          </div>
          </div>

          <div class="row">
          <div class="col-12 form-group">
          <label className="control-label">Observaciones: </label>
          <textarea rows="1" cols="50" value={props.values.observation} onChange={props.handleChange} className="form-control" name="observation" />
          {props.errors.observation && <div class="p-a-1 bg-warning" id="feedback">{props.errors.observation}</div>}
          <br/>
          </div>
          </div>

          <div class="row">
          <div class="col-2 form-group">       
          <label className="control-label">Importe: </label>
          <input type="number" value={props.values.amount} onChange={props.handleChange} className="form-control" name="amount" />
          {props.errors.amount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.amount}</div>}
          <br/>
          </div>

          <div class="col-2 form-group">
         
          <label className="control-label">Espera horas: </label>
          <input type="number" value={props.values.whitingTime} onChange={props.handleChange} className="form-control" name="whitingTime" />
          {props.errors.whitingTime && <div class="p-a-1 bg-warning" id="feedback">{props.errors.whitingTime}</div>}
          <br/>
          </div>
          
          <div class="col-2 form-group">
          <label className="control-label">Peajes: </label>
          <input type="number" value={props.values.toll} onChange={props.handleChange} className="form-control" name="toll" />
          {props.errors.toll && <div class="p-a-1 bg-warning" id="feedback">{props.errors.toll}</div>}
          <br/>
          </div>

          <div class="col-2 form-group">
          <label className="control-label">Estacionamiento: </label>
          <input type="number" value={props.values.parkingAmount} onChange={props.handleChange} className="form-control" name="parkingAmount" />
          {props.errors.parkingAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.parkingAmount}</div>}
          <br/>
          </div>

          <div class="col-3 form-group">
          <label className="control-label">Recargo x vuelta: </label>
          <input type="number" value={props.values.taxForReturn} onChange={props.handleChange} className="form-control" name="taxForReturn" />
          {props.errors.taxForReturn && <div class="p-a-1 bg-warning" id="feedback">{props.errors.taxForReturn}</div>}
          <br/>
          </div>

          </div>



          <label className="control-label">Importe total: </label>
          <Field type="number" format={value => value || parseFloat(props.values.taxForReturn) + parseFloat( props.values.parkingAmount)} className="form-control" name="totalAmount"d/>
          {props.errors.totalAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.totalAmount}</div>}
          <br/>

          <div className="row">
          <div className="col-md-2">  
          <button type="submit" className="btn btn-primary">crear</button>
          </div>
          <div className="col-md-2">
          <button type="button" className="btn btn-primary">cancelar</button>
          </div>
          <div className="col-md-2">
          <button type="button" className="btn btn-primary">resetear</button>
          </div>
          </div>
      
    </form>
    </>


)}

</Formik>
      </>
    )
  } 
}


const mapStateToProps = (state) => {

  const { orderNumber} = state.travelReducer
  const { drivers} = state.userReducer
  console.log("new order number",orderNumber)
  return {
    newNumber:orderNumber,
    drivers: drivers || []
  };
}

const mapDispatchToProps = dispatch => {
return {
  generateNumber: () => dispatch(generateNumber()),
  create:(travel) => dispatch(newTravel(travel)),
  cleanOrderNumber:(orderNumber)=>dispatch(cleanOrderNumber(orderNumber)),
  loadDrivers: ()=>dispatch(getAllDrivers())
};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TravelForm))