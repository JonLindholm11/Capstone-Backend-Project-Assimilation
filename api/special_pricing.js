import express from "express";
import { getSpecial_Pricing } from "../db/queries/special_pricing.js";
import { 
  getSpecial_Pricing, 
  createSpecial_Pricing,
  updateSpecialPricing,
  deleteSpecialPricing 
} from "../db/queries/special_pricing.js";

// Then your POST route uses createSpecial_Pricing (line 20)
// Your PUT route uses updateSpecialPricing (line 30)
// Your DELETE route uses deleteSpecialPricing (line 38)

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
// Jodson- add special pricing creation, update, delete routes below
// CREATE special pricing (POST)
router.route("/special_pricing").post(async (req, res) => {
  const pricingData = req.body;
  const newPricing = await createSpecial_Pricing(pricingData);
  res.status(201).json(newPricing);
});

// UPDATE special pricing (PUT)
router.route("/special_pricing/:id").put(async (req, res) => {
  const pricingId = req.params.id;
  const pricingData = req.body;
  const updatedPricing = await updateSpecialPricing(pricingId, pricingData);
  res.json(updatedPricing);
});

// DELETE special pricing (DELETE)
router.route("/special_pricing/:id").delete(async (req, res) => {
  const pricingId = req.params.id;
  // TODO: Add deleteSpecialPricing query function
  await deleteSpecialPricing(pricingId);
  res.send("Special pricing deleted successfully");
});