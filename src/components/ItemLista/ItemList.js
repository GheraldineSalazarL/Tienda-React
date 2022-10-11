import { Item } from "../Item/Item"

export const ItemList = ({productos = [] , categoryId = []}) => {
    return (
        <div className="ItemList m-5">
            <h2 className="text-uppercase">{categoryId}</h2>
            
            <div className="Items row ">
                {productos.map((prod)=> {
                    if(prod.stock>0){
                        return <Item  producto={prod} key={prod.id}/>
                    } else{
                        return null
                    }
                })} 
            </div>
        </div>
    )
}
