import {createContext, useContext} from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext() 
export const CartProvider = ({children}) => { 

    const [cart, setCart]= useState ([])

    const addToCart = (item) => {
        setCart ([...cart, item])
        console.log(item)
    } 

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const removeItem = (id) => {
        setCart (cart.filter((item) => item.id !== id))
    } 

    const cartQuantity = () => {
        return cart.reduce((acc,item) => acc + item.cantidad, 0)
    }
    const cartTotal = () => {
        return cart.reduce((acc,item) => acc + item.cantidad * item.precio, 0)
    } 

    const emptyCart = () => {
        Swal.fire({
            title: '¿Estás seguto que quieres eliminar tu carrito?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#7c0707',
            cancelButtonColor: '#029028',
            confirmButtonText: 'Si, eliminar mi carrito'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    } 

    const terminarCompra = () => { 
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

