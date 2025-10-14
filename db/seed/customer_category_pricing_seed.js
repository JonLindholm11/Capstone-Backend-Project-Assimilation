import db from "../client.js";

await db.connect();
await seedCustomer_Category_Pricing();
await db.end();
console.log("🌱 Customer_Category_Pricing seeded.");

async function seedCustomer_Category_Pricing() {
  const ccp = [
    {
      customer_id: 1,
      product_category: "construction tools",
      price_tier_id: 3,
    },
  ];
  return ccp;
}
