import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development"
import { getItem, getItemById } from "../../../Services/products";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product,setProduct] = useState({});
    /*
    const data = getItem()
    data.then(r => {
        setProduct(r)
    }) */
    const {productId} = useParams();
    console.log(productId)
    /* useEffect(() =>{
        return () => {
            setProduct({})
        }
    },[productId]) */

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