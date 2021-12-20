import ItemList from "../ItemList/ItemList"
 import { getItems, getItemsByCategoryId } from "../../../Services/products"
 import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from '../../Loader/Loader'

const ItemListContainer = () =>{
    const {categoryId} = useParams();
    //console.log(categoryId);

    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState([])

    const onResize = () =>{
        console.log('Cambio el tamaño de la ventana')
    }

    useEffect(()=>{

        (async () =>{
            if(categoryId!== undefined){
                const data = getItemsByCategoryId(categoryId);
                //console.log(data)
                data.then(r => {
                    setProducts(r)
                    setLoading(true)
                }).catch(err => {
                    console.log(err)
                })

            }else{
                const data = getItems();
                //console.log(data)
                data.then(r => {
                    setProducts(r)
                    setLoading(true)
                }).catch(err => {
                    console.log(err)
                })
            }
        })()

        window.addEventListener('resize',onResize)

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