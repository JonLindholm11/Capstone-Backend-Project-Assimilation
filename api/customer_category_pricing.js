import {
  checkIfCustomerPricingExists,
  createCustomer_Category_Pricing,
  getCustomerCategoryPricing,
  getCustomerCategoryPricingByCustomerId,
  updateCustomerCategoryPricing,
} from "#db/queries/customer_category_pricing";
import { requireAuth } from "#middleware/requireAuth";
import requireBody from "#middleware/requireBody";
import { requireRole } from "#middleware/requireRole";
import express from "express";
const router = express.Router();
export default router;

router
  .route("/customer_pricing")
  .get(requireAuth, requireRole([1, 2]), async (req, res) => {
    const customerPricing = await getCustomerCategoryPricing();
    res.json(customerPricing);
  });

router
  .route("/customer_pricing/:customer_id").get(
    requireAuth,
    requireRole([1,2]),
    async (req,res) => {
        const customerPricingByCustomerId = await getCustomerCategoryPricingByCustomerId(req.params.customer_id)
        res.json(customerPricingByCustomerId)
    }
  )

router
  .route("/customer_pricing/:customer_id")
  .put(
    requireAuth,
    requireRole([1, 2]),
    requireBody(["customer_id", "product_category", "price_tier_id"]),
    async (req, res) => {
      try {
        const { customer_id, product_category, price_tier_id } = req.body;

        const customerPricingExists = await checkIfCustomerPricingExists(
          customer_id,
          product_category
        );

        let result;
        if (customerPricingExists) {
          result = await updateCustomerCategoryPricing(
            customerPricingExists.id,
            price_tier_id
          );
          return res.json({
            action: "updated",
            data: result,
          });
        } else {
          result = await createCustomer_Category_Pricing(
            customer_id,
            product_category,
            price_tier_id
          );
          return res.json({
            action: "created",
            data: result,
          });
        }
      } catch (error) {
        console.error("Error saving customer pricing:", error);
        res.status(500).json({ error: "Failed to save customer pricing" });
      }
    }
  );
