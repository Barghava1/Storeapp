import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removefav } from "../utils/favslice";

const Fav = () => {
  const favItems = useSelector((store) => store.fav.items) || []; // ✅ Ensure cartItems is always an array
  const dispatch = useDispatch();
  const handle=(item)=>{
    if(window.confirm("Do you want to remove")){
    dispatch(removefav(item))
    }
    else{}
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Your Favourites</h1>

      {favItems.length === 0 ? (
        <p className="text-center text-gray-500">Your favourite is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favItems
            .filter((item) => item) 
            .map((item) => (
              <div key={item.id} className="border rounded-md p-4 shadow-md">
                <img src={item.image} alt={item.title} className="h-32 mx-auto" />
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <button
                  onClick={() => handle(item.id)}
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
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

export default Fav;

