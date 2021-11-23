import logo from './logo.svg';
import './App.css';
import NavBar from './components/header/navbar/NavBar';
import ItemListContainer from './components/header/navbar/ItemListContainer';

const items = [
  {
    id:1,
    text:'Hola mundo'
  },
  {
    id:2,
    text:'Hola mundo 2'
  }
]

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <NavBar />
      </header>
      <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola Mundo, este es mi aplicación en ReactJS
        </p>
        <ItemListContainer greeting={items}/>
      </div>
    </div>
  );
}

export default App;
