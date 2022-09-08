import {ItemCount} from '../ItemCount/ItemCount';

export const ItemDetail = ({item}) => {

    return (
        <div className="ItemDetail m-5 row justify-content-center">
            <div className="col-lg-1 1col-lg-1 col-md-2 col-sm-none">
                <img src={item.img1} className="img-fluid w-100 my-1"/>
                <img src={item.img1} className="img-fluid w-100 my-1"/>
                <img src={item.img1} className="img-fluid w-100 my-1"/>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-8 col-sm-10">
                <img src={item.img1} className="img-fluid w-100 m-1"/>
            </div>
            <div className="ItemDetailText col-xl-6 col-lg-5 col-md-12 col-sm-12 ms-3 py-2">
                <h6 className='py-1'>Categoría: {item.category}</h6>
                <h1 className='py-1'>{item.nombre}</h1>
                <h3 className='py-1'>{item.precio}</h3>
                <ItemCount stock={item.stock} />
                <p className='py-1'>{item.desc}</p>
            </div>
        </div>
    )
}

