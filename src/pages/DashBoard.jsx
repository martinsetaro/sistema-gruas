import Head from 'next/head';
import style from '../styles/dashboard.module.scss';
import Layout from '@/components/Layout';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { marcas } from '../components/dbMarcas'
import { servicios } from '@/components/dbServicios';








const DashBoard = () => {

  const [date , setDate] = useState(new Date());
  const [marca,setMarca] = useState(marcas);
  const [ servicio , setServicio ] = useState(servicios)
  const fecha = new Date();



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
                <label>Numero de servicio</label>
                <input type="number" min="0" max ="1000" placeholder='Numero servicio'/>
                 <label>Seleccionar Fecha:</label>
                 <DatePicker
                      selected={date}
                      onChange={date => setDate(date)}
                      dateFormat="dd/MM/yyyy"
                   />
                 <label>Marca del vehiculo</label>
                 <select>
                {marca.map( (item,index) =>{
                  return(
                    <option value={item} key={index}>{item}</option>
                  )
                })}
                 </select>
                 <label>Patente</label>
                <input type="text" placeholder='Ingrese patente'/>
                <label>Kilometraje</label>
                <input type="number" min="0" max ="1000" placeholder='Kilometraje'/>
                 <label>Servicios</label>
                 <select>
                 {servicio.map( (item,index) =>{
                  return(
                    <option value={item.porcentaje} key={index}>{item.nombre}</option>
                  )
                })}
                 </select>
                 <label>Movida</label>
                 <input type="number" min="0" max="10000"/>
                
                <button className={style.btn}>Registrar servicio</button>



                </div>
           </div>
         

        </Layout>



    </div>
    </>
  )
}

export default DashBoard