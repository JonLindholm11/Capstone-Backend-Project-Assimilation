import db from "#db/client";

export async function createOrder_Items(
  order_id,
  product_id,
  quantity,
  unit_price,
  total_price
) {
  const SQL = `
    INSERT INTO order_items
    (order_id, product_id, quantity, unit_price, total_price)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const { rows: order_items } = db.query(
    SQL,
    order_id,
    product_id,
    quantity,
    unit_price,
    total_price
  );
  return order_items;
}

export async function joinCustomer_id() {
    const SQL = `
    SELECT
    customers.company_name,
    customers.contact_name,
    customers.email,
    customers.price_tier_id,
    customers.assigned_salesman_id,
    
    `
}

export async function getOrder_Items(
  order_id,
  product_id,
  quantity,
  unit_price,
  total_price
) {
  const SQL = `
    SELECT * FROM order_items
    WHERE order_id, product_id, quantity, unit_price, total_price = $1, $2, $3, $4, $5
    RETURNING *
    `;
  const { rows: order_items } = db.query(
    SQL,
    order_id,
    product_id,
    quantity,
    unit_price,
    total_price
  );
  return order_id;
}

export async function getOrder_ItemsByOrder_Id(order_id) {
  const SQL = `
    SELECT * FROM order_items
    WHERE order_id = $1
    RETURNING *
    `;
  const { rows: order_id } = db.query(SQL, order_id);
  return order_id;
}

export async function getOrder_ItemsByProduct_Id(product_id) {
  const SQL = `
    SELECT * FROM order_items
    WHERE product_id = $1
    RETURNING *
    `;
  const { rows: product_id } = db.query(SQL, product_id);
  return product_id;
}

export async function getOrder_ItemsByQuantity(quantity) {
  const SQL = `
    SELECT * FROM order_items
    WHERE quantity = $1
    RETURNING *
    `;
  const { rows: quantity } = db.query(SQL, quantity);
  return quantity;
}

export async function getOrder_ItemsByUnit_Price(unit_price) {
  const SQL = `
    SELECT * FROM order_items
    WHERE unit_price = $1
    RETURNING *
    `;
  const { rows: unit_price } = db.query(SQL, unit_price);
  return unit_price;
}

export async function getOrder_ItemsByTotal_Price(total_price) {
  const SQL = `
    SELECT * FROM order_items
    WHERE total_price = $1
    RETURNING *
    `;
  const { rows: total_price } = db.query(SQL, total_price);
  return total_price;
}

export async function getOrder_ItemsById(id) {
  const SQL = `
    SELECT * FROM order_items
    WHERE id = $1
    RETURNING *
    `;
  const { rows: id } = db.query(SQL, id);
  return id;
}
