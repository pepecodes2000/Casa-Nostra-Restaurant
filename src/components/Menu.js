import React from 'react';

const Menu = () => {
    return (
        <section className="container-fluid py-5 d-flex align-items-center "
            style={{
                backgroundImage: 'url("/images/Casa Nostra Menu.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="bg-dark text-white p-4 rounded shadow-lg" style={{ opacity: 0.9, maxWidth: '500px', width: '100%' }}>
                <h2 className="fw-bold mb-4">Descarga nuestras cartas</h2>
                <ul className="list-unstyled">
                    <li className="d-flex justify-content-between border-bottom pb-2 mb-2">
                        <span>Menú del día</span>
                        <a href="/menu-del-dia.pdf" download className="text-warning text-decoration-none">Descargar PDF</a>
                    </li>
                    <li className="d-flex justify-content-between border-bottom pb-2 mb-2">
                        <span>Carta para grupos</span>
                        <a href="/carta-grupos.pdf" download className="text-warning text-decoration-none">Descargar PDF</a>
                    </li>
                    <li className="d-flex justify-content-between pb-2">
                        <span>Carta Navidad 2025</span>
                        <a href="/carta-navidad-2022.pdf" download className="text-warning text-decoration-none">Descargar PDF</a>
                    </li>
                </ul>
                <div className="text-center mt-4">
                    <button className="btn btn-warning fw-bold">RESERVAR MESA</button>
                </div>
            </div>
        </section>
    );
};

export default Menu;