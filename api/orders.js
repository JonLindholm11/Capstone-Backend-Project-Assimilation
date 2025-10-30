import express from "express";
import {
  getOrders,
  getOrdersByCreated_Date,
  getOrdersById,
} from "../db/queries/orders.js";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";

const router = express.Router();
export default router;

router.route("/orders").get(async (req, res) => {
  const orders = await getOrders();
  res.send(orders);
});

router
  .route("/orders/date/:created_date")
  .get(requireAuth, requireRole([1, 2, 3]), async (req, res) => {
    const ordersByDate = await getOrdersByCreated_Date(req.params.created_date);
    res.json({
      ordersByDate,
    });
  });

router.route("/orders/:id").get(async (req, res) => {
  const ordersById = await getOrdersById(req.params.id);
  res.send(ordersById);
});
