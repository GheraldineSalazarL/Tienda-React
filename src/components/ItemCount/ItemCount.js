
export const ItemCount = ( {stock, counter, setCounter, handleAñadir} ) =>{

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
        <div className="buttonsCount d-flex mt-4 mb-2 col-xl-10 col-lg-12">
            <div className="d-flex border border-3 rounded">
                <button 
                    onClick={onDecrement} 
                    className={`px-3 btn ${counter===1 ? "btn-danger" : "btn-ligth"}`} // Condiciono cuando cambiar de className
                    disabled={counter===1}
                >-</button>
                
                <h4 className="px-3 my-auto"> {counter} </h4>
                
                <button
                    onClick={onAdd} 
                    className={`px-3 btn ${counter===stock ? "btn-danger" : "btn-ligth"}`}
                    disabled={counter===stock}
                >+</button>
            </div>

            <button onClick={handleAñadir} className="btn btn-warning mx-4 " disabled={stock<=0}>Añadir al carrito</button>
        </div>
    )
}



