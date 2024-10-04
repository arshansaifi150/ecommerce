import GenderCards from "@/components/menWomenKids/GenderCards";
import MainBanner from "../components/mainBanner/MainBanner";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

function Home() {
  
  const [products, setProducts] = useState([]);
  

  const getProducts = async()=>{
    try {
      const response = await axios.get('http://localhost:5000/products/all');
      setProducts(response.data)
            
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(()=>{
    getProducts();
    

  },[])

  // const cardClick = (id)=>{
  //     navigate(`/ProductDetail/${id}`)
  // }

  console.log(products)
  return (
    <>
      <MainBanner />
      <GenderCards />
      <div className="text-center text-3xl font-semibold mt-10 underline italic"><h1>Trending  Products</h1></div>
      <div className="w-full flex justify-center mt-10 mb-20">
        
        <div className="w-[80%] flex gap-5 justify-center flex-wrap ">
       {products?.filter((item,index)=> index<6).map((product)=>(
      <Link to={`ProductDetail/${product._id}`}> 
      <ProductCard  product={product} key={product._id}
      // onCick={()=>cardClick(product._id)}
      />
      </Link>
       ))} 
       </div>
      </div>
    </>
  );
}

export default Home;
