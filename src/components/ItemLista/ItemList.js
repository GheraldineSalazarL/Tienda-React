import { Item } from "../Item/Item"

export const ItemList = ({productos = []}) => {
    return (
        <div className="my-5">
            <h2>Encuentra todo lo que quieres</h2>
            
            <div className="row d-flex">
                {productos.map((prod)=> <Item  producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}
