import { useContext } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { useForm } from '../../hooks/useForm'


export const LoginScreen = () => {

    const{login, user} = useContext(LoginContext)
    const {values, handleInputChange} =useForm({
        email: '',
        pass: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return(
        <div className="login container-fluid ">
            <div className="loginInt col-xl-4 p-5 rounded ">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="">
                    <input
                        name="email"
                        type={'email'}
                        className='form-control my-3'
                        value={values.email} 
                        onChange={handleInputChange}
                    />
                    <input
                        name="pass"
                        type={'password'}
                        className='form-control my-3'
                        value={values.pass} 
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-warning col-xl-12 m-auto" type="submit"> Ingresar </button>
                </form>
            </div>
        </div>
    )
}