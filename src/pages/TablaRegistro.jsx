import style from '../styles/registro.module.scss'
import React, { useContext , useState , useEffect } from 'react';
import { contexto } from '@/components/AppContext';
import jsPDF from 'jspdf';




const TablaRegistro = () => {


const { turno, empresa} = useContext(contexto)
const [ datos,setDatos] = useState([])


async function recibirDatos(){

    const response = await fetch(`http://localhost:4001/kilka/diurno`)
    const data = await response.json();
    setDatos(data)
}


useEffect(()=>{

recibirDatos();

},[])


// buscar por el id 




const handlerPdf = (e)=>{
e.preventDefault();
const card = e.target.parentElement;
const button = card.querySelector('button')
const dataId = button.dataset.id
console.log(dataId)
const newArray = datos.find( item => item.id == dataId)
console.log(newArray.codigo)
 
  const doc = new jsPDF({
    format: "a4",
      unit: "px"
  });
 

  doc.text(20,20,"Empresa : Kilka")
  doc.text(20,40,"Turno : Diurno")
  doc.text(20,60,`Fecha :${newArray.fecha}`)
  doc.text(20,80,`Codigo :${newArray.codigo}`)
  doc.text(20,100,`Dominio :${newArray.dominio}`)
  doc.text(20,120,`Marca Vehiculo :${newArray.marcaVehiculo}`)
  doc.text(20,140,`Kilometraje liviano :${newArray.kmLiviano}`)
  doc.text(20,160,`Kilometraje pesado :${newArray.kmPesado}`)
  doc.text(20,180,`Movida liviano :${newArray.movidaLiviano}`)
  doc.text(20,200,`Movida Pesado:${newArray.movidaPesado}`)
  doc.text(20,220,`Total : $ ${newArray.total} Ar.-`)

  doc.save(`registro_cod_${newArray.codigo}.pdf`);




}



  return (
    <div className={style.container}>
      {datos.map(dato=>{
        return(
            <div className={style.containerRegistros} key={dato.dominio}>
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
    </div>
  )
}

export default TablaRegistro
