import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

export const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

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
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2">Remove</button>
                        <hr/>
                    </div>
                ))}


                <h4>Total: ${cartTotal()}</h4>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                <Link className='btn btn-success mx-2' to="/checkout">Terminar mi compra</Link>
    </div>
)
}

