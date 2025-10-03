import db from "../client.js";

await db.connect();
await seedUsers();
await db.end();
console.log("🌱 Users seeded.");

async function seedUsers() {
  const users = [
    {
      email: "admin@projectname.com",
      password: "admin123",
      role_id: 1,
    },
    {
      email: "salesman@projectname.com",
      password: "sales123",
      role_id: 2,
    },
    {
      email: "customerservice@projectname.com",
      password: "service123",
      role_id: 3,
    },
    {
      email: "user@projectname.com",
      password: "user123",
      role_id: 4,
    },
  ];
  return users;
}