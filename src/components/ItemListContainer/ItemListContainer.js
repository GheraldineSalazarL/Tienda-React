import { ItemList } from "../ItemLista/ItemList"
import { Loader } from "../Loader/Loader"
import { useProductos } from "../../hooks/useProductos"

export const ItemListContainer = ( ) => {
   
    const {productos, loading, categoryId} =useProductos()

    return (
        <div className="ItemListContainer">
            {
                loading ? <Loader/> : <ItemList productos={productos} categoryId={categoryId}/>
            }
        </div>
    )
}