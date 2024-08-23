import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products/all");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const cardClick = (id)=>{
  //     navigate(`/ProductDetail/${id}`)
  // }

  console.log(products);
  return (
    <>
    <div className="w-full text-end ">
    <Link to="/AddProduct">
        <Button className="mr-10 mt-5">
            Add Product
        </Button>
        </Link>
    </div>
      <div className="w-full flex justify-center mt-10 mb-20">
        <div className="w-[80%] flex gap-5 justify-center flex-wrap ">
          {products?.map((product) => (
            <Link to={`/ProductDetail/${product._id}`}>
              <ProductCard
                product={product}
                key={product._id}
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
