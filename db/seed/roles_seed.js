import db from "../client.js";

await db.connect();
await seedRoles();
await db.end();
console.log("🌱 Roles seeded.");

async function seedRoles() {
  const roles = [
    {
      role_name: "Admin",
      description: "Admins have access to all pages and admin privileges",
      role_level: 1,
    },
    {
      role_name: "Salesman",
      description:
        "Salesman have access to salesman and customer service pages",
      role_level: 3,
    },
    {
      role_name: "Customer Service",
      description: "Customer Service has access to the customer service page",
      role_level: 2,
    },
    {
      role_name: "Customer",
      description: "Has access to the customer page aka the store",
      role_level: 4,
    },
  ];
  return roles;
}
