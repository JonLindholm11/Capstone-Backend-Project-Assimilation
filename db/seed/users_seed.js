import { createUser } from "#db/queries/users";

export async function seedUsers() {
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
  for (const user of users) {
      await createUser(user);
    }
    console.log("completed seeding user");
}