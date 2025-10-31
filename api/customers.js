import express from "express";
import { 
  getCustomers, 
  getCustomersById,
  getCustomerByAssigned_Salesman_Id
} from "../db/queries/customers.js";

const router = express.Router();
export default router;

router.route("/customers").get(async (req, res) => {
  const customers = await getCustomers();
  res.json(customers);
});

router.route("/customers/salesman/:salesman_id").get(async (req,res) => {
  const customersBySalesman_Id = await getCustomerByAssigned_Salesman_Id(req.params.salesman_id)
  res.json(customersBySalesman_Id)
})

router.route("/customers/:id").get(async (req, res) => {
  const customersById = await getCustomersById(req.params.id);
  res.send(customersById);
});
