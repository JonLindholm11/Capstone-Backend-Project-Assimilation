import db from "#db/client";

export async function createOrders(
  customer_id,
  order_date,
  total_amount,
  order_status,
  assigned_service_rep,
  created_date
) {
  const SQL = `
    INSET INTO orders
    (customer_id, order_date, total_amount, order_status, assigned_service_rep, created_date)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  const { rows: orders } = db.query(
    SQL,
    customer_id,
    order_date,
    total_amount,
    order_status,
    assigned_service_rep,
    created_date
  );
  return orders;
}

export async function getOrders(
  customer_id,
  order_date,
  total_amount,
  order_status,
  assigned_service_rep,
  created_date
) {
  const SQL = `
    SELECT * FROM orders
    WHERE customer_id, order_date, total_amount, order_status, assigned_service_rep, created_date =
    $1, $2, $3, $4, $5, $6
    `;
  const { rows: orders } = db.query(
    SQL,
    customer_id,
    order_date,
    total_amount,
    order_status,
    assigned_service_rep,
    created_date
  );
  return orders;
}

export async function getOrdersByCustomerId(customer_id) {
  const SQL = `
    SELECT * FROM orders
    WHERE customer_id = $1
    `;
  const { rows: customer_id } = db.query(SQL, customer_id);
  return customer_id;
}

export async function getOrdersByOrder_Date(order_date) {
  const SQL = `
    SELECT * FROM orders
    WHERE order_date = $1
    `;
  const { rows: order_date } = db.query(SQL, order_date);
  return order_date;
}

export async function getOrdersByTotal_Amount(total_amount) {
  const SQL = `
    SELECT * FROM orders
    WHERE total_amount = $1
    `;
  const { rows: total_amount } = db.query(SQL, total_amount);
  return total_amount;
}

export async function getOrdersByOrder_Status(order_status) {
  const SQL = `
    SELECT * FROM orders
    WHERE order_status = $1
    `;
  const { rows: order_status } = db.query(SQL, order_status);
  return order_status;
}

export async function getOrdersByAssigned_Service_Rep(assigned_service_rep) {
  const SQL = `
    SELECT * FROM orders
    WHERE assigned_service_rep = $1
    `;
  const { rows: assigned_service_rep } = db.query(SQL, assigned_service_rep);
  return assigned_service_rep;
}

export async function getOrdersByCreated_Date(created_date) {
  const SQL = `
    SELECT * FROM orders
    WHERE created_date = $1
    `;
  const { rows: created_date } = db.query(SQL, created_date);
  return created_date;
}

export async function getOrdersById(id) {
  const SQL = `
    SELECT * FROM orders
    WHERE id = $1
    `;
  const { rows: id } = db.query(SQL, id);
  return id;
}
