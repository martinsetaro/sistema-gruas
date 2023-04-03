import Head from 'next/head';
import style from '../styles/dashboard.module.scss';
import Layout from '@/components/Layout';
import React, { useState , useEffect, use } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { marcas } from '../components/dbMarcas'
import { useContext } from 'react';
import { contexto } from '@/components/AppContext';









const DashBoard = () => {

 const { turno , empresa } = useContext(contexto);


  const [date , setDate] = useState(new Date());
  const [marca,setMarca] = useState(marcas);
  const [fabricante,setFabricante] = useState('');
  const [ dominio , setDominio ] = useState('')
  const [ codigo , setCodigo ] = useState('')
  const [ kilometrajeL , setKilometrajeL ] = useState(0)
  const [ kilometrajeSpp , setKilometrajeSpp ] = useState(0)
  const [ movidaLivianos , setMovidaLivianos ] = useState(0)
  const [ movidaSpp , setMovidaSpp ] = useState(0)
  const [ total , setTotal ]= useState(0)
  const [registroServicioNocturno,setRegistroServicioNocturno] = useState([]);
  const fecha = new Date();






  let subTotal = (parseInt(kilometrajeL) * 140) + (parseInt(kilometrajeSpp) * 180) + (parseInt(movidaLivianos)) + (parseInt(movidaSpp));

useEffect(()=>{

setTotal(subTotal);

},[subTotal])


async function registrarFormulario(){

  const response = await fetch(`http://localhost:4001/${empresa}/${turno}`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'

    },
    body:JSON.stringify({
            fecha:date,
            dominio:dominio,
            marcaVehiculo:fabricante,
            codigo:codigo,
            kilometrajeLiviano:kilometrajeL,
            kilometrajePesado:kilometrajeSpp,
            movidaLiviano:movidaLivianos,
            movidaPesado:movidaSpp,
            total:total
    })
  }).then( response => response.json()).then ( data => console.log(data)).catch( err => console.log(err))


}







const handlerRegistrar = () => {

registrarFormulario();

}





  return (
    <>
    <Head>
      <title>DashBoard registros</title>
    </Head>
    
    <div className={style.container}>
        <Layout>

          <div className={style.containerDash}>
            <h3>Nombre: {empresa}</h3>
            <h3>Tipo de turno: {turno}</h3>
                <h2>Servicios realizados </h2>
                
                <div className={style.formulario}>
                
                 <label>Seleccionar Fecha:</label>
                 <DatePicker
                      selected={date}
                      onChange={date => setDate(date)}
                      dateFormat="dd/MM/yyyy"
                   />
                <label>Dominio</label>
                <input 
                onChange={(e)=>{setDominio(e.target.value)}}
                type="text"  placeholder='Numero dominio'/>
                 <label>Marca del vehiculo</label>
                 <select
                
                 onChange={(e)=>{setFabricante(e.target.value)}}
                 >
                {marca.map( (item,index) =>{
                  return(
                    <option
                    value={item} key={index}>{item}</option>
                  )
                })}
                 </select>
                 <label>Codigo</label>
                <input 
                onChange={(e)=>{setCodigo(e.target.value)}}
                type="text" placeholder='Ingrese codigo'/>
                <label>Kilometraje Recorrido Liviano ($140)</label>
                <input
                onChange={(e)=>{setKilometrajeL(e.target.value)}} 
                type="number" min="0" max ="1000" placeholder='Kilometraje liviano' value={kilometrajeL} />
                <label>Kilometraje Recorrido S.P y P ($180)</label>
                <input
                onChange={(e)=>{setKilometrajeSpp(e.target.value)}} 
                type="number" min="0" max ="1000" placeholder='Kilometraje S.P y P' value={kilometrajeSpp}/>
                <label>Movida Livianos ($5000)</label>
                 <input 
               onChange={(e)=>{setMovidaLivianos(e.target.value)}} 
                 type="number" min="0" max="20000"  />
                 <label>Movida SP y P ($6000)</label>
                 <input 
                 onChange={(e)=>{setMovidaSpp(e.target.value)}} 
                 type="number" min="0" max="20000" />
                 <h3>Total</h3>
                 <h2>$ {total}</h2>
                
                <button 
                onClick={handlerRegistrar}
                className={style.btn}>Registrar servicio</button>



                </div>
           </div>
         

        </Layout>



    </div>
    </>
  )
}

export default DashBoard