import express from "express";
import {
  getCustomers,
  getCustomersById,
  getCustomerByAssigned_Salesman_Id,
  updateCustomerAssignedRepId,
} from "../db/queries/customers.js";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";

const router = express.Router();
export default router;

router.route("/customers").get(async (req, res) => {
  const customers = await getCustomers();
  res.json(customers);
});

router.route("/customers/salesman/:salesman_id").get(async (req, res) => {
  const customersBySalesman_Id = await getCustomerByAssigned_Salesman_Id(
    req.params.salesman_id
  );
  res.json(customersBySalesman_Id);
});

router.route("/customers/:id").get(async (req, res) => {
  const customersById = await getCustomersById(req.params.id);
  res.send(customersById);
});

router
  .route("/customers/:id")
  .patch(requireAuth, requireRole([1]), async (req, res) => {
    const id = parseInt(req.params.id);
    const { assigned_salesman_id } = req.body;

    try {
      const customer = await updateCustomerAssignedSalesmanId(
        id,
        assigned_salesman_id
      );
      res.json({
        message: "customer's salesman updated successfully",
        customer,
      });
    } catch (error) {
      console.error("Error updating customer assigned salesman", error);
      res.status(400).json({ error: error.message });
    }
  });
