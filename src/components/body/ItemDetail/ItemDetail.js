import { useState } from "react";
import './ItemDetail.css'

const ItemDetail = ({data}) => {

    const [activeAdd,setActiveAdd] = useState(false)
    const [activeSub,setActiveSub] = useState(false)
    const [count,setCount] = useState(1);
    
    const addCount = () => {
        if(count >= data.stock){
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
        <div className="item--detail card p-3">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <img src={data.img_url} alt={data.name}/>
                </div>
                <div className="col-lg-8 col-sm-12" align="left">
                    <div className="p-3">
                        <div>
                        <h2 className="mt-0 mb-3">{data.name}</h2>
                        <p className="mt-0 mb-3">{data.description}</p>
                        <h3 className="mt-0 mb-3">Precio: <strong>S/ <span>{data.price_total}</span></strong></h3>
                        </div>
                    
                        <div className="item--count mb-3">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3 col-md-3"><button className="btn-counters" disabled={count > 1 ? false :activeSub} type="button" onClick={() => subCount()}><strong>-</strong></button></div>
                                        <div className="col-lg-6 col-md-6" align="center">
                                            <p className="m-2">
                                            <strong>{count}</strong>
                                            </p>
                                        </div>
                                        <div className="col-lg-3 col-md-3"><button className="btn-counters" disabled={count < data.stock ? false : activeAdd} type="button" onClick={() => addCount()}><strong>+</strong></button></div>
                                    </div>  
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail