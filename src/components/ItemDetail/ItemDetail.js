import {ItemCount} from '../ItemCount/ItemCount';
import { useState } from "react";
import Select from '../Select/Select';
import { Link } from 'react-router-dom'
import { useCartContext } from "../../Context/CartContext"
import Carousel from 'react-bootstrap/Carousel'


export const ItemDetail = ({item}) => {

    const { addToCart, isInCart } = useCartContext() 

    const[cantidad, setCantidad] =useState(1)
    const[color, setColor]=useState(item.options[0].value)

    const handleAñadir = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            imagen: item.img1,
            cantidad, 
            color
        }
        addToCart(itemToCart)
    }


    return (
        <div className="ItemDetail m-5 row justify-content-center">
            <div className="col-xl-1 col-lg-1 col-lg-1 col-md-2 d-none d-md-block">
                <img src={item.img1} className="img-fluid w-100 my-1 border runded"/>
                <img src={item.img2} className="img-fluid w-100 my-2 border runded"/>
                <img src={item.img3} className="img-fluid w-100 my-1 border runded"/>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-12">
                <Carousel className="">
                    <Carousel.Item>
                        <img src={item.img1} className="d-block w-100"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item.img2} className="d-block w-100"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={item.img3} className="d-block w-100"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="ItemDetailText col-xl-6 col-lg-5 col-md-12 col-sm-12 ms-3 py-2">
                <h6 className='py-1'>Categoría: {item.category}</h6>
                <h1 className='py-1'>{item.nombre}</h1>
                {item.promo && <h5 style={{color:'red'}}>{item.promo}% OFF!!</h5>}
                <div className='d-flex'>
                    <h3 className={`me-3 ${item.promo ? "text-decoration-line-through" : "text-decoration-none"}`}>${item.precio}</h3>
                    <h3 className={`ms-3 ${item.promo ? "visible text-danger" : "invisible"}`}>${item.precio-(item.promo*item.precio)/100}</h3>
                </div>
                <Select options={item.options} onSelect={setColor}/>

                <br/>

                {isInCart(item.id) 
                    ?  <Link to="/cart" className="buttonFinal btn px-5 col-xl-8 mt-3">Terminar mi compra</Link>
                    :  <ItemCount 
                            stock={item.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            handleAñadir={handleAñadir}
                        />
                }
                <hr/>
                <p className='py-3'>{item.desc}</p>
            </div>
        </div>
    )
}

