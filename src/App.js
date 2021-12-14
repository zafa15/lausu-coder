import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/body/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/* import { CartContext } from './context/cartContext'; */
import Notification from './components/Notification/Notification'
import { NotificationContextProvider } from './context/NotificationContext';

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
                <Route path='/item/:paramId'>
                  <ItemDetailContainer/>
                </Route>
                <Route path='/category/:categoryId'>
                  <ItemListContainer/>
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
