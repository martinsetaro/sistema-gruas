import React, { useState , useContext} from 'react'
import Layout from '@/components/Layout'
import style from '../styles/empresas.module.scss'
import { contexto } from '@/components/AppContext';
import Link from 'next/link';





const Registros = () => {

  const {setEmpresa,setTurno} = useContext(contexto);
const [nombreEmpresa,setNombreEmpresa] = useState('');
const [tipoTurno,setTipoTurno] = useState('');

console.log(nombreEmpresa,tipoTurno)

    const handlerEnviarDatos=()=>{

        
       
           setTurno(tipoTurno)
        setEmpresa(nombreEmpresa) 
        
          
        
       
        
        

    }



  return (
   <Layout>

<div className={style.container}>
      

      <div className={style.table}>
      <h4>Recuerde no dejar campos vacios</h4>
        <h2>Empresas</h2>
       
      <select 
      onChange={(e) => setNombreEmpresa(e.target.value)}
      className={style.selectores}>
        <option>Seleccionar empresa</option>
        <option value="ika">Ika</option>
        <option value="kilka">Kilka</option>
        <option value="orbis">Orbis</option>
      </select>
      <h2>Servicios de grua</h2>
      <select 
      onChange={(e) => setTipoTurno(e.target.value)}
      className={style.selectores}>
        <option>Seleccionar turno</option>
        <option value="diurno">Diurno</option>
        <option value="nocturno">Nocturno</option>
        
      </select>
      <Link href="/TablaRegistro"><button 
      onClick={handlerEnviarDatos}
      className={style.btn}>Ingresar al Registro</button></Link>
      </div>
    </div>


   </Layout>
  )
}

export default Registros
