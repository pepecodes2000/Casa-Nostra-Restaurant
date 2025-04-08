import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Booking from './components/Booking';
import History from './components/History';
import Location from './components/Location';
import Menu from './components/Menu';
import Navbar from './components/Navbar/Navbar';
import FacebookCarousel from './components/FacebookCarousel/FacebookCarousel';
import About from './components/About/About';
import VideoHighlight from './components/VideoHighlight/VideoHighlight';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';

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
          <VideoHighlight />
          <div ref={bookingRef}>
            <Booking />
          </div>
          <About />
          <History />
          <Location />
          <Menu onReserveClick={scrollToBooking} />
          <WhatsappButton />
        </main>

        <footer className="text-center py-2 bg-dark text-white">
          <p>&copy; 2025 Casa Nostra Restaurant. Funciona gracias a UWEB.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
