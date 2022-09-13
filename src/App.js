import './App.scss';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,  Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
        <Header/>
        <Routes>
              <Route path='/productos/:categoryId' element={<ItemListContainer /> }/>
              <Route path='/' element={ <ItemListContainer/> }/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              {/* <Route path='*' element={<Error404/> }/> */}
        </Routes>
        {/* <Footer/> */}
           
    </BrowserRouter>    
  );
}


export default App;
