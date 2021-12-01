import { useState } from 'react';
import './Item.css'

const Item = ({elements}) =>{
    
    /* const [activeAdd,setActiveAdd] = useState(false)
    const [activeSub,setActiveSub] = useState(false)
    const [count,setCount] = useState(1);
    
    const addCount = () => {
        if(count >= elements.stock){
            setActiveAdd(true)
        }else{
            setCount(count + 1);
        }
    }

    const subCount = () => {
        if(count <= 1){
            setActiveSub(true)
        }else{
            setCount(count - 1)
        }
    } */

    const onAdd = () => {
        console.log('Hola');
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card item--card">
                <div className="card-body">
                    <div className="item--media">
                        <center>
                            <img src={elements.img_url} alt={elements.name}/>
                        </center>
                    </div>
                    <div className="item--detail mt-3" align="left">
                        <h4 className="mt-0 mb-2"><strong>{elements.name}</strong></h4>
                        <p className="mt-0">{elements.description}</p>
                    </div>
                    {/* <div className="item--count mb-3">
                        <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3"><button className="btn-counters" disabled={count > 1 ? false :activeSub} type="button" onClick={() => subCount()}><strong>-</strong></button></div>
                        <div className="col-lg-6 col-md-6">
                            <p className="m-2">
                            <strong>{count}</strong>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-3"><button className="btn-counters" disabled={count < elements.stock ? false : activeAdd} type="button" onClick={() => addCount()}><strong>+</strong></button></div>
                        </div>
                    </div> */}
                    <div className="item--add">
                        <button type="button" className="btn btn-add-item" onClick={() => onAdd()}>
                            <i className="mdi mdi-cart-outline mr-2"></i>Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item