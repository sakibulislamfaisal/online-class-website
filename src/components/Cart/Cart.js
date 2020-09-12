import React from "react";
import "./Cart.css";

const Cart = (props) => {
  //console.log(props.cart);
  const cart = props.cart;

  //count total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  //find shipping charges
  let shipping = 0;
  if (total > 3500) {
    shipping = 4.99;
  } else if (total > 3000) {
    shipping = 12.99;
  } else if (total > 2000) {
    shipping = 15.99;
  } else if (total > 0) {
    shipping = 19.99;
  }

  const totalPrice = total + shipping;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div className="cart">
      <h6>Ordered Item :</h6>
      <small>Selected Item : {cart.length}</small>
      <br />
      <small>Price : {formatNumber(total)}</small>
      <br />
      <small>Shipping Charge: {formatNumber(shipping)}</small>
      <br />
      <hr />
      <small>Total Cost : {formatNumber(totalPrice)}</small>
    </div>
  );
};

export default Cart;
