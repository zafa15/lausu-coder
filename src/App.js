import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Body/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/* import { CartContext } from './context/cartContext'; */
import Notification from './components/Notification/Notification'
import { NotificationContextProvider } from './context/NotificationContext';
import Cart from './components/Body/Cart/Cart';

const App = () => {
  return (
    
    <div className="App">
      <NotificationContextProvider>
        {/* <CartContext.Provider value={[]}> */}
          <BrowserRouter>
            <NavBar />
            <div className='container mt-5'>
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
        {/* </CartContext.Provider> */}
      </NotificationContextProvider>
    </div>
  );
}

export default App;
