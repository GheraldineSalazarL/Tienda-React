import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams()

    // const [loading, setLoading] = useState(true)


    useEffect(() => {
        // setLoading(true)

        pedirDatos()
        console.log(item)
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) ) //Pongo number para parseaarlo ya que param es un string
            })

    }, [])

    return (
        <div>
            {
                // loading
                // ? <h2>Loading...</h2> :
                <ItemDetail item={item} />
            }
            

        </div>
    )
}

