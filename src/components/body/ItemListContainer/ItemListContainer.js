import ItemList from "../ItemList/ItemList"
 import { getItems, getItemsByCategoryId } from "../../../Services/products"
 import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemListContainer = () =>{
    const {categoryId} = useParams();
    //console.log(categoryId);

    const [products, setProducts] = useState([])

    useEffect(()=>{

        (async () =>{
            if(categoryId!== undefined){
                const data = getItemsByCategoryId(categoryId);
                //console.log(data)
                data.then(r => {
                    setProducts(r)
                }).catch(err => {
                    console.log(err)
                })

            }else{
                const data = getItems();
                //console.log(data)
                data.then(r => {
                    setProducts(r)
                }).catch(err => {
                    console.log(err)
                })
            }
        })()

        return (() => {
            setProducts([])
        })
    },[categoryId]) 

   return (
       <div className="item--list">
           <ItemList data={products} />
       </div>
   )

}

export default ItemListContainer