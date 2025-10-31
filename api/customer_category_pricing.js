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
  .route("/customer_pricing/:customer_id")
  .get(requireAuth, requireRole([1, 2]), async (req, res) => {
    const customerPricingByCustomerId =
      await getCustomerCategoryPricingByCustomerId(req.params.customer_id);
    res.json(customerPricingByCustomerId);
  });

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

router
  .route("/customer_pricing")
  .post(requireAuth, requireRole([1, 2]), async (req, res) => {
    try {
      const { customer_id, product_category, price_tier_id } = req.body;

      const customer_pricing = await createCustomer_Category_Pricing({
        customer_id,
        product_category,
        price_tier_id,
      });

      res.status(201).json({
        message: "customer discount set up successfully",
        customer_pricing,
      });
    } catch (error) {
      console.error("Error creating customer pricing:", error);
      res.status(500).json({ error: "Failed to create customer pricing" });
    }
  });

router
  .route("/update/customer_pricing/:id")
  .patch(requireAuth, requireRole([1, 2]), async (req, res) => {
    const id = parseInt(req.params.id);
    const { price_tier_id } = req.body;

    try {
      const customer_category_pricing = await updateCustomerCategoryPricing(
        id,
        price_tier_id
      );
      res.json({
        message: "customer pricing updated successfully",
        customer_category_pricing,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
