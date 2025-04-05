import React from 'react';
import '../App.css';

const History = () => {
    return (
        <div
            className="history-container text-white d-flex justify-content-center align-items-center"
            style={{
                padding: '80px 0',
                backgroundImage: 'url("https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="p-5 rounded shadow-lg"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    maxWidth: '1200px',
                    width: '90%',
                }}
            >
                <h2 className="text-center fw-bold mb-5">20 años sintiendo la gastronomía</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <p className="history-paragraph">
                            En <strong>Casa Nostra</strong> llevamos más de 20 años compartiendo mucho más que comida: compartimos tradición, calidez y momentos que se quedan en la memoria.
                        </p>
                        <p className="history-paragraph">
                            Nuestro restaurante nació con el propósito de crear un espacio donde cada persona se sienta como en casa.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="history-paragraph">
                            Cada plato que servimos está hecho con ingredientes frescos, recetas con historia y ese toque especial que solo se encuentra cuando se cocina con el corazón.
                        </p>
                        <p className="history-paragraph">
                            Además de recibirte en nuestro acogedor local, también llevamos nuestra esencia a donde tú lo necesites.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="history-paragraph">
                            Contamos con un servicio de catering empresarial ideal para eventos corporativos, reuniones, almuerzos ejecutivos y celebraciones especiales.
                        </p>
                        <p className="history-paragraph">
                            Nos adaptamos a tus necesidades, garantizando sabor, puntualidad y presentación impecable.
                        </p>
                        <p className="history-paragraph">
                            En Casa Nostra, cada comida es una experiencia. Ya sea en nuestro restaurante o en tu empresa, nuestra misión es la misma: hacerte sentir como en casa.
                        </p>
                    </div>
                </div>

                {/* Sección de comensales */}
                <div className="mt-4 p-4 bg-warning text-dark rounded text-center shadow-sm">
                    <h5 className="fw-bold">👨‍👩‍👧‍👦 Más que clientes, ¡son nuestros comensales!</h5>
                    <p className="mb-0">
                        Cada visita es una historia compartida, un momento inolvidable y una sonrisa servida. 
                        ¡Gracias por formar parte de esta familia gastronómica! 🍝🍷🥗
                    </p>
                </div>
            </div>
        </div>
    );
};

export default History;
