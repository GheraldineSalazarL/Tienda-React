import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemLista/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    // const [loding, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(()=>{
        pedirDatos()
        .then ((res) => {
            if (!categoryId) {
                setProductos (res)
            } else {
                setProductos( res.filter((prod) => prod.category === categoryId) )
            }
        })
    }, [categoryId])


    return (
            <div >
                <ItemList productos={productos}/>
            </div>
        
    )
}