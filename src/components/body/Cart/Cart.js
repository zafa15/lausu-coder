import './Cart.css';
import CartContext from '../../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
/* import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min'; */
import { db } from '../../../Services/firebase'
import { collection, addDoc, doc, updateDoc, Timestamp, writeBatch } from 'firebase/firestore';


const Cart = () =>{

    const {products, removeItem, clear} = useContext(CartContext)


    /* const confirmOrder = () =>{
        const obj_send = {
            buyer:{
                name: 'name 2',
                phone: '987654321',
                email: 'name@test.com'
            },
            items:{
                products
            },
            total: updateCounter(),
            date: Timestamp.fromDate(new Date)
        } */

        /* addDoc(collection(db,'orders'),obj_send).then(({id}) => {
            console.log(id);
        }) */

        //updateDoc(doc(db,'orders','qkeFXLvdaKUwMN6BwStV'),{total:1000})

    //}
    //console.log(products);

    return(
        <div className="box--cart mt-3">
            <h2 className="mb-3">Carrito de Compras</h2>
            <div className='row mb-3'>
                <div className='col-lg-12' align="right">
                    <button type='button' className='btn btn-danger' onClick={()=>clear()}>Borrar Todo</button>
                    {/* <button type='button' className='btn btn-success' onClick={()=>confirmOrder()}>Confirmar Compra</button> */}
                </div>
            </div>
            <div className="row justify-content-center">
                {
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
                            <h4 align="center">
                                <Link to={`/`}><u>Ver más productos</u></Link>
                            </h4>
                          </div>                          
                      </div>
                  )
                }
                
            </div>
        </div>
    )
}

export default Cart