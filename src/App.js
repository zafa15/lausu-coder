import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Body/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer/>
            </Route>
            <Route path='/item/:paramId'>
              <ItemDetailContainer/>
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
