import { createOrder_Items } from "#db/queries/order_items";

export async function seedOrder_Items() {
  const order_items = [
    {
      order_id: 1,
      customer_id: 1,
      product_id: 14,
      quantity: 3,
      unit_price: 4.99,
      total_price: 14.97,
    },
    {
      order_id: 1,
      customer_id: 1,
      product_id: 5,
      quantity: 2,
      unit_price: 2.99,
      total_price: 4.98,
    },
    {
      order_id: 1,
      customer_id: 1,
      product_id: 17,
      quantity: 1,
      unit_price: 14.99,
      total_price: 14.99,
    },
  ];
  for (const orderItem of orderItems) {
    await createOrder_Items(orderItem);
  }
  console.log("completed seeding order items");
}
