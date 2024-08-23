import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate = useNavigate()

    const  [productForm,setProductForm] = useState({
        title:"",
        description:"",

        price: "",
        discountPercentage:"",
        rating:"",
        stock:"",
        brand:"",
        category:"",
        thumbnail:"",
        images:""
    })

    const handleChange = (e)=>{
        const  {name,value} = e.target
        setProductForm({
            ...productForm,
            [name]:value,
        })

    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await axios.post(`http://localhost:5000/create`,productForm)
            console.log(productForm)
        } catch (error) {
            console.error(error)
            
        }
        setProductForm({
            title:"",
            description:"",
    
            price: "",
            discountPercentage:"",
            rating:"",
            stock:"",
            brand:"",
            category:"",
            thumbnail:"",
            images:""
        })
        navigate('/Products')

    }
    

  return (
    <div className='w-full flex justify-center'>
        <div className="bg-gray-300 p-8 rounded-lg shadow-md w-[80%] mt-10 flex ">
            <form action="" method="post" className='flex-col flex ' onSubmit={handleSubmit}>
                <div className=''>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Product Name
                        <input type="text" name="title" id="title" 
                        value={productForm.title}
                        onChange={handleChange}
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                        Description
                        <textarea name="description" id="description" cols="30" rows="10"
                        value={productForm.description}
                        onChange={handleChange}
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Price">
                        Price
                        <input type="number" name="price" id="price" 
                        value={productForm.price}
                        onChange={handleChange}
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="discountPercentage">
                        Discount Percentage
                        <input type="text" name="discountPercentage" id="discountPecentage" 
                        value={productForm.discountPercentage}
                        onChange={handleChange}
                        />
                    </label>

                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="rating">
                        Rating
                        <input type="number" name="rating" id="rating"
                        value={productForm.rating}
                        onChange={handleChange}
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="stock">
                        Stock:
                        <input type="number" name="stock" id="stock"
                        value={productForm.stock}
                        onChange={handleChange}
                        
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="brand">
                        Brand
                        <input type="text" name="brand" id="brand"
                        value={productForm.brand}
                        onChange={handleChange}
                        
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="category">
                        Category
                        <input type="text" name="category" id="category"
                        value={productForm.category}
                        onChange={handleChange}
                        
                        />
                    </label>

                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="thumbnail">
                        Thumbnail
                        <input type="text" name="thumbnail" id="thumbnail"
                        value={productForm.thumbnail}
                        onChange={handleChange}
                        
                        />
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="images">
                        Images
                        <input type="text" name="images" id="images"
                        value={productForm.images}
                        onChange={handleChange}
                        
                        />
                    </label>
                </div>
                <Button type="submit">
                    Add Product
                </Button>
            </form>
        
        </div>
        
    </div>
  )
}

export default AddProduct