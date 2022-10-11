import { LoginScreen } from "../components/LoginScreen/LoginScreen"
import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from '../components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from '../components/Cart/Cart';
import {Checkout} from '../components/Checkout/Checkout';

const PublicRoutes = () => {
  return (
    <> 
      <Header/>
        <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/' element={ <Home/> }/>
            <Route path='/productos/todo' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer /> }/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default PublicRoutes