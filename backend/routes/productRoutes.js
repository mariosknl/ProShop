import express from "express";
import AsyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

const router = express.Router();

// @desc    Fetch all Products
// @route   Get /api/products
// @access  Public
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc    Fetch Single Product
// @route   Get /api/product/:id
// @access  Public

router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found!");
    }
  })
);

export default router;