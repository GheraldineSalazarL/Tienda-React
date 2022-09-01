export const ItemList = ({productos = []}) => {
    return (
        <div className="container my-5">
            <h2>Productos</h2>

            {productos.map((prod)=>{
                return 
                <div key={prod.id}> 
                    <h4>{prod.nombre}</h4>
                </div>
            })}
        </div>
    )
}