export const ItemDetail = ({item}) => {

    return (
        <div >
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
        </div>
    )
}

