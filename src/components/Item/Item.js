import {Link} from 'react-router-dom'

export const Item = ({producto}) => {
    return (
        <div className="Item col-lg-3 col-md-4 col-sm-6 mb-2 h-100">
                <Link to={`/item/${producto.id}`} className="ItemInt"> 
                    <div className='d-flex justify-content-center'>   
                        <img src={producto.img1} className="imag1 img-fluid h-100 "/>
                        <img src={producto.img2} className="imag2 img-fluid h-100 "/>
                    </div>
                    <h5>{producto.nombre}</h5>
                    <h6 className={producto.promo ? "text-decoration-line-through" : "text-decoration-none"}>$ {producto.precio}</h6> 
                    <h6 className={producto.promo ? "visible text-danger" : "invisible"}>$ {producto.precio-(producto.promo*producto.precio)/100}</h6>          
                </Link>
        </div> 
    )
}