import express from "express";
import { getProducts } from "../db/queries/products.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  const products = await getProducts();
  res.send(products);
});
