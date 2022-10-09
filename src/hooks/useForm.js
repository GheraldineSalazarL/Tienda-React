//Puedo usar esta misma lógica para todos los formularios existentes
import { useState } from "react"

export const useForm = (init) => {

    const [values,setValues] = useState(init
    //{
    //     nombre: '',
    //     email: '',
    //     direccion: '', //El estado inicial que venga por parametro
    // }
    ) //estado para el valor de todo el formulario

    //usa una sola función para tomar todos los valores
    const handleInputChange = (e) => {
        setValues({ //nombre del estado 
            ...values, // (operador spread - desparramar) conserva el valor de los input y toma solo el que quiero abajo ->
            [e.target.name]: e.target.value // toma el name de cada input y le pone su valor 
        })
    }

    return ({
        values,
        handleInputChange
    })
}

