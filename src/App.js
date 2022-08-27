import './App.scss';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='page'>      
          <Navbar/>
          <ItemListContainer user="Gheraldine" likes={{like1:"Escritorio", like2:"Cocina", like3:"Baño"}}/>
    </div>
  );
}


export default App;
