import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer';
/* import ItemCount from './components/body/ItemCount/ItemCount'; */

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container mt-5'>
        <ItemListContainer/>
        {/* <ItemCount stock={15} initial={1}/> */}
      </div>
    </div>
  );
}

export default App;
