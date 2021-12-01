import ItemList from "../ItemList/ItemList"
import { getItems } from "../../../products-promise"
import { useEffect, useState } from "react"

const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    useEffect(()=>{
        const data = getItems()
        data.then(r => {
            setProducts(r)
        })

        return (() => {
            setProducts([])
        })
    },[])
   return (
       <div className="item--list">
           <ItemList data={products} />
       </div>
   )

}

export default ItemListContainer