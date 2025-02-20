import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeitems } from "../utils/cartslice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items) || []; // ✅ Ensure cartItems is always an array
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems
            .filter((item) => item) 
            .map((item) => (
              <div key={item.id} className="border rounded-md p-4 shadow-md">
                <img src={item.image} alt={item.title} className="h-32 mx-auto" />
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <button
                  onClick={() => dispatch(removeitems(item.id))}
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
