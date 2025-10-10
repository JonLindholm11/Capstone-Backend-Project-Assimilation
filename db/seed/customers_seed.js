import db from "../client.js";

await db.connect();
await seedCustomers();
await db.end();
console.log("🌱 Customers seeded.");

async function seedCustomers() {
  const customers = [
    {
      user_id: 4,
      company_name: "test1",
      contact_name: null,
      assigned_salesman_id: 1,
    },
    {
      user_id: 4,
      company_name: null,
      contact_name: "test2",
      assigned_salesman_id: 1,
    },
    {
      user_id: 4,
      company_name: "test3",
      contact_name: "test3",
      assigned_salesman_id: 1,
    },
    {
      user_id: 4,
      company_name: null,
      contact_name: null,
      assigned_salesman_id: 1,
    },
  ];
  return customers;
}
