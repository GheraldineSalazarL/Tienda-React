// import {ItemCount} from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'


export const Item = ({producto}) => {
    return (
        <div className="Item col-lg-3 col-md-4 col-sm-6 m--2 ">
                <Link to={`/item/${producto.id}`} className="ItemInt"> 
                    <img src={producto.img1} className="imag1 img-fluid w-100"/>
                    <img src={producto.img2} className="imag2 img-fluid w-100"/>
                    <h4>{producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    {/* <small>Stock: {producto.stock}</small> */}
                    <p>{producto.desc}</p>
                    {/* <ItemCount stock={producto.stock} /> */}
            </Link>
        </div>
            
            )
}