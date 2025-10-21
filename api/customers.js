import express from "express";
// import { getCustomers, getCustomersById } from "../db/queries/customers.js"; //Jon code
//Jodson - added imports for customer creation, update, delete functionality
import { 
  getCustomers, 
  getCustomersById,
  createCustomers,
  updateCustomer,
  deleteCustomer 
} from "../db/queries/customers.js";

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

// jodson - add customer creation, update, delete routes below
// CREATE customer (POST)
router.route("/customers").post(async (req, res) => {
  const customerData = req.body;
  const newCustomer = await createCustomers(customerData);
  res.status(201).json(newCustomer);
});

// UPDATE customer (PUT)
router.route("/customers/:id").put(async (req, res) => {
  const customerId = req.params.id;
  const customerData = req.body;
  const updatedCustomer = await updateCustomer(customerId, customerData);
  res.json(updatedCustomer);
});

// DELETE customer (DELETE)
router.route("/customers/:id").delete(async (req, res) => {
  const customerId = req.params.id;
  await deleteCustomer(customerId);
  res.send("Customer deleted successfully");
});