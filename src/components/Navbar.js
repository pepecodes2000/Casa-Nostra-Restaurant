import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/Logo.png" alt="Logo" className="logo" style={{ width: '120px', height: 'auto' }}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link to="/" className="nav-link"><FontAwesomeIcon icon={faHome} /> Inicio</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/menu' ? 'active' : ''}`}>
                                <Link to="/menu" className="nav-link"><FontAwesomeIcon icon={faUtensils} /> Menú</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contacto' ? 'active' : ''}`}>
                                <Link to="/contacto" className="nav-link"><FontAwesomeIcon icon={faPhone} /> Contacto</Link>
                            </li>
                            <li className={`nav-item`}>
                                <a href="https://www.facebook.com/profile.php?id=100076219538221" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;
