import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { addfav } from "../utils/favslice";

const Body = () => {
  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(additem(product));
    window.alert("Item added to the cart");
 
  
  };
  const handlefav=(product)=>{
    dispatch(addfav(product))
    window.alert("Your Item is added to favourites");
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Products
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load products. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Product List
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg bg-white 
            hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-3 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 text-center">Price: ${product.price}</p>
            <p className="text-gray-600 text-center">Rating: {product.rating.rate}</p>
            <button className="w-full bg-red-500 mt-3 text-white p-2 cursor-pointer rounded-lg" onClick={()=> handlefav(product)}>
              Add to Favourite</button>
            
        <button
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
              onClick={() => handleAdd(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
