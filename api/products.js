import express from "express";
import { getProducts, getProductsById } from "../db/queries/products.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  const products = await getProducts(req.products);
  res.send(products);
});

router.route("/products/:id").get(async (req, res) => {
  const productsById = await getProductsById(req.products.id);
  res.send(productsById);
});

router.route("/products/category").get(async (req,res) => {
    const productsByCategory = await getProductsById(req.products.category_category)
})