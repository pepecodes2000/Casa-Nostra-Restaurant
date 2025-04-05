import React from 'react';

const History = () => {
    return (
        <section
            className="text-white d-flex justify-content-center align-items-center"
            style={{
                padding: '85px 0',
                backgroundImage: 'url("https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="bg-dark p-5 rounded shadow-lg" style={{ opacity: 0.9, maxWidth: '800px', width: '90%' }}>
                <h2 className="fw-bold text-center mb-4">Nuestra Historia</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    En <strong>Casa Nostra Restaurant</strong>, la tradición y la pasión por la buena comida nos han acompañado desde nuestros inicios. 
                    Nacimos con el sueño de compartir sabores auténticos, recetas caseras y el calor de un ambiente familiar.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    Cada plato que servimos cuenta una historia de amor por la cocina, de respeto por los ingredientes y de gratitud por quienes nos acompañan día a día.
                </p>
                <div className="mt-4 p-3 bg-warning text-dark rounded text-center shadow-sm">
                    <h5 className="fw-bold">👨‍👩‍👧‍👦 Más que clientes, ¡son nuestros comensales!</h5>
                    <p className="mb-0">
                        Cada visita es una mesa compartida, una sonrisa servida y un momento que se vuelve parte de nuestra historia. 
                        ¡Gracias por formar parte de esta familia gastronómica! 🍝🍷🥗
                    </p>
                </div>
            </div>
        </section>
    );
};

export default History;
