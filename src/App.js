import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/body/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Notification from './components/Notification/Notification'
import { NotificationContextProvider } from './context/NotificationContext';
import Cart from './components/body/Cart/Cart';


const App = () => {
  
  return (
    <div className="App">
      <NotificationContextProvider>
          <BrowserRouter>
            <NavBar />
            <div className='container principal-container'>
            <Notification /> 
              <Switch>
                <Route exact path='/'>
                  <ItemListContainer/>
                </Route>
                <Route exact path='/item/:paramId'>
                  <ItemDetailContainer/>
                </Route>
                <Route exact path='/category/:categoryId'>
                  <ItemListContainer/>
                </Route>
                <Route exact path='/cart'>
                  <Cart />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
      </NotificationContextProvider>
    </div>
  );
}

export default App;
