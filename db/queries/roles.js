import db from "#db/client";

export async function createRoles(role_name, description, role_level) {
  const SQL = `
    INSERT INTO roles VALUES (role_name, description, role_level) WHERE ($1, $2, $3)
    `;
  const { rows: roles } = await db.query(role_name, description, role_level);
  return roles;
}

export async function getRoleByRoleLevel(role_level) {
  const SQL = `
    SELECT * FROM roles WHERE role_level = $1
    `;
  const { rows: role_level } = await db.query(SQL, [role_level]);
  if (!role_level) return null;
  return role_level;
}

export async function getRolesById(id) {
  const SQL = `
    SELECT * FROM roles WHERE id = $1
    `;
  const { roles: role_id } = await db.query(SQL, [role_id]);
  return role_id;
}
