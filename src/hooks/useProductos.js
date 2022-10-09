import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {collection, getDocs, query, where} from "firebase/firestore" //el metodo query y where sirven para filtrar antes de traer los documentos
import { db } from '../firebase/config'

export const useProductos = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        //CONSUMIR DE FIREBASE (Hago lo mismo en ItemDetailContainer (camia el import arriba))
        //1. armar la referencia (sync)
        const productosRef = collection(db, 'productos') //productos es la colección de la base de datos

        const q = categoryId // si tengo una categoryId hacer:
        ? query(productosRef, where('category','==',categoryId)) //traeme d firebase los productos donde category sea igual a la categoryId seleccionada
        : productosRef //si no, traer todos
        
        //2. Consumir esa ref (async)
        getDocs(q)
            .then ((resp)=>{
                const productosDB = resp.docs.map((doc)=>({id: doc.id, ...doc.data()})) //retorna el id del documento y el objeto con los productos

                setProductos(productosDB)
            })
            .finally(() => {
                        setLoading(false)
                    })


        // Lo siguiente era cuando no había FIREBASE, si no un archivo data.js
        // pedirDatos()
        //     .then( (res) => {
        //         if (!categoryId) {
        //             setProductos(res)
        //         } else {
        //             setProductos( res.filter((prod) => prod.category === categoryId) )
        //         }
        //     })
        //     .catch( (error) => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [categoryId])


    return ({
        productos, loading
    })
}

