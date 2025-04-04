import './App.css';
import React, { useRef } from 'react';
import Booking from './components/Booking';
import History from './components/History';
import Location from './components/Location';
import Menu from './components/Menu';

function App() {
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Casa Nostra Restaurant </h1>
      </header>
      <main>
        <section>
          <h2>Bienvenido a nuestro restaurante</h2>
          <p>Disfruta de una experiencia gastronómica única.</p>
        </section>
        <div ref={bookingRef}>
          <Booking />
        </div>
        <History />
        <Location />
        <Menu onReserveClick={scrollToBooking} />
      </main>
      <footer>
        <p>&copy; 2023 Un Sitio Genial. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
