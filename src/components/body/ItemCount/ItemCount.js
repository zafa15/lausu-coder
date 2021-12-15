import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ onConfirm, maxQuantity }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < maxQuantity) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item--count mb-3">
      <div className="row mb-3">
        <div className="col-lg-8">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <button className="btn-counters" onClick={decrement}>
                <strong>-</strong>
              </button>
            </div>
            <div className="col-lg-6 col-md-6" align="center">
              <p className="m-2">
                <strong>{count}</strong>
              </p>
            </div>
            <div className="col-lg-3 col-md-3">
              <button className="btn-counters" onClick={increment}>
                <strong>+</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <button
            type="button"
            className="btn btn-add-item mt-3"
            onClick={() => onConfirm(count)}
          >
            <i className="mdi mdi-cart-outline mr-2"></i>Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
