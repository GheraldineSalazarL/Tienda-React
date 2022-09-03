import logo from '../../assets/logo.png'
import { Cartwidget } from './Cartwidget';

export const Navbar = () => {
    return(
        <header> 
            <nav>
                <div className='d-flex mx-5'>
                    <a href="/#" className='p-2 m-auto'>  <img src={logo} width="150px" />  </a>
                    <Cartwidget/>
                </div>
                
                <ul>
                    <li> <a href="/#">LIVING</a> </li>
                    <li> <a href="/#">COMEDOR</a> </li>
                    <li> <a href="/#">OFFICE / ESTUDIO</a> </li>
                    <li> <a href="/#">DORMITORIO</a> </li>
                    <li> <a href="/#">COCINA</a> </li>
                    <li> <a href="/#">BAÑO</a> </li>
                    <li> <a className='sale' href="/#">SALE</a> </li>
                </ul>
            </nav>
        </header>

    );
}