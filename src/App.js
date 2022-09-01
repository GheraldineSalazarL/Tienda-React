import './App.scss';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemCount } from './components/ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='page'>      
          <Navbar/>
          <ItemListContainer />
          {/* <div className='row d-flex justify-content-center'>
              <ItemCount product={{name:"Escritorio Sahara", price: "300000", stock: "5"}}/>
              <ItemCount product={{name:"Comedor Clasico", price: "1500000", stock: "3"}}/>
              <ItemCount product={{name:"Mueble de Cocina Alto", price: "6000000", stock: "7"}}/>
              <ItemCount product={{name:"Mueble de Cocina Bajo", price: "7000000", stock: "7"}}/>
          </div> */}
          
    </div>
  );
}


export default App;
