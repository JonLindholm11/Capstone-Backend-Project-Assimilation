import express from "express";
import { getProducts, getProductsById } from "../db/queries/products.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

router.route("/products/:id").get(async (req, res) => {
  const productsById = await getProductsById(req.params.id);
  res.send(productsById);
});

router.route("/products/category").get(async (req,res) => {
    const productsByCategory = await getProductsById(req.params.category_category)
    res.send(productsByCategory)
})