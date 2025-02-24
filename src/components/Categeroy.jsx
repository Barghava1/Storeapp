import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";
import { addfav } from "../utils/favslice";

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();
  const handleitem = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product:", product); // Debugging log
      return;
    }
    dispatch(additem(product));
    console.log("Added to Cart:", product);
  };
  const handlefav = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product:", product); // Debugging log
      return;
    }
    window.alert("Item added to Cart");
    dispatch(addfav(product));
    // console.log("Added to Cart:", product);
  };
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [categoryName]); // Runs when the categoryName changes

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center capitalize">{categoryName}</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-md p-4 shadow-md">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button className="w-full mt-3 p-2 bg-red-500 text-white rounded-lg" onClick={()=>handlefav(product)}>
                Add to Favourite</button>
              <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition" onClick={()=>handleitem(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
