import './App.css';
import Booking from './components/Booking';
import History from './components/History';
import Location from './components/Location';
import Menu from './components/Menu';

function App() {
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
        <Booking />
        <History />
        <Location />
        <Menu />
      </main>
      <footer>
        <p>&copy; 2023 Un Sitio Genial. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
