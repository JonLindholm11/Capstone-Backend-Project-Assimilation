import db from "#db/client";

export async function createSpecial_Pricing(
  product_id,
  special_price,
  start_date,
  end_date,
  is_active,
  created_by_user_id
) {
  const SQL = `
    INSERT INTO special_pricing
    (product_id, special_price, start_date, end_date, is_active, created_by_user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  const { rows: special_pricing } = db.query(
    SQL,
    (product_id,
    special_price,
    start_date,
    end_date,
    is_active,
    created_by_user_id)
  );
  return special_pricing;
}

export async function getSpecial_Pricing(
  product_id,
  special_price,
  start_date,
  end_date,
  is_active,
  created_by_user_id
) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE product_id, special_price, start_date, end_date, is_active, created_by_user_id = $1, $2, $3, $4, $5, $6
    `;
  const { rows: special_pricing } = db.query(
    SQL,
    product_id,
    special_price,
    start_date,
    end_date,
    is_active,
    created_by_user_id
  );
  return special_pricing;
}

export async function getSpecial_PricingBySpecial_Price(special_price) {
  const SQL = `
    SELECT * FROM special_price
    WHERE special_price = $1
    `;
  const { rows: special_price } = db.query(SQL, special_price);
  return special_price;
}

export async function getSpecial_PricingByStart_DateAndEndDate(
  start_date,
  end_date
) {
  const SQL = `
    SELECT * FROM special_price
    WHERE start_date, end_date = $1, $2
    `;
  const { rows: startEndDate } = db.query(SQL, start_date, end_date);
  return startEndDate;
}

export async function getSpecial_PricingByIs_Active(is_active) {
  const SQL = `
    SELECT * FROM special_price
    WHERE is_active = $1
    `;
  const { rows: is_active } = db.query(SQL, is_active);
  return is_active;
}

export async function getSpecial_PricingByCreatedByUserId(created_by_user_id) {
  const SQL = `
    SELECT * FROM special_price
    WHERE created_by_user_id = $1
    `;
  const { rows: created_by_user } = db.query(SQL, created_by_user_id);
  return created_by_user;
}

export async function getSpecial_PricingById(id) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE id = $1
    `;
  const { rows: id } = db.query(SQL, id);
  return id;
}
