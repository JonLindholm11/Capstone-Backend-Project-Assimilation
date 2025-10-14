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
      email: "customertest_1@email.com",
      assigned_salesman_id: 1,
      account_status : "active"
    },
    {
      user_id: 4,
      company_name: null,
      contact_name: "test2",
      email: "customertest_2@email.com",
      assigned_salesman_id: 1,
      account_status : "active"
    },
    {
      user_id: 4,
      company_name: "test3",
      contact_name: "test3",
      email: "customertest_3@email.com",
      assigned_salesman_id: null,
      account_status : "pending"
    },
    {
      user_id: 4,
      company_name: null,
      contact_name: null,
      email: "customertest_4@email.com",
      assigned_salesman_id: null,
      account_status: "pending"
    },
  ];
  return customers;
}
