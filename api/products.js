import express from "express";
import {
  getProducts,
  getProductsByCategory,
  getProductsById,
} from "../db/queries/products.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

router.route("/products/:category").get(async (req, res) => {
  const productsByCategory = await getProductsByCategory(
    req.params.category
  );
  res.send(productsByCategory);
});

router.route("/products/:id").get(async (req, res) => {
  const productsById = await getProductsById(req.params.id);
  res.send(productsById);
});