import logo from './logo.svg';
import './App.css';
import NavBar from './components/header/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo, este es mi aplicación en ReactJS
        </p>
      </header>
    </div>
  );
}

export default App;
