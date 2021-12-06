import { useState } from "react/cjs/react.development"
import { getItem } from "../../../Services/products";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product,setProduct] = useState({});

    const data = getItem()
    data.then(r => {
        setProduct(r)
    })

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