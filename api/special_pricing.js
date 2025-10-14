import express from "express";
import { getSpecial_Pricing, getSpecial_Pricing } from "../db/queries/customers.js";

const router = express.Router();
export default router;

router.route("/special_pricing").get(async (req, res) => {
  const special_price = await getSpecial_Pricing(req.special_pricing);
  res.send(special_price);
});

router.route("/special_pricing/:id").get(async (req, res) => {
  const special_priceById = await getSpecial_Pricing(req.special_pricing.id);
  res.send(special_priceById);
});