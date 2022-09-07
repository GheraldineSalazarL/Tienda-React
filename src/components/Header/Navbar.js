import logo from '../../assets/logo.png'
import { Cartwidget } from './Cartwidget';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


export const Header = () => {
    return (
        <header>
            {/* <nav>
                <div className='d-flex mx-5'>
                    <Link to='/' className='p-2 m-auto'>  <img src={logo} width="150px" />  </Link>
                    <Cartwidget />
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
            </nav> */}


            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to='/' className='p-2 m-auto'>  <img src={logo} width="100px" />  </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to='/productos/living' className="nav-link active" aria-current="page">LIVING</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos/comedor' className="nav-link">COMEDOR</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos/office' className="nav-link">OFFICE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos/dormitorio' className="nav-link">DORMITORIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos/cocina' className="nav-link">COCINA</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos/baño' className="nav-link">BAÑO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos/sale' className="sale nav-link">SALE</Link>
                            </li>
                        </ul>
                        <form className="d-flex border border-secondary rounded">
                            <input className="form-control me-2 border-0" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline" type="submit">
                                <Icon icon="cil:magnifying-glass" />
                            </button>
                        </form>
                    </div>
                    <Cartwidget />
                </div>
            </nav>


            <Navbar collapseOnSelect expand="lg" className='m-5'>
                <Navbar.Brand>
                    <Link to='/' className='p-2 m-auto'>  <img src={logo} width="100px" />  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link>
                            <Link to='/productos/living' className="nav-link" >LIVING</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/comedor' className="nav-link">COMEDOR</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/office' className="nav-link">OFFICE</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/dormitorio'    className="nav-link">DORMITORIO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/cocina' className="nav-link">COCINA</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/baño' className="nav-link">BAÑO</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/productos/sale' className="sale nav-link">SALE</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <form className="d-flex border border-secondary rounded">
                            <input className="form-control me-2 border-0" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline" type="submit">
                                <Icon icon="cil:magnifying-glass" />
                            </button>
                        </form>
                    </Nav>
                </Navbar.Collapse>
                <Cartwidget />
            </Navbar>


        </header>

    );
}