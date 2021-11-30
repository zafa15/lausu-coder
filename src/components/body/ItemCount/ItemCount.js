import React, {useState} from "react";
import './ItemCount.css';


const ItemCount = ({stock, initial}) => {

    const [activeAdd,setActiveAdd] = useState(false)
    const [activeSub,setActiveSub] = useState(false)
    const [count,setCount] = useState(initial);
    
    const addCount = () => {
        if(count >= stock){
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
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">
                    Camisa Tiger
                </h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-3"><button className="btn-counters" disabled={count > 1 ? false :activeSub} type="button" onClick={() => subCount()}>-</button></div>
                    <div className="col-lg-6">{count}</div>
                    <div className="col-lg-3"><button className="btn-counters" disabled={count < stock ? false : activeAdd} type="button" onClick={() => addCount()}>+</button></div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount