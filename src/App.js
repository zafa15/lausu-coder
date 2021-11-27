import './App.css';
import NavBar from './components/header/navbar/NavBar';
import ItemListContainer from './components/header/navbar/ItemListContainer';
import ItemCount from './components/ItemCount';

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
      <NavBar />
      <div className='container mt-5'>
        <ItemListContainer greeting={items}/>
        <ItemCount stock={15} initial={1}/>
      </div>
    </div>
  );
}

export default App;
