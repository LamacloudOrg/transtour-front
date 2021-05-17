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

    pasajero:Yup.string().required("Requerido"),
    chofer: Yup.string()
      .required('Requerido'),
    fecha: Yup.date()
    .required('Requerido'),
    hora: Yup.string()
    .required('Requerido'),
    direccion: Yup.string()
    .required('Requerido'),

  });

    return (    
      <>
      <Formik

      initialValues={{ pasajero: '', chofer:'',fecha:'',hora:'',direccion:''}}
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

            value={props.values.pasajero}
            className="form-control"

            name="pasajero"

          />
         {props.errors.pasajero && <div  id="feedback">{props.errors.pasajero}</div>}

          <br/>
          <label>Chofer: </label>
          <select

              onChange={props.handleChange}

              onBlur={props.handleBlur}

              value={props.values.chofer}
              className="form-control"

              name="chofer"

            >
              <option value="">chofer</option>
              <option value="1">Juan</option>
              <option value="2">Kike</option>
              <option value="3">Pablo</option>
              <option value="4">Manuel</option>   
            </select>

            {props.errors.chofer && <div  id="feedback">{props.errors.chofer}</div>}

          <br/>

          <label>Fecha: </label>

          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.fecha}
            label="fecha"
            name="fecha"
            type="date"
            className="form-control"
          />


          {props.errors.fecha && <div  id="feedback">{props.errors.fecha}</div>}

          <br/>
          <label>Hora: </label>
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.hora}
            label="hora"
            name="hora"
            type="time"
            className="form-control"
          />

        {props.errors.hora && <div  id="feedback">{props.errors.hora}</div>}
        <br/>

          <label>Destino: </label>
            <br/>
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.direccion}
            label="direccion"
            name="direccion"
            type="text"
            placeholder="calle 4ª891"
            className="form-control"
          />

        {props.errors.direccion && <div  id="feedback">{props.errors.direccion}</div>}
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