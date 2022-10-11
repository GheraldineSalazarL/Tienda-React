import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import { db } from '../firebase/config'

export const useDocumentos = () => {

    const [item, setItem] = useState({ })
    const {itemId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId) //Aqui llamo el Id
        getDoc(docRef)
            .then ((doc)=>{
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                        setLoading(false)
                    })
    }, [])

    return ({
        item, loading
    })
}

