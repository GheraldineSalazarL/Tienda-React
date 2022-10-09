import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, doc, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore' //el método addDoc es para almacenar info en Firebase
import { db } from "../../firebase/config"
import { useForm } from '../../hooks/useForm'

export const Checkout = () => {

  const {cart, cartTotal, terminarCompra} = useCartContext() //traigo valores del context
  const [orderId, setOrderId] = useState(null)

  //Aquí iba lo que dice en useForm (hooks), y lo remplazo por: 
  const {values, handleInputChange} =useForm({
    nombre: '',
    email: '',
    direccion: '', //esto es el estado inicial que envío como parámetro init a useForm
  })
  
  

  const handleSubmit = async (e) => { //con async digo que es una función asincronica
    e.preventDefault() //esto es para que no se recargue la app

    const orden = {
      comprador: values,
      items: cart,
      total: cartTotal()
    }
    
    //validación del formulario
    if (values.nombre.length < 2) {
      alert("Nombre incorrecto")
      return
    }
    if (values.email.length < 2) { 
        alert("Email incorrecto")
        return 
    }

    //Verificar si antes de realizar la compra aún hay stock por lote:
    const batch = writeBatch(db)
    const ordenesRef = collection(db, 'ordenes') //orderes: nombre de la coleccion 
    const productosRef = collection(db, 'productos')
    const q = query(productosRef, where (documentId(), 'in', cart.map(item => item.id))) //voy a traer de la coleccion productos todos los documentos cuyo Id del documento se encuentre en el listado mapeado (es decir, los id de los item agregados al carro)
    const productos = await getDocs(q)

    const outOfStock = []

    productos.docs.forEach((doc) => { //por cada documento que tengo 
      const itemInCart = cart.find(item => item.id === doc.id) //devuelveme el item cuya propiedad id sea igual al documento id, así se accede al item correspondiente 
      if(doc.data().stock >= itemInCart.cantidad){
        batch.update(doc.ref,{
            stock: doc.data().stock - itemInCart.cantidad
        }) //agrego una orden de update al lot. Si da Ok agrego ordenes al batch, si no, 
      } else{
        outOfStock.push(itemInCart) 
      } //llevo una copia al outOfStock
    }) //si todo esto está OK (es decir, outOfStock está vacio), entonces mando a Firebase:

    if (outOfStock.length === 0){
      batch.commit() //ejecuto todas las ordenes de update a la vez 
        .then(()=>{
          //Firebase para guardar información en la BD
          addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                terminarCompra()
            })
        })
    } else { //cuando haya productos sin stock
        alert("No hay stock suficiente")
    }



    //Tener en cuenta que los siguiente funciona cuando es solo con un documento 
    // cart.forEach((item) => {
    //   const docRef = doc(db, 'productos', item.id)
    //   getDoc(docRef) //traigo los valires del documento del item
    //     .then((doc) => {
    //       if (doc.data().stock >= item.cantidad) { //si el valor del stock del docuemnto es mayor al que quiere comparar, entonces
    //         updateDoc(docRef, {
    //           stock: doc.data().stock - item.cantidad
    //         }) //actualizo el valor del stock del documento descontando lo comprado
    //       } else { //si no es mayor, aviso que no hay stock
    //         alert("No hay stock suficiente")
    //     }
    //   })
    // })
  // //Firebase para guardar información en la BD
  // addDoc(ordenesRef, orden)
  //     .then((doc) => {
  //         console.log(doc.id)
  //         setOrderId(doc.id)
  //         terminarCompra()
  //     })
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
                onChange={handleInputChange} //Se dispara cada vez que tipee en el input
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
