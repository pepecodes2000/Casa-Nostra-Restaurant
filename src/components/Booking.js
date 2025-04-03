import React from 'react';

const Booking = () => {
    return (
        <div>
            <h2>Haz una reserva</h2>
            <form>
                <input type="text" placeholder="Escribe tu nombre" required />
                <input type="tel" placeholder="Tu teléfono" required />
                <input type="number" placeholder="Nº de comensales" required />
                <input type="datetime-local" required />
                <button type="submit">Reservar</button>
            </form>
        </div>
    );
};

export default Booking;