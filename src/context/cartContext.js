import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {

    const [list,setList] = useState([])
    const [total,setTotal] = useState(0);

    const addItem = (item, quantity) => {
        const array_cart =  list;
        const valid = isInCart(item.id)
        console.log(valid);
        if(!valid){
            array_cart.push(item);       
            setList(array_cart);
        }else{
            list.forEach((e) => {
                if(parseInt(e.id) === parseInt(item.id)){
                    e.quantity = e.quantity + quantity
                }
            });       
        }
        console.log(list);
        updateCounter();
    }

    const removeItem = (itemId) => {
        const item = list.filter((e) => {
            return parseInt(e.id) !== parseInt(itemId)
        });
        setList(item);
        console.log(list);
        updateCounter();
    }

    const clear = () => {
        setList([]);
    }

    const isInCart = (id) => {
        return list.some((e) => parseInt(e.id) === parseInt(id));
    }

    const updateCounter = () => {
        let counter = 0;
        console.log(list);
        list.forEach((e) => {
            counter += e.quantity
        });
        console.log(counter);
        setTotal(counter);
    }    
    
    return (
        <CartContext.Provider value={{
            products: list,
            count: total,
            addItem,
            removeItem,
            clear,
            updateCounter,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext