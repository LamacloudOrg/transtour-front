import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';

class TravelForm extends Component {

render() {
    return (    
        <>
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
        <div className="containerPrincipal">
        <div className="containerSecundario">
        <div className="form-group">
          <label>First Name: </label>
            <br/>
          <input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
            className="form-control"
          />
          <label>Last Name: </label>
            <br/>
          <input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            className="form-control"
          />
          <label>Email: </label>
            <br/>
          <input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
            className="form-control"
          />

          <label>Chofer: </label>
            <br/>
          <select label="Job Type" name="jobType" className="form-control">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>            
          </select>

          <br/>
          <button type="submit" className="btn btn-primary">create  </button>
 
          </div>
          </div>
          </div>
        </Form>
      </Formik>
      </>
    )
  } 
}

export default TravelForm;