import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemLista/ItemList"

export const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        pedirDatos()
        .then ((res) => {
            setProductos (res)
        })
    }, [])


    return (
            <div >
                <ItemList productos={productos}/>
            </div>
        
    )
}