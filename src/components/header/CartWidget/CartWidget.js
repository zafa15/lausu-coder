import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cartContext";

const CartWidget = () =>{
    const {updateCounter} = useContext(CartContext);
    const counter = updateCounter();
    //console.log(counter);
    return (
        <Link to={`/cart`} className="cart-icon ml-3">
            <i className="mdi mdi-cart-outline"></i>
            <span className="number-cart">{counter}</span>
        </Link>
    )
}

export default CartWidget