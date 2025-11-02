import express from "express";
import {
  getProducts,
  getProductsByCategory,
  getProductsById,
} from "../db/queries/products.js";
import { addCustomerPricingByUserId } from "#utils/displayPriceCalculation";
import db from "../db/client.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  try {
    console.log('1. Getting products...');
    const products = await getProducts();
    console.log('2. Products retrieved:', products.length);
    
    const user_id = req.user?.id;
    
    const productsWithPricing = await addCustomerPricingByUserId(products, user_id, db);
    
    res.send(productsWithPricing);
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).json({ error: error.message });
  }
});

router.route("/products/category/:category").get(async (req, res) => {
  const productsByCategory = await getProductsByCategory(
    req.params.category
  );

  const user_id = req.user?.id

  const productsWithPricing = await addCustomerPricingByUserId(productsByCategory, user_id, db)
  res.send(productsWithPricing);
});

router.route("/products/:id").get(async (req, res) => {
  const productsById = await getProductsById(req.params.id);
  
   const user_id = req.user?.id

  const productsWithPricing = await addCustomerPricingByUserId(productsById, user_id, db)
  res.send(productsWithPricing);
});
