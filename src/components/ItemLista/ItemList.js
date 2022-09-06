import { Item } from "../Item/Item"

export const ItemList = ({productos = []}) => {
    return (
        <div className="m-5">
            <h2>Encuentra todo lo que quieres</h2>
            
            <div className="row ">
                {productos.map((prod)=> <Item  producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}
