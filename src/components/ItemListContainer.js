import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { ItemList } from "./ItemList"

export const ItemListContainer = ( ) => {

    const [productos, setProductos] =useState([])

    useEffect(()=>{
        pedirDatos()
        .then ((res) => {
            setProductos = res
        })
    }, [])


    return (
        <div className="container my-5">
            <div>
                <ItemList productos={productos}/>
            </div>
        </div>
        
    )
}