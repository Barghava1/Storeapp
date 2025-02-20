import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx";
import Category from "./components/Categeroy.jsx";
import Error from "./components/Error.jsx";
const approute = createBrowserRouter([
  {
    path: "/", // Main route
    element: <App />,
    
     // App serves as layout
    children: [
      {
        index: true, // This means it will render on "/"
        element: <Body />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/category/:categoryName",
        element:<Category/>
      },
     
     
    ],
    errorElement:<Error/>
   
   
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approute} />
    
  </StrictMode>
);
