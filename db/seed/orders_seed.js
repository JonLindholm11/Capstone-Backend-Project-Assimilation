import { createOrders } from "#db/queries/orders";

export async function seedOrders() {
  const orders = [
    {
      customer_id: 1,
      total_amount: 1247.5,
      order_status: "shipped",
      assigned_service_rep: 1,
      created_date: "2025-10-05",
    },
    {
      customer_id: 2,
      total_amount: 10.0,
      order_status: "processing",
      assigned_service_rep: 1,
      created_date: "2025-10-06",
    },
    {
      customer_id: 3,
      total_amount: 3456.75,
      order_status: "pending",
      assigned_service_rep: 1,
      created_date: "2025-10-07",
    },
  ];
  for (const order of orders) {
      await createOrders(order);
    }
    console.log("completed seeding orders");
}
