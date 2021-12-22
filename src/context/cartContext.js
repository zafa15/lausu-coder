import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {

    const [list,setList] = useState([])
    const [total,setTotal] = useState(0);

    const updateCounter = () => {
        let counter = 0;
        list.map((e) => {
            counter = counter + e.quantity
        });
        setTotal(counter);
    }

    const addItem = (item, quantity) => {
        const array_cart =  list;
        const valid = isInCart(item.id)
        if(!valid){
            array_cart.push(item);       
            setList(array_cart);
        }else{
            const array_context = list.map((e) => {
                    if(parseInt(e.id) === parseInt(item.id)){
                        e.quantity = e.quantity + quantity
                    }
                });
            setList(array_context);        
        }
        updateCounter();
        window.localStorage.setItem('lausu_cart',JSON.stringify(list));
        //console.log(total);
    }

    const removeItem = (itemId) => {
        const item = list.filter((e) => {
            return parseInt(e.id) !== parseInt(itemId)
        });
        setList(item);
        updateCounter();
    }

    const clear = () => {
        setList([]);
    }

    const isInCart = (id) => {
        const item = list.filter((e) => parseInt(e.id) === parseInt(id));
        //console.log(item);
        if(item.length > 0){
            return true
        }else{
            return false
        }
    }

    const setListStorage = (list) => {
        setList(list);
    }

    

    
    
    return (
        <CartContext.Provider value={{
            products: list,
            count: total,
            addItem,
            removeItem,
            clear,
            setListStorage,
            updateCounter,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext