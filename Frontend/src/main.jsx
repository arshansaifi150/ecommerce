import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>,
//     children:[
//       {
//         path: '/',
//         element: <Home/>
//       },

//     ],

//   },
//   {
//     path:'/signup',
//     element:<SignUp/>
//   },
//   {
//     path:'/login',
//     element:<Login/>
//   }
// ])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
