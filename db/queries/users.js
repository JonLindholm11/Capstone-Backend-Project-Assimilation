import db from "#db/client";
import bcrypt from "bcrypt";

export async function createUser({ email, password, role_id }) {
  const sql = `
  INSERT INTO users
    (email, password, role_id)
  VALUES
    ($1, $2, $3)
  RETURNING *
  `;
  const hashedPassword = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [email, hashedPassword, role_id]);
  return user;
}

export async function getUserByUsernameAndPassword(email, password) {
  const sql = `
  SELECT *
  FROM users
  WHERE email = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [email]);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}

export async function getUserById(id) {
  const sql = `
  SELECT *
  FROM users
  WHERE id = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [id]);
  return user;
}
// Jodson - added functions for updating and deleting users for admin panel

export async function updateUserRole(userId, roleId) {
  const sql = `
    UPDATE users 
    SET role_id = $1 
    WHERE id = $2 
    RETURNING id, email, role_id
  `;
  const { rows: [user] } = await db.query(sql, [roleId, userId]);
  return user;
}

export async function deleteUser(userId) {
  const sql = `
    DELETE FROM users 
    WHERE id = $1 
    RETURNING id, email, role_id
  `;
  const { rows: [user] } = await db.query(sql, [userId]);
  return user;
}