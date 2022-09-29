import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from "../../firebase/config"

export const Checkout = () => {

  const {cart, cartTotal, terminarCompra} = useCartContext()
  const [orderId, setOrderId] = useState(null)

  const [values,setValues] = useState({
    nombre: '',
    email: '',
    direccion: '',
  })

  const handleInputChange = (e) => {
    setValues({
      ...values, // conserva el valor de los input y toma solo el que quero abajo 
      [e.target.name]: e.target.value // toma el name de cada input y le pone su valor 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const orden = {
      comprador: values,
      items: cart,
      total: cartTotal()
    }
    
    if (values.nombre.length < 2) {
      alert("Nombre incorrecto")
      return
    }

    if (values.email.length < 2) { 
        alert("Email incorrecto")
        return 
    }

    const ordenesRef = collection(db, 'ordenes')
    cart.forEach((item) => {
      const docRef = doc(db, 'productos', item.id)
      getDoc(docRef)
        .then((doc) => {
          if (doc.data().stock >= item.cantidad) {
            updateDoc(docRef, {
              stock: doc.data().stock - item.cantidad
            })
          } else {
            alert("No hay stock suficiente")
        }
    })
  })

  addDoc(ordenesRef, orden)
      .then((doc) => {
          console.log(doc.id)
          setOrderId(doc.id)
          terminarCompra()
      })

    
    
  }

  if (orderId) {
    return (
        <div className="container my-5">
            <h2>Compra exitosa!</h2>
            <hr/>
            <p>Tu número de orden es: <strong>{orderId}</strong></p>
        </div>
    )
  }

  if (cart.length===0){
    return <Navigate to="/"/>
  }  // control para que no pase al Checkout con items 0 

  return (
    <div className="container my-5">
        <h2>Checkout</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
            <input 
                name="nombre"
                onChange={handleInputChange}
                value={values.nombre}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Tu nombre"
            />
            <input 
                name="email"
                onChange={handleInputChange}
                value={values.email}
                type={'email'} 
                className="my-3 form-control" 
                placeholder="Email"
            />
            <input 
                name="direccion"
                onChange={handleInputChange}
                value={values.direccion}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Dirección"
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
)
}













// import { useState } from "react"
// import { Navigate } from "react-router-dom"
// import { useCartContext } from "../../context/CartContext"
// import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
// import { db } from "../../firebase/config"
// // import { useForm } from "../../hooks/useForm"

// export const Checkout = () => {

//     const { cart, cartTotal, terminarCompra } = useCartContext()

//     const [orderId, setOrderId] = useState(null)

//     const [values,setValues] = useState({
//           nombre: '',
//           email: '',
//           direccion: '',
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const orden = {
//             comprador: values,
//             items: cart,
//             total: cartTotal()
//         }
        

//         if (values.nombre.length < 2) {
//             alert("Nombre incorrecto")
//             return
//         }

//         if (values.email.length < 2) { 
//             alert("Email incorrecto")
//             return 
//         }

//         const batch = writeBatch(db)
//         const ordenesRef = collection(db, 'ordenes')
//         const productosRef = collection(db, 'productos')
    
//         const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

//         const productos = await getDocs(q)

//         const outOfStock = []
            
//         productos.docs.forEach((doc) => {
//             const itemInCart = cart.find(item => item.id === doc.id)

//             if (doc.data().stock >= itemInCart.cantidad) {
//                 batch.update(doc.ref, {
//                     stock: doc.data().stock - itemInCart.cantidad
//                 })
//             } else {
//                 outOfStock.push(itemInCart)
//             }
//         })

//         if (outOfStock.length === 0) {
//             batch.commit()
//                 .then(() => {
//                     addDoc(ordenesRef, orden)
//                         .then((doc) => {
//                             console.log(doc.id)
//                             setOrderId(doc.id)
//                             terminarCompra()
//                         })
//                 })
//         } else {
            
//             alert("Sin stock")
//             console.log(outOfStock)
//         }

//     }

//     if (orderId) {
//         return (
//             <div className="container my-5">
//                 <h2>Compra exitosa!</h2>
//                 <hr/>
//                 <p>Tu número de orden es: <strong>{orderId}</strong></p>
//             </div>
//         )
//     }

//     if (cart.length === 0) {
//         return <Navigate to="/"/>
//     }

//     return (
//         <div className="container my-5">
//             <h2>Checkout</h2>
//             <hr/>

//             <form onSubmit={handleSubmit}>
//                 <input 
//                     name="nombre"
//                     onChange={handleInputChange}
//                     value={values.nombre}
//                     type={'text'} 
//                     className="my-3 form-control" 
//                     placeholder="Tu nombre"
//                 />

//                 <input 
//                     name="email"
//                     onChange={handleInputChange}
//                     value={values.email}
//                     type={'email'} 
//                     className="my-3 form-control" 
//                     placeholder="Email"
//                 />

//                 <input 
//                     name="direccion"
//                     onChange={handleInputChange}
//                     value={values.direccion}
//                     type={'text'} 
//                     className="my-3 form-control" 
//                     placeholder="Dirección"
//                 />

//                 <button type="submit" className="btn btn-primary">Enviar</button>
//             </form>

//         </div>
//     )
// }

