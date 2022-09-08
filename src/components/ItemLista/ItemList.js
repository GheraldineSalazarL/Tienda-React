import { Item } from "../Item/Item"

export const ItemList = ({productos = []}) => {
    return (
        <div className="ItemList m-5">
            <h2>Productos</h2>
            
            <div className="Items row ">
                {productos.map((prod)=> <Item  producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}
