import express from "express";
import { getOrder_Items, getOrder_ItemsById } from "../db/queries/orders_items.js";

const router = express.Router();
export default router;

router.route("/order_items").get(async (req, res) => {
  const orders_items = await getOrder_Items(req.orders);
  res.send(orders_items);
});

router.route("/order_items/:id").get(async (req, res) => {
  const orders_itemsById = await getOrder_ItemsById(req.orders.id);
  res.send(orders_itemsById);
});
