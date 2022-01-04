import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { collection, getDocs, query, where, doc, getDoc} from 'firebase/firestore'

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId:process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// CONECTION WITH COLLECTIONS FORM FIREBASE
export const getCategories = () =>{
    return new Promise((resolve,reject) => {
        const collectionQuery = collection(db,'category')
        getDocs(collectionQuery).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            });
            resolve(categories)
        }).catch(error => {
            reject('Obteniendo Productos', error)
        })
    })
}

export const getProducts = (key, operator, value) =>{
    return new Promise((resolve,reject) => {
        const collectionQuery = key && operator && value ? 
        query(collection(db,'items'),where(key,operator,value)) :
        collection(db, 'items')
        getDocs(collectionQuery).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            resolve(products)
        }).catch(error =>{
            reject('Obteniendo Productos', error)
        })
    })
}

export const getProductById = (key) =>{
    return new Promise((resolve,reject) => {
        const collectionQuery = doc(db,'items',key)
        getDoc(collectionQuery).then((querySnapshot) =>{
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            resolve(product)
        }).catch(error => {
            reject('Obteniendo Productos', error)
        })
    })
} 