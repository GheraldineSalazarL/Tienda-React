import { useForm } from '../../hooks/useForm'
import { addDoc, collection} from 'firebase/firestore' 
import { db } from "../../firebase/config"
import { useState } from 'react'
import Swal from 'sweetalert2';

const Footer = () => {
    const [register, setRegister] = useState(null)

    const {values, handleInputChange} =useForm({
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formu = {
            email: values
        }
    
        const Newsletter = collection(db, 'newsletter')

        addDoc(Newsletter, formu)
                .then((doc) => {
                    setRegister(doc)
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Email registrado',
                        showConfirmButton: false,
                        timer: 1500
                      })
                })
    }

    return (
        <footer className="bg-light pt-5">
            <div className="container-fluid mt-3 py-5 col-xl-4 col-lg-5 col-md-6 col-sm-7 col-10 ">
                <h5 className="text-center">SUSCRÍBETE EN NUESTRO NEWSLETTER</h5>
                <form onSubmit={handleSubmit}>
                    <input
                        name="email"
                        type={'email'}
                        className='form-control mt-3'
                        value={values.email}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu dirección de email"
                    />
                    <div className='d-flex justify-content-center'>
                         <button className="btn btn-warning my-3 col-12" type="submit"> REGISTRARSE </button>
                    </div>
                </form>
                <p className='text-center'> © URKUMINA 2022 Todos los derechos reservados. </p>
            </div>
        </footer>
    )
}

export default Footer