import style from '../styles/header.module.scss'
import logDash from '../../public/assets/img/ruta40.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {

const router = useRouter();


const handlerLogout = (e)=>{
e.preventDefault();
router.push('/');
}

  return (
    <div className={style.header}>
        <Image src={logDash} alt="logdash" width={100} height={100}/>
        <ul>
        <Link href="/"><li>Inicio</li></Link>
          <Link href="/Registros"><li>Registros</li></Link>
          <li>Historial</li>
          <li>Contactos</li>
          <button 
          onClick={handlerLogout}
          className={style.btn} >Log out</button>
        </ul>
    </div>
  )
}

export default Header