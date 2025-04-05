import React from 'react';
import '../App.css'; 

const History = () => {
    return (
        <div className="history-container">
            <h2 className="history-title">20 años sintiendo la gastronomía</h2>
            <div className="history-column">
                <p className="history-paragraph">
                    En Casa Nostra llevamos más de 20 años compartiendo mucho más que comida: compartimos tradición, calidez y momentos que se quedan en la memoria.
                </p>
                <p className="history-paragraph">
                    Nuestro restaurante nació con el propósito de crear un espacio donde cada persona se sienta como en casa. 
                </p>
            </div>
            <div className="history-column">
                <p className="history-paragraph">
                    Cada plato que servimos está hecho con ingredientes frescos, 
                    recetas con historia y ese toque especial que solo se encuentra cuando se cocina con el corazón.
                </p>
                <p className="history-paragraph">
                    Además de recibirte en nuestro acogedor local, también llevamos nuestra esencia a donde tú lo necesites. 
                </p>
            </div>
            <div className="history-column">
                <p className="history-paragraph">
                    Contamos con un servicio de catering empresarial ideal para eventos corporativos, reuniones, almuerzos ejecutivos y celebraciones especiales. 
                </p>
                <p className="history-paragraph">
                    Nos adaptamos a tus necesidades, garantizando sabor, puntualidad y presentación impecable.
                </p>
                <p className="history-paragraph">
                    En Casa Nostra, cada comida es una experiencia. 
                    Ya sea en nuestro restaurante o en tu empresa, nuestra misión es la misma: hacerte sentir como en casa.
                </p>
            </div>
        </div>
    );
};

export default History;
