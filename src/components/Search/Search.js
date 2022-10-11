import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import { Nav, Navbar } from "react-bootstrap";


const Search = () => {

    const [filtrar, setFiltrar] = useState({})    
    const {values, handleInputChange} =useForm({
        search: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setFiltrar(values)
    }

    return (
        <Navbar>
            <form className="d-flex border rounded">
                <input
                    name="search"
                    className="form-control me-2 border-0"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search" 
                    onChange={handleInputChange}
                    value={values.search}
                />
                <button 
                    className="btn btn-outline" type="submit">
                    <Icon icon="cil:magnifying-glass" width='25' className='text-warning' />
                </button>
            </form>
        </Navbar>
    )
}

export default Search