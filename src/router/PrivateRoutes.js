import PublicRoutes from "./PublicRoutes"
import { Routes, Route, Navigate } from "react-router-dom"
const PrivateRoutes = () => {
    

    return (
        <> 
            <PublicRoutes/>
            <Routes>
                <Route path='/login' element={<Navigate to="/"/>}/>
            </Routes>
            
        </>
    )
}

export default PrivateRoutes