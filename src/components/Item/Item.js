// import {ItemCount} from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'


export const Item = ({producto}) => {
    return (
            <div className="col-lg-3 col-md-4 col-sm-6 p-3"> 
                    <img src={producto.img} className="img-fluid w-100"/>
                    <h4>{producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    {/* <small>Stock: {producto.stock}</small> */}
                    <p>{producto.desc}</p>
                    {/* <ItemCount stock={producto.stock} /> */}
                    <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
            </div>
            )
}