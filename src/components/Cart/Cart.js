import { Link, Navigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { Icon } from '@iconify/react';

export const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useCartContext() 

  if(cart.length===0){
    return(
        <div className='container my-5 border border-3 rounded p-5 col-xl-6'>
            <h3>Tu carrito esta vacío</h3>
            <hr/>
            <Link to="/" className='btn btn-warning'>Ir a comprar</Link>
        </div>
    )
  }
 
    return (
        <div className="container my-5">
            
                    <h3>Carrito de compras</h3>
                    <div className='row col-xl-12 m-auto'>
                        <div className='col-xl-8 me-4 col-lg-8 col-md-8 col-ms-12 col-12'>
                            { cart.map((item) => (
                                <div className='d-flex col-lg-12' key={item.id}>
                                    <img src={item.imagen} className="img-fluid p-2  col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2"/>
                                    <div className='p-2 flex-grow-1'>
                                        <h4>{item.nombre}</h4>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p>Color: {item.color}</p>
                                        <p></p>
                                    </div>
                                    <div className='d-flex flex-column p-2 col-xl-2'>
                                        <h6>Precio: {item.precio}</h6>
                                        <button onClick={() => removeItem(item.id)} className="btn ms-5"><Icon icon="akar-icons:trash-can" width='30' className='text-danger' /></button>
                                    </div>                        
                                </div>
                            ))}
                            <hr/>
                            <button onClick={emptyCart} className="btn btn-danger mb-3">Vaciar carrito</button>
                        </div>
                        <div className='border border-1 p-3  h-100 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                            <h5>Resumen</h5>
                            <hr/>
                            <h6>Total: ${cartTotal()}</h6>
                            <Link className='btn btn-success mx-auto my-2 col-xl-12' to="/checkout">Terminar mi compra</Link>
                        </div>
                    </div>  
        </div>
    )
}

