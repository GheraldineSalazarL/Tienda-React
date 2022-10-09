// import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemLista/ItemList"
import { Loader } from "../Loader/Loader"
import { useLoginContext } from "../../Context/LoginContext"
import { useProductos } from "../../hooks/useProductos"


export const ItemListContainer = ( ) => {
   
    //Aquí iba lo que dice en useProductos (hooks) y lo remplazo por: 
    const {productos, loading} =useProductos()


    //LoginContext: Puedo condicionar el ItemListContainer
    const {user} = useLoginContext() //el usuario esta logeado?

    return (
        // Muestra el catologo de productos solo si esta logeado 
        <>  
            {
                user.logged 
                ? 
                    <div className="ItemListContainer">
                        {
                            loading ? <Loader/> : <ItemList productos={productos}/>
                        }
                    </div>
                : <navigate to="/login" />
            }
        </>
    )
}