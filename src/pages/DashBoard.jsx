import Head from 'next/head';
import style from '../styles/dashboard.module.scss';
import Layout from '@/components/Layout';
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";







const DashBoard = () => {

  const [date , setDate] = useState(new Date());
 
  




  return (
    <>
    <Head>
      <title>DashBoard registros</title>
    </Head>
    
    <div className={style.container}>
        <Layout>

          <div className={style.containerDash}>
                <h2>Servicios realizados </h2>
                
                <div className={style.formulario}>
                 <label>Seleccionar Fecha:</label>
                 <Datetime />
                 <label>Seleccionar destino</label>
                 <select>
                  <option>Montaña</option>
                  <option>Ruta</option>
                  <option>Aduana</option>
                  <option>más de 300km</option>
                  <option>pais limitrofe</option>
                 </select>
                 <label>Seleccione porcentaje de traslado</label>
                 <select>
                  <option>20%</option>
                  <option>30%</option>
                  <option>50%</option>
                  <option>100%</option>
                 </select>
                



                </div>
           </div>
         

        </Layout>



    </div>
    </>
  )
}

export default DashBoard