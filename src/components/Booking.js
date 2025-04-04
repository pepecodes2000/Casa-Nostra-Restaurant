import React from 'react';

const Booking = () => {
    return (
        <section
            className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white p-4"
            style={{
                backgroundImage: 'url("/images/booking.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        <div className="container mt-4">
            <h2>Haz una reserva</h2>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Escribe tu nombre" required />
                </div>
                <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Tu teléfono" required />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Nº de comensales" required />
                </div>
                <div className="mb-3">
                    <input type="datetime-local" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Reservar</button>
            </form>
        </div>
        </section>
    );
};

export default Booking;