import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider  } from './Context/CartContext'; //Conjunto de datos que va a ser consumido por diferentes componentes
import { LoginProvider, useLoginContext } from './Context/LoginContext';
import AppRouter from './router/AppRouter';


function App() {

  return (
    <LoginProvider> {/* Proveedor de login */}
      <CartProvider > {/* toda la app debe estar envuelto por el proveedor del contexto. Através de este se pasan los valores que los componentes van a consumor */}
          <AppRouter/> {/* Componente que renderiza el router */}
      </CartProvider> 
    </LoginProvider>
  );
}


export default App;
