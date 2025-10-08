import db from "../client.js";

await db.connect();
await seedOrders();
await db.end();
console.log("🌱 Orders seeded.");

async function seedOrders() {
  const orders = [
    {
      customer_id: 1,
      order_date: "2025-10-05",
      total_amount: 1247.5,
      order_status: "shipped",
      assigned_service_rep: 1,
      created_date: "2025-10-05",
    },
    {
      customer_id: 2,
      order_date: "2025-10-06",
      total_amount: 10.0,
      order_status: "processing",
      assigned_service_rep: 1,
      created_date: "2025-10-06",
    },
    {
      customer_id: 3,
      order_date: "2025-10-07",
      total_amount: 3456.75,
      order_status: "pending",
      assigned_service_rep: 1,
      created_date: "2025-10-07",
    },
  ];
  return orders;
}
