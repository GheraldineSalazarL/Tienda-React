import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState({ })
    const {itemId} = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
        // console.log(item)
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) ) //Pongo number para parseaarlo ya que param es un string
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div className="ItemDetailContainer">
            {
                loading 
                ? 
                <div class="text-center">
                    <div class="spinner-border text-warning" style={{width:'4rem', height: '4rem'}} s role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                
                :
                <ItemDetail item={item} />
            }
            

        </div>
    )
}

