import db from "#db/client";

export async function createCustomers(
  user_id,
  company_name,
  contact_name,
  assigned_salesman_id
) {
  const SQL = `
    INSERT INTO customers (user_id, company_name, contact_name, assigned_salesman_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const { rows: customers } = await db.query(
    SQL,
    (user_id, company_name, contact_name, assigned_salesman_id)
  );
  return customers;
}

export async function leftJoinAssigned_Salesman_Id() {
  const SQL = `
     SELECT
     customers.id,
     customers.company_name,
     customers.contact_name,
     customers.assigned_salesman_id,
     users.id AS salesman_id,
     users.email AS salesman_email
     FROM customers
     LEFT JOIN users ON customers.assigned_salesman_id = users.id
    `;
  const { rows: assignSalesman } = await db.query(SQL);
  return assignSalesman;
}

export async function getCustomerByUser_Id(user_id) {
  const SQL = `
    SELECT * FROM customers WHERE user_id = $1
    `;
  const { rows: customer_id } = await db.query(SQL, [user_id]);
  return customer_id;
}

export async function getCustomerByCompany_Name(company_name) {
  const SQL = `
    SELECT * FROM customers WHERE company_name = $1
    `;
  const { rows: customer_company } = await db.query(company_name);
  return customer_company;
}

export async function getCustomerByContact_Name(contact_name) {
  const SQL = `
    SELECT * FROM customers WHERE contact_name = $1
    `;
  const { rows: customer_contact } = await db.query(contact_name);
  return customer_contact;
}

export async function getCustomerByAssigned_Salesman_Id(assigned_salesman_id) {
  const SQL = `
    SELECT * FROM customers WHERE assigned_salesman_id = $1
    `;
  const { rows: customer_salesman } = await db.query(assigned_salesman_id);
  return customer_salesman;
}
