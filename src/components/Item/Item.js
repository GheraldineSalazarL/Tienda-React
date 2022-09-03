export const Item = ({producto}) => {
    return (
            <div className="w-25 p-3 justify-content-center"> 
                <div >
                    <img src={producto.img}/>
                    <h4>{producto.nombre}</h4>
                    <p>Precio: {producto.precio}</p>
                    <small>Stock: {producto.stock}</small>
                    <p>{producto.desc}</p>
                    <a className="btn btn-primary my-2"> Ver más</a>
                </div>
                
            </div>
            )
}