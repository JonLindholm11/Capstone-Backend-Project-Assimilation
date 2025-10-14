import express from "express";
import { getOrders, getOrdersById } from "../db/queries/orders.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  const orders = await getOrders(req.orders);
  res.send(orders);
});

router.route("/products/:id").get(async (req, res) => {
  const ordersById = await getOrdersById(req.orders.id);
  res.send(ordersById);
});