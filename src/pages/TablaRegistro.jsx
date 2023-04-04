import style from '../styles/registro.module.scss'
import React, { useContext , useState , useEffect } from 'react';
import { contexto } from '@/components/AppContext';
import jsPDF from 'jspdf';
import Layout from '@/components/Layout';




const TablaRegistro = () => {


const { turno, empresa} = useContext(contexto)
const [ datos,setDatos] = useState([])
const fecha = new Date('2022-05-03');
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();

    const fecha_es = dia + '/' + mes + '/' + anio;


async function recibirDatos(){

    const response = await fetch(`https://dbruta40-production.up.railway.app/${empresa}/${turno}`)
    const data = await response.json();
    setDatos(data)
}


useEffect(()=>{

recibirDatos();

},[])





const handlerPdf = (e)=>{
e.preventDefault();
const card = e.target.parentElement;
const button = card.querySelector('button')
const dataId = button.dataset.id
console.log(dataId)
const newArray = datos.find( item => item.id == dataId)
console.log(newArray.codigo)
 
  const doc = new jsPDF({
    format: "junior-legal",
      unit: "px"
  });
 

  doc.text(20,20,"Empresa : Kilka")
  doc.line(20, 25, 200, 25)
  doc.text(20,40,"Turno : Diurno")
  doc.line(20, 45, 200, 45)
  doc.text(20,60,`Fecha :${newArray.fecha}`)
  doc.line(20, 65, 200, 65)
  doc.text(20,80,`Codigo :${newArray.codigo}`)
  doc.line(20, 85, 200, 85)
  doc.text(20,100,`Dominio :${newArray.dominio}`)
  doc.line(20, 105, 200, 105)
  doc.text(20,120,`Marca Vehiculo : ${newArray.marcaVehiculo}`)
  doc.line(20, 125, 200, 125)
  doc.text(20,140,`Kilometraje liviano : ${newArray.kmLiviano} km.`)
  doc.line(20, 145, 200, 145)
  doc.text(20,160,`Kilometraje pesado : ${newArray.kmPesado} km.`)
  doc.line(20, 165, 200, 165)
  doc.text(20,180,`Movida liviano : $ ${newArray.movidaLiviano} Ar.-`)
  doc.line(20, 185, 200, 185)
  doc.text(20,200,`Movida Pesado: $ ${newArray.movidaPesado} Ar.-`)
  doc.line(20, 205, 200, 205)
  doc.text(20,220,`Total : $ ${newArray.total} Ar.-`)
  doc.line(20, 225, 200, 225)
  doc.setFontSize(20); // Establecer el tamaño de fuente como 20
  doc.text("Servicios de Grúas Ruta 40.", 20, 325);
  doc.setFontSize(18); // Establecer el tamaño de fuente como 20
  doc.text(`Fecha entrega reporte : ${fecha_es}`, 20, 345);

  doc.save(`registro_cod_${newArray.codigo}.pdf`);




}





  return (
    <Layout>
      <h2 className={style.titulo}>Registro de servicios para : {empresa}</h2>
      <h2 className={style.titulo}>Turno realizado : {turno}</h2>
      {datos.length == 0 ? <h2 className={style.avisoRegistro}>No existen registros para esta empresa y este turno.</h2> : 
    <div className={style.container}>
      
      {datos.map(dato=>{
        return(
            <div className={style.containerRegistros} key={dato.id}>
                <h2>Fecha : {dato.fecha}</h2>
                <h2>Dominio: {dato.dominio}</h2>
                <h2>Marca Vehiculo: {dato.marcaVehiculo}</h2>
                <h2>Codigo: {dato.codigo} </h2>
                <h2>Km Liviano: {dato.kmLiviano}</h2>
                <h2>Km Pesado - S.pesado: {dato.kmPesado}</h2>
                <h2>Movida Liviano: {dato.movidaLiviano}</h2>
                <h2>Movida Pesado: {dato.movidaPesado}</h2>
                <h2>Total: $ {dato.total}</h2>
                <button
                data-id={dato.id} 
                onClick={handlerPdf}
                >enviar pdf</button>
            </div>
        )
      })}
    </div>}
    </Layout>
  )

}

export default TablaRegistro
