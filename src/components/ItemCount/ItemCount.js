import { useState } from "react"

export const ItemCount = ( {stock} ) =>{
    const[counter, setCounter] =useState(1)

    const onAdd  = () => {
        if(counter<stock){
            setCounter(counter + 1)
        }
    }
    const onDecrement = () => {
        if(counter>1){
            setCounter(counter - 1)
        }
    }

    return (
        <div className="text-center">
            <button onClick={onDecrement} className="btn btn-warning">-</button>
            <span className="m-auto"> {counter} </span>
            <button onClick={onAdd} className="btn btn-warning">+</button>
            <button className="btn btn-warning mx-4" disabled={stock<=0}>Añadir al carrito</button>
        </div>
    )
}



