import logo from '../../assets/logo.png'
import { Cartwidget } from './Cartwidget';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { Nav, Navbar } from "react-bootstrap";


export const Header = () => {
    return (
        <header className='navbar-fixed-top'>
            <Navbar collapseOnSelect expand="lg" className='mx-5 my-2' >
                <Navbar.Brand >
                    <Link to='/' className='p-2 m-auto'>  <img src={logo} width="100px" />  </Link>
                </Navbar.Brand>
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
                            <Link to='/productos/dormitorio'    className="nav-link" style={{color:'#3B2729'}}>DORMITORIO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/cocina' className="nav-link" style={{color:'#3B2729'}}>COCINA</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/baño' className="nav-link" style={{color:'#3B2729'}}>BAÑO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/sale' className="sale nav-link" style={{color:'#3B2729'}}>SALE</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <form className="d-flex border rounded">
                        <input className="form-control me-2 border-0" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline" type="submit">
                            <Icon icon="cil:magnifying-glass" />
                        </button>
                    </form>
                </Nav>
                <Cartwidget />
            </Navbar>
        </header>
    );
}