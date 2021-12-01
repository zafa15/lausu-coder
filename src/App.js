import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Body/ItemListContainer/ItemListContainer';
/* import ItemCount from './components/body/ItemCount/ItemCount'; */

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container mt-5'>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
