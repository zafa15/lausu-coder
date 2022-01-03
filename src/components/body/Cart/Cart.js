import './Cart.css';
import CartContext from '../../../context/cartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../../Services/firebase'
import { collection, addDoc, doc, Timestamp, writeBatch, getDoc } from 'firebase/firestore';
import NotificationContext from '../../../context/NotificationContext';
import CompleteBuy from '../CompleteBuy/CompleteBuy';


const Cart = () => {

    const [complete, setComplete] = useState(false);

    const { setNotification } = useContext(NotificationContext);

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { products, removeItem, clear, getTotalPay, updateCounter } = useContext(CartContext)


    const confirmOrder = (e) => {
        e.preventDefault();
        const obj_send = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: products,
            total: updateCounter(),
            total_price: getTotalPay(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        if (obj_send.items.length > 0) {
            obj_send.items.forEach((prod) => {
                getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                    if (documentSnapshot.data().stock >= prod.quantity) {
                        batch.update(doc(db, 'items', documentSnapshot.id), {
                            stock: documentSnapshot.data().stock - prod.quantity
                        })
                    } else {
                        outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                })
            })

            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), obj_send).then(({ id }) => {
                    //console.log(id);
                    batch.commit().then(() => {
                        console.log('Se realizó la compra', id);
                        setNotification('success', `Agregado correctamente`);
                    }).catch((error) => {
                        setNotification('error', `Error en ejecutar la orden`);
                        console.log('Error en ejecutar la orden', error);
                    })
                })
            } else {
                setNotification('error', `No tenemos stock en un producto`);
            }
        } else {
            setNotification('error', `No hay productos en el carrito`);
        }



        setTimeout(() => {
            setComplete(true);
            clear();
            setName('');
            setEmail('');
            setPhone('');
        }, 1000)

    }

    return (
        <div className="box--cart mt-3">
            {
                complete ? <CompleteBuy /> : (
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className='card p-4'>
                                <h3 className="mb-3">Carrito de Compras</h3>
                                <div className='row mb-3'>
                                    <div className='col-lg-12' align="right">
                                        <button type='button' className='btn btn-danger' onClick={() => clear()}>Borrar Todo</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    {
                                        products.length > 0 ? (
                                            products.map(item =>
                                                <div className="col-lg-12 mb-3" key={item.id}>
                                                    <div className="cart-item">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-3 col-md-3 col-sm-3" align="center">
                                                                <img className='img-cart' src={item.img_url} alt={item.name} />
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                                <div align="left">
                                                                    <p><strong>Nombre: </strong>{item.name}</p>
                                                                    <p><strong>Descripción: </strong><br />{item.description}</p>
                                                                    <p><strong>Precio c/u: </strong>S/ {item.price_total}</p>
                                                                    <p><strong>Cantidad: </strong>{item.quantity}</p>
                                                                    <p><strong>Sub Total: </strong>S/ {item.subtotal}</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-3" align="center">
                                                                <button type="button" className="btn btn-dark-delete" onClick={() => removeItem(item.id)}>x</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) : (
                                            <div className='col-lg-12'>
                                                <div className='p-3'>
                                                    <h3 className='mb-4'>
                                                        Carrito vacío :(
                                                    </h3>
                                                    <h4 align="center">
                                                        <Link to={`/`}><u>Ver más productos</u></Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className='col-lg-12' align="right">
                                        <div className='p-3'>
                                            <p className='total-price'><strong>Total: </strong> S/ {getTotalPay().toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='card p-3'>
                                <h3 className='mb-3' align="center">Contacto</h3>
                                <form onSubmit={(e) => confirmOrder(e)}>
                                    <div className='box--form' align="left">
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <div className='form-group mb-3'>
                                                    <label htmlFor="name">Nombre Completo</label>
                                                    <input type="text" id='name' className='form-control'
                                                        value={name}
                                                        onChange={({ target }) => setName(target.value)}
                                                        required="Este campo es obligatorio" />
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='form-group mb-3'>
                                                    <label htmlFor="phone">Celular</label>
                                                    <input id='phone' className='form-control'
                                                        type="text"
                                                        onKeyPress={(event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }}
                                                        maxLength="12"
                                                        value={phone}
                                                        onChange={({ target }) => setPhone(target.value)}
                                                        required="Este campo es obligatorio" />
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div className='form-group mb-3'>
                                                    <label htmlFor="email">Correo</label>
                                                    <input type="email" id='email' className='form-control'
                                                        value={email}
                                                        onChange={({ target }) => setEmail(target.value)}
                                                        required="Este campo es obligatorio" />
                                                </div>
                                            </div>
                                            <div className='col-lg-12' align="right">
                                                <button type='submit' className='btn btn-success'>Confirmar Compra</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart