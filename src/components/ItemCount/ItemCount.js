
export const ItemCount = ( {stock, counter, setCounter, handleAñadir} ) =>{
    // const[counter, setCounter] =useState(1)

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
        <div className="buttonsCount d-flex my-4">
            <button onClick={onDecrement} className={counter===1 ? "btn btn-danger" : "btn btn-warning"} disabled={counter===1}>-</button>
            <h4 className="px-2 my-auto"> {counter} </h4>
            <button onClick={onAdd} className={counter===stock ? "btn btn-danger" : "btn btn-warning"} disabled={counter===stock}>+</button>
            <button onClick={handleAñadir} className="btn btn-warning mx-4 px-5" disabled={stock<=0}>Añadir al carrito</button>
        </div>
    )
}



