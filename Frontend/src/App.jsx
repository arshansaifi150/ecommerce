import "./App.css";

import { AuthContext } from "./context/authContext.jsx";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

import RequiredAuth from "./utils/authRoutes.jsx";
import Layout from "./components/Layout";

function App() {

  const [userLoggedData,setUserLoggedData] = useState({
    token:null,
    userId:null,
    isAdmin:false
  })
  const login = (token,userId,isAdmin)=>{
    localStorage.setItem("token",token);
    localStorage.setItem("userId",userId);
    setUserLoggedData({
      token:token,
      userId:userId,
      isAdmin:isAdmin
    })
  }
  const logout = ()=>{
    setUserLoggedData({
      token:null,
      userId:null,
      isAdmin:false
    })
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }

  return (
  <>
  <AuthContext.Provider
  value={{
    token:userLoggedData.token,
    userId:userLoggedData.userId,
    isAdmin:userLoggedData.isAdmin,
    login:login,
    logout:logout
  }}
  >
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/ProductDetail/:id" element={<ProductDetails/>} />
          <Route path="/Products" element={<AllProducts/>} />
        </Route>
        <Route path="/AddProduct" element={
          <RequiredAuth>
          <AddProduct/>
          </RequiredAuth>
          }/>
        <Route path="/Edit/:id" element={
          <RequiredAuth>
          <EditProduct/>
          </RequiredAuth>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
  </>
);
}

export default App;
