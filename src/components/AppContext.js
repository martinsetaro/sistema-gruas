import { createContext } from "react";
import React,{useState} from "react";



export const contexto = createContext();

const {Provider} = contexto;

const AppContext = ({children}) => {

    const[empresa,setEmpresa] = useState('');
    const[turno,setTurno]= useState('');
    const [registroEmpresa,setRegistroEmpresa] = useState('')
    const [registroTurno, setRegistroTurno] = useState('')

    console.log(empresa,turno)
   

    return (
        <Provider value={{setEmpresa,setTurno,turno,empresa,setRegistroEmpresa,setRegistroTurno,registroEmpresa,registroTurno}}>
            {children}
        </Provider>
    );
}

export default AppContext;