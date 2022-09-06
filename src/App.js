import './App.scss';
import { Navbar } from './components/Header/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,  Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
        <Navbar/>
        <Routes>
              <Route path='/productos/:categoryId' element={<ItemListContainer /> }/>
              <Route path='/' element={ <ItemListContainer/> }/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              {/* <Route path='*' element={<Error404/> }/> */}
        </Routes>
        {/* <Footer/> */}
           
    </BrowserRouter>    
  );
}


export default App;
