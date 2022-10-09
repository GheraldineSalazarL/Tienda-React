import { Header } from '../components/Header/Header';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from '../components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from '../components/Cart/Cart';
// import {LoginScreen} from '../components/LoginScreen/LoginScreen';
import {Checkout} from '../components/Checkout/Checkout';
import { Routes, Route, Navigate } from "react-router-dom"


const PrivateRoutes = () => {

    return (
        <> 
            <Header/>
            <Routes>
                <Route path='/login' element={<Navigate to="/"/>}/> {/* cuando cae en login muestra la ruta / que es todos los productos */}
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={<ItemListContainer /> }/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/checkout' element={<Checkout />}/>
                {/* <Route path='*' element={<Error404/> }/> */}

                {/* { //Hago una nueva ruta para un usuario con otro rol
                    user.rol === "admin"
                    ?
                        <Route path='/admin' element={<AdmiinScreen />}/>
                    : null
                } */}
            </Routes>
            {/* <Footer/> */}
        </>
    )
}

export default PrivateRoutes