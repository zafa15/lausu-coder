import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/CartContext";

const CartWidget = () =>{
    const {count} = useContext(CartContext);
    return (
        <Link to={`/cart`} className="cart-icon ml-3"><i className="mdi mdi-cart-outline"></i><span className="number-cart">{count}</span></Link>
    )
}

export default CartWidget