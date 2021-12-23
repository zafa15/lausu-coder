/* import { useState } from "react"; */
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import NotificationContext from '../../../context/NotificationContext';
import CartContext from '../../../context/CartContext';



const ItemDetail = ({data}) => {

    //const Count = inputType === 'input' ? InputCount : ButtonCount
    const [valid,setValid] = useState(0);
    const {setNotification} = useContext(NotificationContext);
    const {addItem} = useContext(CartContext);

    const addToCart = (count) => {
        const quantity_data = {quantity:count} 
        const new_obj = {...data,...quantity_data}
        //console.log(new_obj);

        if(count>0){
            addItem(new_obj,count);
            setNotification('success',`Agregado correctamente`);
        }else{
            setNotification('error',`No puede agregar 0 artículos`);
        }
        
        setValid(count)
    }


    return (
        <div className="item--detail card p-3">
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-12">
                    <img src={data?.img_url} alt={data?.name}/>
                </div>
                <div className="col-lg-8 col-sm-12" align="left">
                    <div className="p-3">
                        <div>
                        <h2 className="mt-0 mb-3">{data?.name}</h2>
                        <p className="mt-0 mb-3">{data?.description}</p>
                        <h3 className="mt-0 mb-3">Precio: <strong>S/ <span>{data?.price_total}</span></strong></h3>
                        </div>
                        {
                            valid > 0 ? (
                                <Link className="mb-3 go-to-cart" to={`/cart`}><u>Ir a ver el Carrito</u></Link>
                            ) : (
                                <ItemCount onConfirm={addToCart} maxQuantity={data?.stock}/>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail