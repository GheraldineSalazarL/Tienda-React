import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider  } from './Context/CartContext'; 
import { LoginProvider, useLoginContext } from './Context/LoginContext';
import AppRouter from './router/AppRouter';

function App() {

  return (
    <CartProvider >
      <LoginProvider> 
          <AppRouter/> 
      </LoginProvider>
    </CartProvider> 

  );
}

export default App;
