import { useState } from "react"
import { Icon } from '@iconify/react';

export const ItemCount = ( {product} ) =>{
    const[counter, setCounter] =useState(1)
    const[cart, setCart] =useState(false)

    const onAdd  = () => {
        if(counter<product.stock){
            setCounter(counter + 1)
        }
    }
    const onDecrement = () => {
        if(counter>1){
            setCounter(counter - 1)
        }
    }

    const handleCart = () => {
        setCart(!cart)
        console.log(cart)
    }
    
    

    return (
        <div className="container m-1">
            <div className="card" >
                <img src="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h3 className="card-title">{product.price * counter} </h3>
                    <div className="d-flex">
                        <button onClick={onDecrement} className="btn">-</button>
                        <span className="m-auto">{counter}</span>
                        <button onClick={onAdd} className="btn">+</button>
                        <button className='cart my-auto text-warning ms-auto border-0 ' onClick={handleCart}><Icon icon="bi:cart-plus-fill" width="30" /> {cart}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



