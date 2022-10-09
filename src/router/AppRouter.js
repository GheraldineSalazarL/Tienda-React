import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"


const AppRouter = () => {
    const{user} = useLoginContext()
  return (
    <BrowserRouter> 
        { //condiciono: esta logeado? 
          user.logged
          ? //entonces mostrar esto:
            <PrivateRoutes/>
          : //si no, moestrar esto: (es la ruta de login)
            <PublicRoutes/>
        }   
    </BrowserRouter>

  )
}

export default AppRouter