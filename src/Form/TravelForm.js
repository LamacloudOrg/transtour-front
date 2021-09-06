import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
// import { generateNumber, newTravel } from "../redux/actions";
import { newTravel } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Travel.scss';

class TravelForm extends Component {

  constructor() {
    super()
    this.state = {
      error: ''
    }
  }

  /*
  componentDidMount = () => {
    this.props.generateNumber();
  } 
  */

  render() {

    // const { newNumber } = this.props
    // console.log("show order Number", newNumber)

    const schema = Yup.object({

      orderNumber: Yup.string().required("Requerido"),
      dateCreated: Yup.date().required('Requerido'),
      car: Yup.string().required("Requerido"),
      carDriver: Yup.string().required("Requerido"),
      time: Yup.string().required("Requerido"),
      company: Yup.string().required("Requerido"),
      //bc:Yup.string().required("Requerido"),
      passenger: Yup.string().required("Requerido"),
      //reserveNumber:Yup.string().required("Requerido"),
      originAddress: Yup.string().required("Requerido"),
      destinyAddress: Yup.string().required("Requerido"),
      //observation:Yup.string().required("Requerido"),
      amount: Yup.number().required("Requerido"),
      whitingTime: Yup.number().required("Requerido"),
      toll: Yup.number().required("Requerido"),
      parkingAmount: Yup.number().required("Requerido"),
      taxForReturn: Yup.string().required("Requerido"),
      //totalAmount:Yup.string().required("Requerido")

    });

    return (
      <>
        <Formik

          initialValues={{
            orderNumber: '', dateCreated: '', car: '', carDriver: '', time: '', company: '',
            bc: '', passenger: '', reserveNumber: '', originAddress: '', destinyAddress: '', observation: '', amount: '',
            whitingTime: 0.0, toll: 0.0, parkingAmount: 0.0, taxForReturn: 0.0, totalAmount: 0.0
          }}
          validationSchema={schema}

          onSubmit={async (values, actions) => {
            console.log(values);

            try {
              values.carDriver = parseInt(values.carDriver)
              //   const response= await TravelService.create(values)
              this.props.create(values)
              console.log("el viaje fue creado")//,response);
              const { history } = this.props;
              history.push("/travels");

            } catch (error) {
              console.log("No se pudo crear el viaje")
              this.setState({
                'error': 'No se pudo crear el viaje'
              })
            }
          }}
        >

          {props => (
            <>
              {this.state.error && <h3> {this.state.error}</h3>}

              <form onSubmit={props.handleSubmit}>

                <div class="row">
                  <div class="col-4 form-group">

                    <label className="control-label">Numero Orden: </label>
                    <input type="text" value={props.values.orderNumber} onChange={props.handleChange} 
                    className="form-control" name="orderNumber" />
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
                    <input type="text" value={props.values.car} onChange={props.handleChange} className="form-control" name="car" />
                    {props.errors.car && <div class="p-a-1 bg-warning" id="feedback">{props.errors.car}</div>}
                    <br />
                  </div>

                  <div class="col-4 form-group">
                    <label className="control-label col-sm-2">Chofer: </label>
                    <select
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.carDriver}
                      className="form-control"
                      name="carDriver"
                    >
                      <option value="">chofer</option>
                      <option value="20100201">Juan</option>
                      <option value="93479822">Kike</option>
                      <option value="34404216">Pablo</option>
                      <option value="20100204">Manuel</option>
                      <option value="27803204">Charly</option>
                    </select>
                    {props.errors.carDriver && <div class="p-a-1 bg-warning" id="feedback">{props.errors.carDriver}</div>}
                  </div>

                  <div class="col-4 form-group">
                    <label className="control-label">Empresa: </label>
                    <input type="text" value={props.values.company} onChange={props.handleChange} className="form-control" name="company" />
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
                    <input type="text" value={props.values.reserveNumber} onChange={props.handleChange} className="form-control" name="reserveNumber" />
                    {props.errors.reserveNumber && <div class="p-a-1 bg-warning" id="feedback">{props.errors.reserveNumber}</div>}
                    <br />
                  </div>

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
                    <input type="number" value={props.values.amount} onChange={props.handleChange} className="form-control" name="amount" />
                    {props.errors.amount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.amount}</div>}
                    <br />
                  </div>

                  <div class="col-2 form-group">

                    <label className="control-label">Espera horas: </label>
                    <input type="number" value={props.values.whitingTime} onChange={props.handleChange} className="form-control" name="whitingTime" />
                    {props.errors.whitingTime && <div class="p-a-1 bg-warning" id="feedback">{props.errors.whitingTime}</div>}
                    <br />
                  </div>

                  <div class="col-2 form-group">
                    <label className="control-label">Peajes: </label>
                    <input type="number" value={props.values.toll} onChange={props.handleChange} className="form-control" name="toll" />
                    {props.errors.toll && <div class="p-a-1 bg-warning" id="feedback">{props.errors.toll}</div>}
                    <br />
                  </div>

                  <div class="col-2 form-group">
                    <label className="control-label">Estacionamiento: </label>
                    <input type="number" value={props.values.parkingAmount} onChange={props.handleChange} className="form-control" name="parkingAmount" />
                    {props.errors.parkingAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.parkingAmount}</div>}
                    <br />
                  </div>

                  <div class="col-3 form-group">
                    <label className="control-label">Recargo x vuelta: </label>
                    <input type="number" value={props.values.taxForReturn} onChange={props.handleChange} className="form-control" name="taxForReturn" />
                    {props.errors.taxForReturn && <div class="p-a-1 bg-warning" id="feedback">{props.errors.taxForReturn}</div>}
                    <br />
                  </div>

                </div>



                <label className="control-label">Importe total: </label>
                <Field type="number" format={value => value || parseFloat(props.values.taxForReturn) + parseFloat(props.values.parkingAmount)} className="form-control" name="totalAmount" />
                {props.errors.totalAmount && <div class="p-a-1 bg-warning" id="feedback">{props.errors.totalAmount}</div>}
                <br />

                <button type="submit" className="btn btn-primary">crear</button>
              </form>
            </>


          )}

        </Formik>
      </>
    )
  }
}


const mapStateToProps = (state) => {

  // const { orderNumber } = state.travelReducer
  // console.log("new order number", orderNumber)
  return {
  //  newNumber: orderNumber,
  };
}

const mapDispatchToProps = dispatch => {
  return {
  //  generateNumber: () => dispatch(generateNumber()),
    create: (travel) => dispatch(newTravel(travel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TravelForm))