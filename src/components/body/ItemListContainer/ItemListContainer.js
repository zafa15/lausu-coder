import ItemList from "../ItemList/ItemList"
 import { getItems, getItemsByCategoryId } from "../../../Services/products"
 import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from '../../Loader/Loader'
import { collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../../Services/firebase'

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

                /* getDocs(query(collection(db,'items'),where('category_name','==',categoryId))).then((querySnapshot) => {
                    const products = querySnapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data()}
                    })
                    setProducts(products);
                }).catch((error)=>{
                    console.log('Error searching item', error)
                }).finally(()=>{
                    setLoading(true);
                }); */

            }else{
                const data = getItems();
                //console.log(data)
                data.then(r => {
                    setProducts(r)
                    setLoading(true)
                }).catch(err => {
                    console.log(err)
                })

                /* getDocs(collection(db,'items')).then((querySnapshot) => {
                    const products = querySnapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data()}
                    })
                    setProducts(products);
                }).catch((error)=>{
                    console.log('Error searching item', error)
                }).finally(()=>{
                    setLoading(true);
                }); */
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