import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Body/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Body/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/* import { CartContext } from './context/cartContext'; */
import Notification from './components/Notification/Notification'
import { NotificationContextProvider } from './context/NotificationContext';
/* import { CartContextProvider } from './context/CartContext'; */
import Cart from './components/Body/Cart/Cart';
import CartContext from './context/CartContext';
import { useContext } from 'react/cjs/react.development';
import { useEffect } from 'react';

const App = () => {

  const { setListStorage, updateCounter } = useContext(CartContext);

  useEffect(()=>{
    const storage_cart = window.localStorage.getItem('lausu_cart')
    if(storage_cart!==null){
        const obj_storage_cart = JSON.parse(storage_cart);
        setListStorage(obj_storage_cart);
    }
  },[]);

  updateCounter()
  
  
  return (
    <div className="App">
      <NotificationContextProvider>
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
      </NotificationContextProvider>
    </div>
  );
}

export default App;
