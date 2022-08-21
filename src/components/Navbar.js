import logo from '../img/logo.png'

export const Navbar = () => {
    return(
        <header> 
            <nav>
                <a href="">
                    <img src={logo} width="150px" />
                </a>

                <ul>
                    <li>
                        <a href="#">LIVING</a>
                    </li>
                    <li>
                        <a href="#">COMEDOR</a>
                    </li>
                    <li>
                        <a href="#">OFFICE / ESTUDIO</a>
                    </li>
                    <li>
                        <a href="#">HABITACIÓN</a>
                    </li>
                    <li>
                        <a href="#">COCINA</a>
                    </li>
                    <li>
                        <a href="#">BAÑO</a>
                    </li>
                    <li>
                        <a className='sale' href="#">Sale</a>
                    </li>
                </ul>

            </nav>
        </header>
    );
}