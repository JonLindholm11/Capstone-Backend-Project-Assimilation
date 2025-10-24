import express from "express";
//  import { getOrders, getOrdersById } from "../db/queries/orders.js"; //Jon code
//Jodson - added imports for order creation, update, delete functionality
import { 
  getOrders, 
  getOrdersById,
  createOrders,    
  updateOrder,    
  deleteOrder      
} from "../db/queries/orders.js";

const router = express.Router();
export default router;

router.route("/orders").get(async (req, res) => {
  const orders = await getOrders();
  res.send(orders);
});

router.route("/orders/:id").get(async (req, res) => {
  const ordersById = await getOrdersById(req.params.id);
  res.send(ordersById);
});
//Jodson - add order creation, update, delete routes below
// CREATE order (POST)
router.route("/orders").post(async (req, res) => {
  const orderData = req.body;
  const newOrder = await createOrders(orderData);
  res.status(201).json(newOrder);
});

// UPDATE order (PUT)
router.route("/orders/:id").put(async (req, res) => {
  const orderId = req.params.id;
  const orderData = req.body;
  const updatedOrder = await updateOrder(orderId, orderData);
  res.json(updatedOrder);
});

// DELETE order (DELETE)
router.route("/orders/:id").delete(async (req, res) => {
  const orderId = req.params.id;
  await deleteOrder(orderId);
  res.send("The Order deleted successfully");
});