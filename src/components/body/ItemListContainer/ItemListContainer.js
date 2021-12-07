import ItemList from "../ItemList/ItemList"
 import { getItems } from "../../../Services/products"
import { useEffect, useState } from "react"

const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    useEffect(()=>{
        /* fetch('https://api.mercadolibre.com/sites/MLA/search?q=apple')
        .then(response => {
            return response.json()
        }).then(res => {
            setProducts(res.results.slice(0,24))
        }).catch(err => {
            console.log(err)
        }) */

        const data = getItems()
        data.then(r => {
            setProducts(r)
        }).catch(err => {
            console.log(err)
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