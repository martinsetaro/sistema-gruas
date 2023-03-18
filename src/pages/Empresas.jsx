import style from '../styles/empresas.module.scss';
import Link from 'next/link';

const Empresas = () => {
  return (
    <div className={style.container}>
      
      <div className={style.table}>
        <h2>Empresas</h2>
      <select className={style.selectores}>
        <option>Seleccionar empresa</option>
        <option>Ika</option>
        <option>Kilca</option>
        <option>Orbis</option>
      </select>
      <h2>Servicios de grua</h2>
      <select className={style.selectores}>
        <option>Seleccionar turno</option>
        <option>Diurno</option>
        <option>Nocturno</option>
        
      </select>
      <Link href="/DashBoard"><button className={style.btn}>Ingresar al sistema</button></Link>
      </div>
    </div>
  )
}

export default Empresas
