import express from "express";
import { getCustomers, getCustomersById } from "../db/queries/customers.js";

const router = express.Router();
export default router;

router.route("/customers").get(async (req, res) => {
  const customers = await getCustomers(req.customers);
  res.send(customers);
});

router.route("/customers/:id").get(async (req, res) => {
  const customersById = await getCustomersById(req.customers.id);
  res.send(customersById);
});