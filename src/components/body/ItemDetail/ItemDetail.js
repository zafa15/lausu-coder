/* import { useState } from "react"; */
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* const InputCount = ({onConfirm, maxQuantity}) =>{
    const [count,setCount] = useState(0);
    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0){
            setCount(target.value)
        }
    }

    return(
        <div className="item--count mb-3">
            <input type='number' className="form-control" onChange={handleChange} value={count}/>
            <button type='button' onClick={() => onConfirm(count)} className='btn btn-add-item mt-3'>
                <i className="mdi mdi-cart-outline mr-2"></i>Agregar al carrito
            </button>
        </div>
    )
}

const ButtonCount = ({onConfirm,maxQuantity}) => {
    const [count,setCount] = useState(0)
    const increment = () => {
        if(count < maxQuantity){
            setCount(count + 1)
        }
    }
    
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
} */

const ItemDetail = ({data}) => {

    //const Count = inputType === 'input' ? InputCount : ButtonCount
    const [valid,setValid] = useState(0);

    const addToCart = (count) => {
        console.log(`La canditdad es ${count}`);

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