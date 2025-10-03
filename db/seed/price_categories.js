import db from "../client.js";

await db.connect();
await seedPrice_Categories();
await db.end();
console.log("🌱 Price Categories seeded.");

async function seedPrice_Categories() {
  const price_categories = [
    {
      category_name: "standard",
      category_description: "base price for all items",
      discount_percentage: 0.0,
      tier_level: 1,
    },
    {
      category_name: "preferred",
      category_description:
        "preferred customer orders over threshold of item in a month",
      discount_percentage: 5.0,
      tier_level: 2,
    },
    {
      category_name: "bulk",
      category_description:
        "bulk customer orders over threshold of item in a month",
      discount_percentage: 10.0,
      tier_level: 3,
    },
    {
      category_name: "wholesale",
      category_description:
        "wholesale customer orders over threshold of item in a month",
      discount_percentage: 15.0,
      tier_level: 4,
    },
  ];
  return price_categories;
}