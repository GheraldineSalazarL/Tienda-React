import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/Loader"
import { useDocumentos } from "../../hooks/useDocumentos"

export const ItemDetailContainer = () => {

    const {item, loading} =useDocumentos()

    return (
        <div className="ItemDetailContainer">
            {
                loading ? <Loader/> : <ItemDetail item={item} />
            }
        </div>
    )
}

