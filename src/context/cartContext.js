import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({children}) => {

    const [list,setList] = useState([])

    const addItem = (item, quantity) => {
        const array_cart =  [...list];
        const valid = isInCart(item.id)
        if(!valid){
            array_cart.push(item);       
            setList(array_cart);
        }else{
            array_cart.forEach((e) => {
                if(e.id === item.id){
                    e.quantity += quantity
                }
            });
            setList(array_cart);     
        }
    }

    const removeItem = (itemId) => {
        const item = list.filter((e) => {
            return e.id !== itemId
        });
        setList(item);
    }

    const clear = () => {
        setList([]);
    }

    const isInCart = (id) => {
        return list.some((e) => e.id === id);
    }

    const updateCounter = () => {
        let counter = 0;
        list.forEach((e) => {
            counter += e.quantity
        });
        return counter
    }
    
    const getTotalPay = () =>{
        let totalPrice = 0;
        list.forEach((e)=>{
            totalPrice += e.subtotal
        });

        return totalPrice
    }
    
    return (
        <CartContext.Provider value={{
            products: list,
            addItem,
            removeItem,
            clear,
            updateCounter,
            getTotalPay,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext