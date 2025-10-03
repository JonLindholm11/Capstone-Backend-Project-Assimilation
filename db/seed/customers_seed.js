import db from "../client.js";

await db.connect();
await seedCustomers();
await db.end();
console.log("🌱 Customers seeded.");

async function seedCustomers() {
  const customers = [
    {
      company_name: "test1",
      contact_name: null,
      email: "testemail1@email.com",
      price_tier_id: 1,
      assigned_salesman_id: 1,
    },
    {
      company_name: null,
      contact_name: "test2",
      email: "testemail2@email.com",
      price_tier_id: 1,
      assigned_salesman_id: 1,
    },
    {
      company_name: "test3",
      contact_name: "test3",
      email: "testemail3@email.com",
      price_tier_id: 1,
      assigned_salesman_id: 1,
    },
    {
      company_name: null,
      contact_name: null,
      email: "testemail4@email.com",
      price_tier_id: 1,
      assigned_salesman_id: 1,
    },
  ];
  return customers;
}