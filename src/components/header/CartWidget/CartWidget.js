import { useContext } from "react";
import { useEffect } from "react/cjs/react.production.min";
import CartContext from "../../../context/CartContext";

const CartWidget = () =>{
    const {count, updateCounter} = useContext(CartContext);
    return (
        <button type="button" className="cart-icon ml-3"><i className="mdi mdi-cart-outline"></i><span className="number-cart">{count}</span></button>
    )
}

export default CartWidget