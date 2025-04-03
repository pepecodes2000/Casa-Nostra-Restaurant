import React from 'react';

const Location = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white p-4"
      style={{
        backgroundImage: 'url("/images/Location Casa Nostra.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black text-white rounded p-4 shadow-lg">
      <h2 className="text-center mb-4">Localización</h2>
        {/* Contenedor principal con dos columnas */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4">
          
          {/* Información */}
          <div className="px-4">
            <h1 className="fw-bold">Te esperamos</h1>

            <div className="border-bottom pb-2 mb-3">
              <h3 className="fs-5 fw-semibold">Horario</h3>
              <p>De Martes a Domingo, de 8:00h a 23:00h.</p>
            </div>

            <div>
              <h3 className="fs-5 fw-semibold">Dirección</h3>
              <p>Luis Cordero 16-70 y Av. héroes de Verdeloma</p>
            </div>

            <div>
              <h3 className="fs-5 fw-semibold">Teléfono</h3>
              <p>099 434 9912</p>
            </div>

            <div>
              <h3 className="fs-5 fw-semibold">Email</h3>
              <p>
                <a href="mailto:hola@unsitiogenial.es" className="text-white text-decoration-none">
                  hola@unsitiogenial.es
                </a>
              </p>
            </div>

            <div>
              <h3 className="fs-5 fw-semibold">Redes sociales</h3>
              <p>
                <a href="#" className="text-white text-decoration-none">@unsitiogenial</a>
              </p>
            </div>
          </div>

          {/* Línea divisoria vertical */}
          <div className="vr" style={{ height: 'auto' }}></div>

          {/* Mapa */}
          <div className="px-4">
            <h1 className="fs-5 fw-semibold mb-3">Mapa</h1>
            <div className="rounded overflow-hidden">
              <iframe
                className="w-100"
                style={{ height: '375px' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.1149831963561!2d-79.0024778!3d-2.8887975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd1985bb5af65b%3A0xd276e077e385b1a!2sCasa%20Nostra!5e0!3m2!1ses!2sec!4v1712098765432!5m2!1ses!2sec"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
