import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
function ProductDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState();

  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("error fetching productDetails", error);
    }
  };
  useEffect(() => {
    fetchProductDetails(id);

    return () => {
      console.log("successfully product fetch");
    };
  }, [`${id}`]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/delete/${id}`);
      navigate("/Products");
    } catch (error) {
      console.log("error deleting product", error);
    }
  };

  console.log(product);

  return (
    <>
      <div className="w-full bg-gray-200 text-end pt-5">
        {/* <button onClick={() => handleDelete(product?._id)}>Delete</button>
         */}
        <AlertDialog>
          <AlertDialogTrigger ><Button>Delete</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                Product and remove your data from Dtabase.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={()=>handleDelete(product?._id)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Link to={`/Edit/${product?._id}`}>
          <Button className="mr-10 ml-5 px-6">
            Edit
          </Button>
        </Link>
      </div>
      <div className="w-full flex justify-center bg-gray-200 h-screen">
        <div className="w-[80%] flex justify-center gap-10 mt-10">
          <div className="">
            <img src={product?.thumbnail} alt={product?.title} />
          </div>
          <div className=" flex flex-col">
            <div>
              <h1 className="text-3xl">{product?.title}</h1>
            </div>
            <div>
              <p className="text-lg">{product?.description}</p>
            </div>
            <div>
              <p className="text-lg">{product?.price}</p>
            </div>
            <div>
              <p className="text-lg">{product?.category}</p>
            </div>
            <div>
              <p className="text-lg">{product?.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
