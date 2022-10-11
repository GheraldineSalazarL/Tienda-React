import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext'

export const Cartwidget = () => {

    const { cartQuantity } = useContext(CartContext) 
    
    return(
        <div className='d-flex mx-2 py-1 px-2 border rounded'>
            <Link to='/cart'>
                <Icon icon="akar-icons:cart" width='30' className='text-warning'/> 
            </Link>
            <p className='m-auto ps-2'> {cartQuantity()} </p>
        </div>
    );
}
