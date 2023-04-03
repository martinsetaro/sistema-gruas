import style from '../styles/empresas.module.scss';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { contexto } from '@/components/AppContext';
import Layout from '@/components/Layout';

const Empresas = () => {

const{setEmpresa,setTurno} = useContext(contexto);
const [nombreEmpresa,setNombreEmpresa] = useState('');
const [tipoTurno,setTipoTurno] = useState('');



const handlerEnviarDatos = ()=>{
setEmpresa(nombreEmpresa);
setTurno(tipoTurno);

}


  return (
    <Layout>
    <div className={style.container}>
      
      <div className={style.table}>
        <h2>Empresas</h2>
      <select 
      onChange={(e) => {setNombreEmpresa(e.target.value)}}
      className={style.selectores}>
        <option>Seleccionar empresa</option>
        <option value="ika">Ika</option>
        <option value="kilka">Kilka</option>
        <option value="orbis">Orbis</option>
      </select>
      <h2>Servicios de grua</h2>
      <select 
      onChange={(e) => {setTipoTurno(e.target.value)}}
      className={style.selectores}>
        <option>Seleccionar turno</option>
        <option value="diurno">Diurno</option>
        <option value="nocturno">Nocturno</option>
        
      </select>
      <Link href="/DashBoard"><button 
      onClick={handlerEnviarDatos}
      className={style.btn}>Ingresar al sistema</button></Link>
      </div>
    </div>
    </Layout>
  )
}

export default Empresas
