import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development"
import { getItemById } from "../../../Services/products";
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../../Loader/Loader";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);

    const [product,setProduct] = useState({});
    const {paramId} = useParams()

    useEffect(() => {
        getItemById(paramId).then(item =>{
            //console.log(item);
            setProduct(item);
            setLoading(true)
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
                    {
                        loading? <ItemDetail data={product} /> : <Loader />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer