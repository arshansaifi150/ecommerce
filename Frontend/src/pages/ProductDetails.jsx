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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { Button } from "@/components/ui/button";
import { CurrencyRupeeSharp, Star } from "@mui/icons-material";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
function ProductDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isAdmin,setIsAdmin] = useState(false)
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
    const admin = localStorage.getItem('isAdmin')
    // console.log(admin)
    if(!admin){
      console.log('notAdmin')
    }else{
      setIsAdmin(true)
    } 

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

  // console.log(product);

  const ratings = [
    {
      id:1,
      rating:5,
      name:"Xyz",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati consequuntur tempore veniam! Quas perferendis molestias sit eligendi corporis aliquid voluptate est, nostrum libero deserunt tempora eos. Suscipit placeat accusantium praesentium.Aut culpa accusamus esse sint veritatis saepe! Adipisci quis ratione et? Odio eaque alias eum autem incidunt mollitia debitis? Sunt iure tempora possimus quod quidem mollitia modi incidunt consequatur soluta!"
      
    },
    {
      id:2,
      rating:4.5,
      name:"Xyz",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati consequuntur tempore veniam! Quas perferendis molestias sit eligendi corporis aliquid voluptate est, nostrum libero deserunt tempora eos. Suscipit placeat accusantium praesentium.Aut culpa accusamus esse sint veritatis saepe! Adipisci quis ratione et? Odio eaque alias eum autem incidunt mollitia debitis? Sunt iure tempora possimus quod quidem mollitia modi incidunt consequatur soluta!"
      
    },
    {
      id:3,
      rating:5,
      name:"Xyz",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati consequuntur tempore veniam! Quas perferendis molestias sit eligendi corporis aliquid voluptate est, nostrum libero deserunt tempora eos. Suscipit placeat accusantium praesentium.Aut culpa accusamus esse sint veritatis saepe! Adipisci quis ratione et? Odio eaque alias eum autem incidunt mollitia debitis? Sunt iure tempora possimus quod quidem mollitia modi incidunt consequatur soluta!"
      
    }


  ]



  return (
    <>
    {isAdmin&&(

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
    )}
      <div className="w-full flex justify-center bg-gray-200 h-screen">
        <div className="w-[40%] flex justify-center gap-10 mt-10">
          <div className="">
            <img src={product?.thumbnail} alt={product?.title} 
            className="object-cover aspect-square"
             />
          </div>
          <div className=" h-fit flex flex-col gap-10 justify-between m-5">
            <div>
              <h1 className="text-3xl ">{product?.title}</h1>
            </div>
            <div>
            <div>
              <p className="text-lg">{product?.description}</p>
            </div>
            <div>
              <p className="text-lg font-semibold"><CurrencyRupeeSharp/>{product?.price}</p>
            </div>
            <div>
              <p className="text-lg">Category: <br />{product?.category}</p>
            </div>
            <div>
              <p className="text-lg font-semibold ">Rating:{product?.rating}<Star className="text-yellow-400"/></p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" h-fit">
      <Carousel className='w-full'>
        <CarouselContent className='w-full '>
          <div className="flex">
        {ratings?.map((rating)=>(

          <CarouselItem key={rating.id}>
            <div className=" flex flex-col items-center w-[30%] p-3 shadow-2xl bg-white rouded-md">
              <div>
                {rating.name}
              </div>
              <div>
                {rating.rating}
              </div>
              <div>
                <p className="word-clip">
                {rating.description}
                </p>
              </div>
              

            </div>
          </CarouselItem>
        ))}
        </div>
        </CarouselContent>
      </Carousel>
      </div>
      
      
    </>
  );
}

export default ProductDetails;
