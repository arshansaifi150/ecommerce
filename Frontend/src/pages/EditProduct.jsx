import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchPreviosData = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
       const response = res.data
       setProductForm({
        title: response.title,
        description: response.description,
        price: response.price,
        discountPercentage:response.discountPercentage,
        rating: response.rating,
        stock:response.stock,
        brand:response.brand,
        category:response.category,
        thumbnail:response.thumbnail,
        image: response.image

     })
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    fetchPreviosData(id);
  
    return () => {
      console.log("succesfully fetched prev data")
    }
  }, [`{id}`])
  



  const [productForm, setProductForm] = useState({
    title: "",
    description: "",

    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/products/update/${id}`, productForm);
      console.log(productForm);
    } catch (error) {
      console.log(error)
    }

    navigate('/Products')
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-gray-300 p-8 rounded-lg shadow-md w-[80%] mt-10 flex ">
        <form
          action=""
          method="post"
          className="flex-col flex "
          onSubmit={handleSubmit}
        >
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Product Name
              <input
                type="text"
                name="title"
                id="title"
                value={productForm.title}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                value={productForm.description}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Price"
            >
              Price
              <input
                type="number"
                name="price"
                id="price"
                value={productForm.price}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="discountPercentage"
            >
              Discount Percentage
              <input
                type="text"
                name="discountPercentage"
                id="discountPecentage"
                value={productForm.discountPercentage}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
              <input
                type="number"
                name="rating"
                id="rating"
                value={productForm.rating}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="stock"
            >
              Stock:
              <input
                type="number"
                name="stock"
                id="stock"
                value={productForm.stock}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="brand"
            >
              Brand
              <input
                type="text"
                name="brand"
                id="brand"
                value={productForm.brand}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
              <input
                type="text"
                name="category"
                id="category"
                value={productForm.category}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="thumbnail"
            >
              Thumbnail
              <input
                type="text"
                name="thumbnail"
                id="thumbnail"
                value={productForm.thumbnail}
                onChange={handleChange}
              />
            </label>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="images"
            >
              Images
              <input
                type="text"
                name="images"
                id="images"
                value={productForm.images}
                onChange={handleChange}
              />
            </label>
          </div>
          <Button type="submit">Update Product</Button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
