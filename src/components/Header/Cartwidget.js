import { Icon } from '@iconify/react';

export const Cartwidget = () => {
    
    return(
        <div className='d-flex ms-3 py-1 px-2 border rounded'>
            <a href="/#" className='text-warning'>
                <Icon icon="akar-icons:cart" width='30'/> 
            </a>
            <p className='m-auto ps-2'> 0 </p>
        </div>
        
    );
}
