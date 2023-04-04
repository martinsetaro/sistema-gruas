import React,{useState , createContext , useEffect } from "react";



export const contexto = createContext();

const {Provider} = contexto;

const AppContext = ({children}) => {

    const[turno,setTurno]= useState('');
    const[empresa,setEmpresa] = useState('');
    const [registroEmpresa,setRegistroEmpresa] = useState('')
    const [registroTurno, setRegistroTurno] = useState('')

    console.log(empresa,turno)
     
    useEffect(() => {

if(!empresa == '' && !turno == ''){
    localStorage.setItem('empresas', empresa);
    localStorage.setItem('turnos', turno);
}else 
{
    setEmpresa(localStorage.getItem('empresas'))
    setTurno(localStorage.getItem('turnos'))
}
        

      }, [empresa, turno]);
      
     



   
   

    return (
        <Provider value={{setEmpresa,setTurno,turno,empresa,setRegistroEmpresa,setRegistroTurno,registroEmpresa,registroTurno}}>
            {children}
        </Provider>
    );
}

export default AppContext;