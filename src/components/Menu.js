import React from 'react';

const Menu = () => {
    return (
        <div>
            <h2>Descarga nuestras cartas</h2>
            <ul>
                <li><a href="/menu-del-dia.pdf" download>Menú del día</a></li>
                <li><a href="/carta-grupos.pdf" download>Carta para grupos</a></li>
                <li><a href="/carta-navidad-2022.pdf" download>Carta Navidad 2022</a></li>
            </ul>
        </div>
    );
};

export default Menu;