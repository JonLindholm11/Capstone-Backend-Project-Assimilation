import express from "express";
import { getCustomers, getCustomersById } from "../db/queries/customers.js";

const router = express.Router();
export default router;

router.route("/customers").get(async (req, res) => {
  const customers = await getCustomers();
  res.json(customers);
});

router.route("/customers/:id").get(async (req, res) => {
  const customersById = await getCustomersById(req.params.id);
  res.send(customersById);
});
