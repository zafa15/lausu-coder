import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development"
import { getItemById } from "../../../Services/products";
import ItemDetail from "../ItemDetail/ItemDetail"
/* import { CartContext } from "../../../context/cartContext";
import { useContext } from "react"; */

const ItemDetailContainer = () => {

    const [product,setProduct] = useState({});
    const {paramId} = useParams()
    /* const datosContext = useContext(CartContext);
    console.log(datosContext); */

    //console.log(paramId);

    useEffect(() => {
        getItemById(paramId).then(item =>{
            console.log(item);
            setProduct(item);
        }).catch(err => {
            console.log(err);
        })

        return (()=>{
            setProduct()
        })
    },[paramId])

    return (
        <div className="content__detail-item">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <ItemDetail data={product} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer