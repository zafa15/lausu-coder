import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Body/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container mt-5'>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
