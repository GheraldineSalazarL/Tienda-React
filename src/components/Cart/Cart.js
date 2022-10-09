import { Link, Navigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import {BsFillTrash2Fill} from 'react-icons/bs'

export const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext() //consume cart=los item agrados al carro; CartTotal=el precio * item; emptyCart= vaciar carro, removeItem= nuevo objeto con todos los item excepto con el item con id eliminado , todo esto del context


  //En seguida hago un condicional para que cuando el carro tengo longitud = 0 (carro vacio), entonces retorne una cosa, de lo contrario se va al return de abajo
  if(cart.length===0){
    return(
        <div className='container my-5'>
            <h2>Tu carrito esta vacío</h2>
            <hr/>
            <Link to="/" className='btn btn-primary'>Ir a comprar</Link>
        </div>
    )
  }
 
  return (
    <div className="container my-5">
        
                <h2>Tu carrito</h2>
                <hr/>

                { cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>Precio: {item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <small>Color: {item.color}</small>
                        <br/>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><BsFillTrash2Fill/></button> {/* Aquí debo retornar el id del item que se selecciona por medio de removeItem, esto se va al context y context devuelve una respuesta */}
                        <hr/>
                    </div>
                ))}


                <h4>Total: ${cartTotal()}</h4>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                <Link className='btn btn-success mx-2' to="/checkout">Terminar mi compra</Link>
    </div>
)
}

