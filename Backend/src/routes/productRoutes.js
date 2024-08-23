import express from "express";
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const router = express.Router();

//create a new product
router.post("/create", async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock:req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });
  try {
    await Product.create(newProduct);
    res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error creating product" ,error});
  }
});

//get the all poduct List
//get the all product List
router.get("/all", async (req, res) => {
  try {
    console.log("Attempting to fetch all products");
    const products = await Product.find();
    console.log(`Found ${products.length} products`);
    
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
});



//get Product based on id
router.get("/:id", async (req, res) => {
    try {
        // Validate if the id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product ID format" });
        }

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
        
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
})

//update product based on id
router.put("/update/:id", async (req, res) => {
  const product_id = req.params.id;
  try {
    await Product.findByIdAndUpdate(product_id, {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: req.body.rating,
      stock:req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: req.body.thumbnail,
      images: req.body.images,
    });
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error updating product" });
  }
});

//delete a product from list based on id
router.delete("/delete/:id", async (req, res) => {
  const product_id = req.params.id;
  try {
    await Product.findByIdAndDelete(product_id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting product" });
  }
});

export default router;
