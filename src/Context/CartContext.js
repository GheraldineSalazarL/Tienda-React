import {createContext, useContext} from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext() //cremos el conexto 

export const CartProvider = ({children}) => { //exportamos el contexto por medio de un proveedor

    const [cart, setCart]= useState ([])

    const addToCart = (item) => {
        setCart ([...cart, item])
    } //traigo los valores de los item agregados al carro desde itemDetail

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }
    //find= recorre el carrito y retorna el elemeto que encuentra
    //some= tambien recorre el carrito pero retorna un true o false

    const removeItem = (id) => {
        setCart (cart.filter((item) => item.id !== id))
    } //recibo el id de un item y filtro y guardo todos los items cuyo id sea diferente al id del item recibido, eso es consumido con Cart

    const cartQuantity = () => {
        return cart.reduce((acc,item) => acc + item.cantidad, 0)
    } //reduce resive el acumulador de cada item, retorna la cantidad de item añadidos al carro, es consumido por cardWidget

    const cartTotal = () => {
        return cart.reduce((acc,item) => acc + item.cantidad * item.precio, 0)
    } //Acumulador de los items por el precio de cada item, es consumido por Cart

    const emptyCart = () => {
        Swal.fire({
            title: 'Eliminar el producto?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })

    } //Vaciar carrito, es consumido por Cart

    const terminarCompra = () => { // se va a Checkout
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart,
            isInCart, 
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem, 
            terminarCompra
          }}>
            {children}
            
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}

