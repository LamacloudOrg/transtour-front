import React, { Component } from 'react';
import { Formik  } from 'formik';
import * as Yup from 'yup';
import TravelService from '../service/TravelService'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Travel.css';

class TravelForm extends Component {

  constructor(){
    super()
    this.state = {
      error:''
   }
}

render() {

  const schema =Yup.object({

    orderNumber:Yup.string().required("Requerido"),
    dateCreated:Yup.date().required('Requerido'),
    car:Yup.string().required("Requerido"),
    carDriver:Yup.string().required("Requerido"),
    time:Yup.string().required("Requerido"),
    company:Yup.string().required("Requerido"),
    bc:Yup.string().required("Requerido"),
    passenger:Yup.string().required("Requerido"),
    reserveNumber:Yup.string().required("Requerido"),
    originAddress:Yup.string().required("Requerido"),
    destinyAddress:Yup.string().required("Requerido"),
    observation:Yup.string().required("Requerido"),
    amount:Yup.string().required("Requerido"),
    whitingTime:Yup.string().required("Requerido"),
    toll:Yup.string().required("Requerido"),
    parkingAmount:Yup.string().required("Requerido"),
    taxForReturn:Yup.string().required("Requerido"),
    totalAmount:Yup.string().required("Requerido")
  
  });

    return (    
      <>
      <Formik

      initialValues={{ orderNumber: '000001', dateCreated:'', car:'', carDriver:'', time:'',company:'', 
      bc:'', passenger:'', reserveNumber:'', originAddress:'', destinyAddress:'', observation:'', amount:'',
      whitingTime:'', toll:'', parkingAmount:'', taxForReturn:'', totalAmount:''}}
      validationSchema={schema}

      onSubmit={ async (values, actions) => {
          console.log(values);

          try {
            const response= await TravelService.create(values)
            console.log("el viaje fue creado",response);
          } catch (error) {
            console.log("No se pudo crear el viaje")
            this.setState({
              'error':'No se pudo crear el viaje'
            })
          }
      }}
>

{props => (
    <div className="travel-main">
      <div className="travel-secondary">
        <div className="form-group">
          {this.state.error && <h3> {this.state.error}</h3> }

        <form onSubmit={props.handleSubmit}>
          
          <label>Numero Orden: </label>
          <input type="text" value={props.values.orderNumber} className="form-control" name="orderNumber" disabled/>
          <br/>

          <label>Fecha: </label>
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
          <br/>
          
          <label>Vehiculo: </label>
          <input type="text" value={props.values.car} onChange={props.handleChange} className="form-control" name="car" />
          {props.errors.car && <div class="p-a-1 bg-warning" id="feedback">{props.errors.car}</div>}
          <br/>
          
          <label>Chofer: </label>
          <select
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.carDriver}
              className="form-control"
              name="carDriver"
            >
              <option value="">chofer</option>
              <option value="1">Juan</option>
              <option value="2">Kike</option>
              <option value="3">Pablo</option>
              <option value="4">Manuel</option>   
            </select>
            {props.errors.carDriver && <div class="p-a-1 bg-warning" id="feedback">{props.errors.carDriver}</div>}
          <br />

          <label>Hora: </label>
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
        <br/>

        <label>Empresa: </label>
        <input type="text" value={props.values.company} onChange={props.handleChange} className="form-control" name="company" />
        {props.errors.company && <div class="p-a-1 bg-warning" id="feedback">{props.errors.company}</div>}
        <br/>

        <label>BC: </label>
        <input type="text" value={props.values.bc} onChange={props.handleChange} className="form-control" name="bc" />
        {props.errors.bc && <div class="p-a-1 bg-warning" id="feedback">{props.errors.bc}</div>}
        <br/>

          <label>Pasajero/s: </label>
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
        
          <label>Numero Reserva: </label>
          <input type="text" value={props.values.reserveNumber} onChange={props.handleChange} className="form-control" name="reserveNumber" />
          {props.errors.reserveNumber && <div class="p-a-1 bg-warning" id="feedback">{props.errors.reserveNumber}</div>}
          <br/>

          <label>Viaje realizado desde: </label>
          <input type="text" value={props.values.originAddress} onChange={props.handleChange} className="form-control" name="originAddress" />
          {props.errors.originAddress && <div class="p-a-1 bg-warning" id="feedback">{props.errors.originAddress}</div>}
          <br/>

          <label>Viaje realizado hasta: </label>
          <input type="text" value={props.values.destinyAddress} onChange={props.handleChange} className="form-control" name="destinyAddress" />
          {props.errors.destinyAddress && <div class="p-a-1 bg-warning" id="feedback">{props.errors.destinyAddress}</div>}
          <br/>
          
          <label>Observaciones: </label>
          <input type="text" value={props.values.observation} onChange={props.handleChange} className="form-control" name="observation" />
          {props.errors.observation && <div class="p-a-1 bg-warning" id="feedback">{props.errors.observation}</div>}
          <br/>
       
          <label>Importe: </label>
          <input type="text" value={props.values.amount} onChange={props.handleChange} className="form-control" name="amount" />
          {props.errors.amount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.amount}</div>}
          <br/>

          <label>Espera horas: </label>
          <input type="text" value={props.values.whitingTime} onChange={props.handleChange} className="form-control" name="whitingTime" />
          {props.errors.whitingTime && <div class="p-a-1 bg-warning" id="feedback">{props.errors.whitingTime}</div>}
          <br/>
          
          <label>Peajes: </label>
          <input type="text" value={props.values.toll} onChange={props.handleChange} className="form-control" name="toll" />
          {props.errors.toll && <div class="p-a-1 bg-warning" id="feedback">{props.errors.toll}</div>}
          <br/>
          
          <label>Estacionamiento: </label>
          <input type="text" value={props.values.parkingAmount} onChange={props.handleChange} className="form-control" name="parkingAmount" />
          {props.errors.parkingAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.parkingAmount}</div>}
          <br/>

          <label>Recargo por vuelta a la empresa: </label>
          <input type="text" value={props.values.taxForReturn} onChange={props.handleChange} className="form-control" name="taxForReturn" />
          {props.errors.taxForReturn && <div class="p-a-1 bg-warning" id="feedback">{props.errors.taxForReturn}</div>}
          <br/>

          <label>Importe total: </label>
          <input type="text" value={props.values.totalAmount} onChange={props.handleChange} className="form-control" name="totalAmount" />
          {props.errors.totalAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.totalAmount}</div>}
          <br/>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
    </div>

)}

</Formik>
      </>
    )
  } 
}

export default TravelForm;