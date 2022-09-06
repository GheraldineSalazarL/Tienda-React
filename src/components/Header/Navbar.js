import logo from '../../assets/logo.png'
import { Cartwidget } from './Cartwidget';
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return(
        <header> 
            <nav>
                <div className='d-flex mx-5'>
                    <Link to='/' className='p-2 m-auto'>  <img src={logo} width="150px" />  </Link>
                    <Cartwidget/>
                </div>
                
                <ul>
                    <li> <Link to='/productos/living'>LIVING</Link> </li>
                    <li> <Link to='/productos/comedor'>COMEDOR</Link> </li>
                    <li> <Link to='/productos/office'>OFFICE / ESTUDIO</Link> </li>
                    <li> <Link to='/productos/dormitorio'>DORMITORIO</Link> </li>
                    <li> <Link to='/productos/cocina'>COCINA</Link> </li>
                    <li> <Link to='/productos/baño'>BAÑO</Link> </li>
                    <li> <Link to='/productos/sale' className='sale'>SALE</Link> </li>
                </ul>
            </nav>
        </header>

    );
}