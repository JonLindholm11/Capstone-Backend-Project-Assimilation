import express from "express";
import {
  createOrders,
  getOrders,
  getOrdersByCreated_Date,
  getOrdersById,
} from "../db/queries/orders.js";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";
import { createOrder_Items } from "#db/queries/order_items";
import requireBody from "#middleware/requireBody";

const router = express.Router();
export default router;

router
  .route("/orders")
  .get(async (req, res) => {
    const orders = await getOrders();
    res.send(orders);
  })
  .post(
    requireAuth,
    requireBody(["customer_id", "product_id", "quantity"]),
    async (req, res) => {
      const { customer_id, product_id, quantity } = req.body;
      try {
        const order = await createOrders(customer_id);
        const orderItems = await createOrder_Items(
          order.id,
          customer_id,
          product_id,
          quantity
        );

        res.status(200).json({
          message: "order created successfully",
          order,
          orderItems,
        });
      } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
      }
    }
  );

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
