import express from "express";
import { getOrders, getOrdersById } from "../db/queries/orders.js";

const router = express.Router();
export default router;

router.route("/orders").get(async (req, res) => {
  const orders = await getOrders(req.orders);
  res.send(orders);
});

router.route("/orders/:id").get(async (req, res) => {
  const ordersById = await getOrdersById(req.orders.id);
  res.send(ordersById);
});