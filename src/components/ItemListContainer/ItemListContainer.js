import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemLista/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ( ) => {

   
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div className="ItemListContainer">
            {
                loading 
                ? 
                <div class="text-center">
                    <div class="spinner-border text-warning" style={{width:'4rem', height: '4rem'}} s role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                
                : <ItemList productos={productos}/>
            }
        </div>
    )
}