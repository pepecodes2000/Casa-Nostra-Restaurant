import React, { useState, useEffect } from 'react';

const Booking = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [comensales, setComensales] = useState('');
    const [fecha, setFecha] = useState('');
    const [errores, setErrores] = useState({});

    useEffect(() => {
        const nuevosErrores = {};

        if (nombre && nombre.length < 4) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 4 letras.';
        }

        if (telefono && (!/^09\d{8}$/.test(telefono))) {
            nuevosErrores.telefono = 'El teléfono debe comenzar con 09 y tener exactamente 10 dígitos.';
        }

        if (comensales && comensales <= 0) {
            nuevosErrores.comensales = 'Debe haber al menos 1 comensal.';
        }

        if (fecha) {
            const ahora = new Date();
            const seleccionada = new Date(fecha);
            const manana = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 1);
            if (seleccionada < manana) {
            nuevosErrores.fecha = 'La fecha debe ser a partir de mañana.';
            }
        }

        setErrores(nuevosErrores);
    }, [nombre, telefono, comensales, fecha]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errores).length === 0 && nombre && telefono && comensales && fecha) {
            alert('Reserva enviada con éxito 🥳');
            // Aquí puedes enviar los datos o hacer algo con ellos
        } else {
            alert('Corrige los errores antes de enviar.');
        }
    };

    return (
        <section
            className="d-flex justify-content-center align-items-center min-vh-100 text-white"
            style={{
                backgroundImage: 'url("/images/booking.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="bg-dark p-5 rounded shadow-lg" style={{ opacity: 0.9, maxWidth: '500px', width: '100%' }}>
                <h2 className="fw-bold mb-4 text-center">Haz una reserva</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                            placeholder="Escribe tu nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                    </div>

                    <div className="mb-3">
                        <input
                            type="tel"
                            className={`form-control ${errores.telefono ? 'is-invalid' : ''}`}
                            placeholder="Tu teléfono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                        />
                        {errores.telefono && <div className="invalid-feedback">{errores.telefono}</div>}
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            className={`form-control ${errores.comensales ? 'is-invalid' : ''}`}
                            placeholder="Nº de comensales"
                            value={comensales}
                            onChange={(e) => setComensales(e.target.value)}
                            required
                        />
                        {errores.comensales && <div className="invalid-feedback">{errores.comensales}</div>}
                    </div>

                    <div className="mb-3">
                        <input
                            type="datetime-local"
                            className={`form-control ${errores.fecha ? 'is-invalid' : ''}`}
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                        />
                        {errores.fecha && <div className="invalid-feedback">{errores.fecha}</div>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-warning fw-bold w-100">
                            Reservar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Booking;