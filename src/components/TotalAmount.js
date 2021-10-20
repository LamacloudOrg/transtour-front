import React, { Component} from 'react';
import {Field} from 'formik';

const TotalAmount =({values,setFieldValue,handleChange,handleBlur})=> {


  console.log(values.totalAmount)

  React.useEffect(() => {
    const total =parseFloat(values.amount || '0')
    + parseFloat(values.toll || '0') 
    +  parseFloat(values.taxForReturn || '0') 
    +  parseFloat(values.parkingAmount || '0') 
    +  parseFloat(values.whitingTime || '0')
    setFieldValue("totalAmount",total.toFixed(2))
  }, [values])

  return(
    <input type="number"
    defaultValue={values.totalAmount || '0'}
    className="form-control"
    onChange={handleChange}
    onBlur={handleBlur}
    id="totalAmount"
    name="totalAmount" 
    disabled/>
   )



}

export default TotalAmount;