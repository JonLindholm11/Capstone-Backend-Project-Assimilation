import db from "../client.js";

await db.connect();
await seedSpecialPricing();
await db.end();
console.log("🌱 Roles seeded.");

async function seedSpecialPricing() {
    const specialPricing = {
        product_id: 1,
        special_price: 15.99,
        start_date: "2025-10-30T:10:00:00Z",
        end_date: "2025-11-15T:10:00:00Z",
        is_active: true,
        created_by_user_id: 1
    }
    return specialPricing
}