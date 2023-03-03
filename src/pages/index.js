import Head from 'next/head';
import Image from 'next/image';
import style from '../styles/home.module.scss';
import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import logEmp from '../../public/assets/img/logoEmpresa.png'
import { useRouter } from 'next/router'








const Home = () => {

const[user,setUser]= useState('');
const [ pass,setPass] = useState('');

const router = useRouter();




const handlerEnviar = (e)=>{
  e.preventDefault();

  if(user.toUpperCase() === "PEDRO" && pass === "1234"){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Datos correctos',
      showConfirmButton: false,
      timer: 3000
    })
  setTimeout(() => {
    router.push('/DashBoard');
  }, 3000);
    
  
  }else 
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algunos datos no son correctos!',
      footer: '<a href="">Verifique y vuelva a intentar</a>'
    })
    
  }



}





  return (
    <>
    <Head>
      <link rel="icon" href="/assets/img/grua.ico" type="image/x-icon" />
      <meta name="author" content="Martin Setaro 2023" />
      <meta name="description" content="sistema de registro de viajes para grúas y remolques"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Sistema de grúas y remolques</title>
    </Head>
    <div className={style.container}>
      <div className={style.loginContainer}>
        <Image src={logEmp} alt="logo" width={120} height={120}/>
        <h2>Sistema para grúas y remolques.</h2>
        <div className={style.login}>

           <label>Usuario</label>
           <input
            onChange={(e)=> { setUser(e.target.value)}}
            type="text" placeholder="Ingrese su usuario"/>
           <label>Contraseña</label>
           <input
            onChange={(e)=> { setPass(e.target.value)}}
            type="password" placeholder="Ingrese su contraseña"/>
          <button
           onClick={handlerEnviar}
            className={style.btn}>Enviar</button>
        </div>
      </div>
     
    </div>
</>


  )
}

export default Home;