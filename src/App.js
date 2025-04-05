import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Booking from './components/Booking';
import History from './components/History';
import Location from './components/Location';
import Menu from './components/Menu';
import Navbar from './components/Navbar/Navbar';
import FacebookCarousel from './components/FacebookCarousel/FacebookCarousel'; 

function App() {
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <FacebookCarousel />
        <main>
          {/* Sección con scroll */}
          <div ref={bookingRef}>
            <Booking />
          </div>

          <History />
          <Location />
          <Menu onReserveClick={scrollToBooking} />
        </main>

        <footer className="text-center py-4 bg-dark text-white">
          <p>&copy; 2025 Casa Nostra Restaurant. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
