import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/Loader"

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
                loading ? <Loader/> : <ItemDetail item={item} />
            }
            

        </div>
    )
}

