
export const ItemListContainer = ( {user, likes} ) => {


    return (
        <div className="itemListContainer d-flex justify-content-end">
            <div>
                <h6>Hola {user}, Encuentra lo que más te gusta:</h6>
                <ul className="d-flex justify-content-end">
                        <li> <a href="/#">{likes.like2}</a> </li>
                        <li className="px-3"> <a href="/#">{likes.like1}</a> </li>
                        <li> <a href="/#">{likes.like3}</a> </li>
                </ul>
            </div>
        </div>
        
    )
}