import React, { useState } from "react";

const CartContext = React.createContext([]);

export const CartContextProvider = ({children}) => {

    const [list,setList] = useState([])

    const addItem = (item, quantity) => {
        
    }

    const removeItem = (itemId) => {
        const item = list.filter((e) => {
            return parseInt(e.id) !== parseInt(itemId)
        });
        setList(item);
    }

    const clear = () => {
        setList([]);
    }

    const isInCart = (id) => {
        const item = list.find((e) => parseInt(e.id) === parseInt(id));
        if(!item){
            return false
        }else{
            return true
        }
    }
    
    return (
        <CartContext.Provider value={{
            products: list,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}