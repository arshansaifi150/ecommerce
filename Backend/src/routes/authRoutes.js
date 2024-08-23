import express from "express";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

//getUser info
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Register
router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });

  try {
    const user = await User.findOne({ email: newUser.email });
    if (user) return res.status(400).json({ msg: "Email already exists" });

    newUser.password = await bcrypt.hash(newUser.password, 12);
    await newUser.save();
    const token = newUser.generateAuthToken();
    const data = {
      token: token,
      id: newUser.id,
      isAdmin: newUser.id,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
      const {email,password} = req.body;
      if (!email||!password) {
          return res.json({message:'All fields are required'});
      }
      const user = await User.findOne({email});
      if (!user) {
          return res.json({message:'User not found',
            success:false,
          });
      }
      const auth = await bcrypt.compare(password,user.password);
      if (!auth) {
          return res.json({message:"Incorrect password or email",
            success:false,
          })
      }
      const token = user.generateAuthToken()
      const data = {
        token: token,
        id: user.id,
        isAdmin: user.isAdmin,
      }
      res.json(data);
      
  } catch (error) {
      console.error(error)
  }
})

export default router;
