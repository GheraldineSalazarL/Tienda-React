// import { LoginContext } from "../Context/LoginContext"
import { useContext } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { useForm } from '../../hooks/useForm'


export const LoginScreen = () => {

    const{login, user} = useContext(LoginContext)
    // console.log(user)
    const {values, handleInputChange} =useForm({
        email: '',
        pass: ''
    })

    // Chapado a la antigua (input por separado):
    // const [email, setEmail] = useState('') //control de estados React, el valor que recibo en un input del form lo guardo en un estado
    // const[pass, setPass] = useState('')

    // const handleEmailChange = (e) => {
    //     console.log(e.target.value) //con e.target.value camputuro el value del input
    //     setEmail(e.target.value) //le digo que modifique el estado con el value que ingresa en el input
    // }
    // const handlePassChange = (e) => {
    //     console.log(e.target.value) 
    //     setPass(e.target.value) 
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="container py-5">
                <input
                    name="email"
                    type={'email'}
                    className='form-control'
                    value={values.email} // enlazo este input con el estado
                    onChange={handleInputChange}
                />
                <input
                    name="pass"
                    type={'password'}
                    className='form-control'
                    value={values.pass} 
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit"> Ingresar </button>
            </form>
        </div>
    )
}