import { createCustomer_Category_Pricing } from "#db/queries/customer_category_pricing";

export async function seedCustomer_Category_Pricing() {
  const customer_category_pricing = [
    {
      customer_id: 1,
      product_category: "construction tools",
      price_tier_id: 3,
    },
  ];
  for (const ccp of customer_category_pricing) {
    await createCustomer_Category_Pricing(ccp);
  }
  console.log("completed seeding customer category pricing");
}
