import './Cart.css';
import CartContext from '../../../context/CartContext';
import { useContext } from 'react';

const Cart = () =>{

    const {products} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)
    //console.log(products);

    return(
        <div className="box--cart mt-3">
            <h2 className="mb-3">Carrito de Compras</h2>
            <div className="row justify-content-center">
                {
                console.log(products),
                  products.length > 0 ? (
                    products.map(e => 
                        <div className="col-lg-12 mb-3" key={e.id}>
                            <div className="card cart-item p-3">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3" align="center">
                                        <img className='img-cart' src={e.img_url} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div align="left">
                                            <p><strong>Nombre: </strong>{e.name}</p>
                                            <p><strong>Descripción: </strong><br/>{e.description}</p>
                                            <p><strong>Precio c/u: </strong>S/ {e.price_total}</p>
                                            <p><strong>Cantidad: </strong>{e.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3" align="center">
                                        <button type="button" className="btn btn-dark-delete" onClick={() => removeItem(e.id)}>x</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                  ) : (
                      <div className='col-lg-12'>
                          <div className='card p-3'>
                            <h3>
                                No se encontraron Productos dentro del Carrito :(
                            </h3>
                          </div>                          
                      </div>
                  )
                }
                
            </div>
        </div>
    )
}

export default Cart