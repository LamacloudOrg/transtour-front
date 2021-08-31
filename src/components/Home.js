import React, { Component } from 'react';
import nostros from '../images/nosotros.jpg'

const height="150px"

const Home= () =>(
    <div className="row">

    <div className="col-6">
    <div className="text-center">
        <h4>Area de Administracion</h4>
        <img src={nostros} alt="transtour-admin" />

     </div>
     </div>

     <div className="col-6">

    <div>
        <h2>Bienvenidos a nuestra web! </h2>
        <h3>Somos una empresa de traslados ejecutivos, con especialización en turismo Internacional.</h3>
        <p>Brindamos servicios a Empresas, Agencias de turismo y Hoteles de primer nivel.<br/>
            Los distintos traslados están controlados y monitoreados por una mesa de control operativa las 24 horas del día.<br/>
            Contamos con Guías, coordinadores y conductores profesionales bilingües.<br/>
            Esperamos que puedan contar con nosotros y experimentar la calidad de nuestros servicios.</p>
    </div>

    </div>


    </div>


);

export default Home;