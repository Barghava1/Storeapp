import React from "react";
import { MagnifyingGlassIcon, HeartIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cart = useSelector((store) => store.cart.items);
  return (
    <header className="bg-green-400 shadow-2xl rounded-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Barghava StoreApp</div>

        {/* Navigation Menu */}
        <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
    <Link to="/"> <li className="hover:text-white cursor-pointer m-2">Home</li></Link>
    <Link to="/category/electronics"><li className="hover:text-white cursor-pointer m-2">Electronics</li></Link>
    <Link to="/category/jewelery"><li className="hover:text-white cursor-pointer m-2">Jewelry</li></Link>
    <Link to="/category/men's clothing"><li className="hover:text-white cursor-pointer m-2">Men's Fashion</li></Link>
    <Link to="/category/women's clothing"><li className="hover:text-white cursor-pointer m-2">Women's Fashion</li></Link>
  </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex space-x-6 text-gray-600">
          <span className="hover:text-blue-500 cursor-pointer">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </span>
          <span className="hover:text-red-500 cursor-pointer">
            <HeartIcon className="h-6 w-6" />
          </span>
          <span className="hover:text-blue-500 cursor-pointer">
            <UserIcon className="h-6 w-6" />
          </span>
        <Link to="/cart"> <span className="hover:text-blue-500 cursor-pointer relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cart.length}</span>
          </span></Link> 
        </div>
      </div>
    </header>
  );
};

export default Header;
