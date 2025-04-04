import React from 'react';

const Menu = ({
    backgroundImage = '/images/Casa Nostra Menu.jpg',
    title = 'Descarga nuestras cartas',
    menus = [
        { name: 'Menú del día', link: '/menu-del-dia.pdf' },
        { name: 'Carta para grupos', link: '/carta-grupos.pdf' },
        { name: 'Carta Navidad 2025', link: '/carta-navidad-2022.pdf' },
    ],
    reserveText = 'RESERVAR MESA',
    onReserveClick = () => { },
}) => {
    return (
        <section
            className="container-fluid py-5 d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `url("${backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="bg-dark text-white p-4 rounded shadow-lg"
                style={{ opacity: 0.9, maxWidth: '500px', width: '100%' }}
            >
                <h2 className="fw-bold mb-4">{title}</h2>
                <ul className="list-unstyled">
                    {menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`d-flex justify-content-between pb-2 ${index !== menus.length - 1 ? 'border-bottom mb-2' : ''
                                }`}
                        >
                            <span>{menu.name}</span>
                            <a
                                href={menu.link}
                                download
                                className="text-warning text-decoration-none"
                            >
                                Descargar PDF
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-4">
                    <button className="btn btn-warning fw-bold" onClick={onReserveClick}>
                        {reserveText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
