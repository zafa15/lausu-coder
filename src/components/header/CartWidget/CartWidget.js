import { useContext } from "react";
import CartContext from "../../../context/CartContext";

const CartWidget = () =>{
    const {count} = useContext(CartContext);
    return (
        <button type="button" className="cart-icon ml-3"><i className="mdi mdi-cart-outline"></i><span className="number-cart">{count}</span></button>
    )
}

export default CartWidget