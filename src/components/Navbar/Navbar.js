import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent px-4 py-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="logo-capsule text-decoration-none">
                    <img src="/Logo.png" alt="Logo" className="logo" style={{ width: '45px' }} />
                </Link>
                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item">
                            <Link to="/" className={`nav-item-oval nav-link ${isActive('/') ? 'active-link' : ''}`}>
                                <FontAwesomeIcon icon={faHome} /> Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className={`nav-item-oval nav-link ${isActive('/menu') ? 'active-link' : ''}`}>
                                <FontAwesomeIcon icon={faUtensils} /> Menú
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className={`nav-item-oval nav-link ${isActive('/contacto') ? 'active-link' : ''}`}>
                                <FontAwesomeIcon icon={faPhone} /> Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://www.facebook.com/profile.php?id=100076219538221"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-item-oval nav-link"
                            >
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
