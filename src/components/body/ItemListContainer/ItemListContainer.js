import ItemList from "../ItemList/ItemList"
 import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from '../../Loader/Loader'
import { getProducts } from "../../../Services/firebase"

const ItemListContainer = () =>{
    const {categoryId} = useParams();

    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState([])

    useEffect(()=>{

        (async () =>{
            if(categoryId!== undefined){
                setLoading(false);
                getProducts('category_name','==',categoryId).then(products => {
                    setProducts(products)
                }).catch(error =>{
                    console.log(error)
                }).finally(()=>{
                    setLoading(true);
                })

            }else{
                setLoading(false);
                getProducts().then(products => {
                    setProducts(products)
                }).catch(error =>{
                    console.log(error)
                }).finally(()=>{
                    setLoading(true);
                })
            }
        })()
        
        return (() => {
            setProducts([])
        })
    },[categoryId]) 

   return (
       <div className="item--list">
           {
               loading ? <ItemList data={products} /> : <Loader />
           }
       </div>
   )

}

export default ItemListContainer