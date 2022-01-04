import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../../Loader/Loader";
import {getProductById} from '../../../Services/firebase';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);

    const [product,setProduct] = useState({});
    const {paramId} = useParams()

    useEffect(() => {
        setLoading(false)
        getProductById(paramId).then(product => {
            setProduct(product);
        }).catch((error) =>{
            console.log('Error searching item', error)
        }).finally(()=>{
            setLoading(true)
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