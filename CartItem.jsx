import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // Calculate total price
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle decrement safety check
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem({ id: item.id }));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  // Fallback UI for empty cart
  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>

          {/* Quantity controls */}
          <button onClick={() => handleDecrement(item)}>-</button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          <button onClick={() => dispatch(removeItem({ id: item.id }))}>
            Remove
          </button>

          <p>Subtotal: ₹{item.price * item.quantity}</p>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartItem;
