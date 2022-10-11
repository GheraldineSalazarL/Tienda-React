import logo from '../../assets/logo.png'
import { Cartwidget } from './Cartwidget';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { Nav, Navbar } from "react-bootstrap";
import { useLoginContext } from '../../Context/LoginContext'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm'
import Search from '../Search/Search';

export const Header = () => {
    const {user, logout} = useLoginContext()
    const [menuUser, setMenuUser] = useState(false);

    return (
        <header className='border-bottom border-warning border-3 bg-white sticky-top px-5' >
            <Navbar className='navInt d-flex justify-content-end mt-3' >
                <Link to='/' className='logo position-absolute top-0 start-50 '>  <img src={logo} width="100px" />  </Link>
                <Search />
                <Cartwidget />
                <div>
                    <button onClick={() => { setMenuUser(!menuUser); }} className='d-flex py-1 px-2 bg-white border rounded'>
                        <Icon icon="carbon:user" width='30' className='text-warning'/>
                    </button>
                    {menuUser && (
                        <div className='menuUser border border-warning rounded'>
                            <p className='py-3'>{user.user}</p>
                            { user.logged 
                                ? <button onClick={logout} className='text-danger'>Logout</button>
                                : <Link to='/login' className='text-success nav-link px-3'> Login </Link>
                            }
                            
                        </div>
                    )}                   
                </div>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" className='p-2 mt-3' >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto" >
                        <Nav.Link>
                            <Link to='/productos/living' className="nav-link" style={{color:'#3B2729'}}>LIVING</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/comedor' className="nav-link" style={{color:'#3B2729'}}>COMEDOR</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/office' className="nav-link" style={{color:'#3B2729'}}>OFFICE</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/dormitorio' className="nav-link" style={{color:'#3B2729'}}>DORMITORIO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/cocina' className="nav-link" style={{color:'#3B2729'}}>COCINA</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/baño' className="nav-link" style={{color:'#3B2729'}}>BAÑO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/sale' className="nav-link" style={{color:'#3B2729'}}>SALE</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/todo' className="nav-link" style={{color:'#3B2729'}}>TODO</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}