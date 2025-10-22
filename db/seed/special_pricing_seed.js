import { createSpecial_Pricing } from "#db/queries/special_pricing";

export async function seedSpecial_Pricing() {
  const specialPricing = [
  {
    product_id: 1,
    special_price: 15.99,
    start_date: "2025-10-30T:10:00:00Z",
    end_date: "2025-11-15T:10:00:00Z",
    is_active: true,
    created_by_user_id: 1,
  },
]
  for (const specialPrice of specialPricing) {
    await createSpecial_Pricing(specialPrice)
  }
  console.log("finished seeding special pricing")
}
