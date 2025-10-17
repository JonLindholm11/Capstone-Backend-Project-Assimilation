import express from "express";
import { getSpecial_Pricing } from "../db/queries/special_pricing.js";

const router = express.Router();
export default router;

router.route("/special_pricing").get(async (req, res) => {
  const special_price = await getSpecial_Pricing();
  res.send(special_price);
});

router.route("/special_pricing/:id").get(async (req, res) => {
  const special_priceById = await getSpecial_Pricing(req.params.id);
  res.send(special_priceById);
});