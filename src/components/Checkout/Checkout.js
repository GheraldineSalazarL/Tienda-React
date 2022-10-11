import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, doc, getDocs, writeBatch, query, where, documentId} from 'firebase/firestore' 
import { db } from "../../firebase/config"
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'

export const Checkout = () => {

  const {cart, cartTotal, terminarCompra} = useCartContext() 
  const [orderId, setOrderId] = useState(null)

  const {values, handleInputChange} =useForm({
    nombre: '',
    dni: '',
    email: '',
    direccion: '',
    piso:'',
    localidad:'',
    provincia:'',
    postal:'',
    telefono:'',
    infomacion:'' 
  })
  
  const handleSubmit = async (e) => { 

    const orden = {
      comprador: values,
      items: cart,
      total: cartTotal()
    }
    
    const batch = writeBatch(db)
    const ordenesRef = collection(db, 'ordenes') 
    const productosRef = collection(db, 'productos')
    const q = query(productosRef, where (documentId(), 'in', cart.map(item => item.id))) 
    const productos = await getDocs(q)

    const outOfStock = []

    productos.docs.forEach((doc) => { 
      const itemInCart = cart.find(item => item.id === doc.id) 
      if(doc.data().stock >= itemInCart.cantidad){
        batch.update(doc.ref,{
            stock: doc.data().stock - itemInCart.cantidad
        }) 
      } else{
        outOfStock.push(itemInCart) 
      } 
    }) 

    if (outOfStock.length === 0){
      batch.commit() 
        .then(()=>{
          addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                terminarCompra()
            })
        })
    } else {
        Swal.fire({
          position: 'center-center',
          icon: 'warning',
          title: 'No hay suficiente stock',
          showConfirmButton: false,
          timer: 1500
        })
    }
  }
  if (orderId) {
    return (
        <div className="container my-5 mx-auto col-xl-6 col-lg-6">
          <div className='border border-3 p-4 text-center py-5 my-5'>
              <h3>Compra exitosa!</h3>
              <hr/>
              <h5>Tu número de orden es: <strong>{orderId}</strong></h5>
              <Link to="/" className='btn btn-warning'>Volver a la tienda</Link>
          </div>
        </div>
    )
  }

  if (cart.length===0){
    return <Navigate to="/"/>
  } 

  return (
    <div className="container my-5 border border-2 rounded p-3 col-lg-6">
        <h3>Datos de envío</h3>
        <hr/>
        <form onSubmit={handleSubmit}>
            <input 
                name="nombre"
                onChange={handleInputChange} 
                value={values.nombre}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Nombre completo"
                required
            />
            <input 
                name="dni"
                onChange={handleInputChange}
                value={values.dni}
                type={'number'} 
                className="my-3 form-control" 
                placeholder="DNI"
                required
            />
            <input 
                name="email"
                onChange={handleInputChange}
                value={values.email}
                type={'email'} 
                className="my-3 form-control" 
                placeholder="Email"
                required
            />
            <input 
                name="direccion"
                onChange={handleInputChange}
                value={values.direccion}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Dirección"
                required
            />
            <input 
                name="piso"
                onChange={handleInputChange}
                value={values.piso}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Piso (opcional)"
            />
            <input 
                name="localidad"
                onChange={handleInputChange}
                value={values.localidad}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Localidad"
                required
            />
            <input 
                name="provincia"
                onChange={handleInputChange}
                value={values.provincia}
                type={'text'} 
                className="my-3 form-control" 
                placeholder="Provincia"
                required
            />
            <input 
                name="postal"
                onChange={handleInputChange}
                value={values.postal}
                type={'number'} 
                className="my-3 form-control" 
                placeholder="Código postal"
                required
            />
            <input 
                name="telefono"
                onChange={handleInputChange}
                value={values.tlefono}
                type={'tel'} 
                className="my-3 form-control" 
                placeholder="Télefono"
                required
            />
            <input 
                name="informacion"
                onChange={handleInputChange}
                value={values.informacion}
                type={'textarea'} 
                className="my-3 form-control" 
                placeholder="Información adicional (opcional)"
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
  )
}
