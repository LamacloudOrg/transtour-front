import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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

    client:Yup.string().required("Requerido"),
    driver: Yup.string()
      .required('Requerido'),
    date: Yup.date()
    .required('Requerido'),
    hour: Yup.string()
    .required('Requerido'),
    address: Yup.string()
    .required('Requerido'),

  });

    return (    
      <>
      <Formik

      initialValues={{ client: '', driver:'',date:'',hour:'',address:''}}
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
          <label>Cliente/Pasajero: </label>
          <input

            type="text"

            onChange={props.handleChange}

            onBlur={props.handleBlur}

            value={props.values.client}
            className="form-control"

            name="client"

          />
         {props.errors.client && <div  id="feedback">{props.errors.client}</div>}

          <br/>
          <label>Chofer: </label>
          <select

              onChange={props.handleChange}

              onBlur={props.handleBlur}

              value={props.values.driver}
              className="form-control"

              name="driver"

            >
              <option value="">chofer</option>
              <option value="1">Juan</option>
              <option value="2">Kike</option>
              <option value="3">Pablo</option>
              <option value="4">Manuel</option>   
            </select>

            {props.errors.driver && <div  id="feedback">{props.errors.driver}</div>}

          <br/>

          <label>Fecha: </label>

          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.date}
            label="date"
            name="date"
            type="date"
            className="form-control"
          />


          {props.errors.date && <div  id="feedback">{props.errors.date}</div>}

          <br/>
          <label>Hora: </label>
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.hour}
            label="hour"
            name="hour"
            type="time"
            className="form-control"
          />

        {props.errors.date && <div  id="feedback">{props.errors.date}</div>}
        <br/>

          <label>Destino: </label>
            <br/>
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.address}
            label="address"
            name="address"
            type="text"
            placeholder="calle 4ª891"
            className="form-control"
          />

        {props.errors.date && <div  id="feedback">{props.errors.date}</div>}
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