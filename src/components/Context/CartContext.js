import {createContext, useContext} from 'react';
import { useState } from "react";


export const CartContext = createContext() 

export const CartProvider = ({children}) => {

    const [cart, setCart]= useState ([])

    const addToCart = (item) => {
        setCart ([...cart, item])
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
        setCart([])
    }

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

