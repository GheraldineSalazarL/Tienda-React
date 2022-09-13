import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

export const Cartwidget = () => {
    
    return(
        <div className='d-flex ms-3 py-1 px-2 border rounded'>
            <Link to='/cart'>
                <Icon icon="akar-icons:cart" width='30' className='text-warning'/> 
            </Link>
            <p className='m-auto ps-2'> 0 </p>
        </div>
        
    );
}
