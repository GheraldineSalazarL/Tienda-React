import { useEffect, useState } from "react"
// import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemLista/ItemList"
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"

export const ItemListContainer = ( ) => {

   
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId 
        ? query(productosRef, where('category','==',categoryId))
        : productosRef
        
        getDocs(q)
            .then ((resp)=>{
                const productosDB = resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))

                setProductos(productosDB)
            })
            .finally(() => {
                        setLoading(false)
                    })
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


    return (
        <div className="ItemListContainer">
            {
                loading ? <Loader/> : <ItemList productos={productos}/>
            }
        </div>
    )
}