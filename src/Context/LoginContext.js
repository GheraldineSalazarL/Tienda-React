import { createContext, useContext, useState } from "react";

export const LoginContext = createContext() //creo contexto

const usuarios = [
    {
        email: 'abc@abc.com',
        password: '1234'
    },
    {
        email: 'santiago@denis.com',
        password: '1234'
    },
    {
        email: 'conrado@lanusse.com',
        password: 'coder'
    }
]

export const LoginProvider = ({children}) => {//el provider recive los children por propiedades y los renderiza

    const [user, setUser] = useState({
        user: '',
        logged: false
    }) //Estado inicial 

    const login = (values) => {
        //recorre en objeto usuarios y encuentra uno que haga match con el email y pass que viene de values LoginScreen, dos opciones: 

        // const match = usuarios.find(user => (user.email === values.email && user.password === values.pass))  

        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true
                })
            } else {
                alert("Password incorrecto")
            }
        } else {
            alert("Email incorrecto")
        }
    } //funcion de login

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    } //función de logout

    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext) //Llamo esto y me retorna el proveedor
} //Puedo condicionar los componentes (ej: ItemListContainer)


