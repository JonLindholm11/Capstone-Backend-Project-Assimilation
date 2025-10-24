import db from "#db/client";

export async function createSpecial_Pricing({
  product_id,
  special_price,
  start_date,
  end_date,
  is_active,
  created_by_user_id,
}) {
  const SQL = `
    INSERT INTO special_pricing
    (product_id, special_price, start_date, end_date, is_active, created_by_user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  const { rows } = await db.query(SQL, [
    product_id,
    special_price,
    start_date,
    end_date,
    is_active,
    created_by_user_id,
  ]);
  return rows[0];
}

export async function getSpecialPricing() {
  const SQL = `
    SELECT
      special_pricing.id,
      special_pricing.special_price,
      special_pricing.start_date,
      special_pricing.end_date,
      special_pricing.is_active,
      products.id AS product_id,
      products.product_name,
      products.product_category,
      products.product_description,
      products.basic_price,
      products.product_img,
      created_by.id AS created_by_user_id,
      created_by.email AS created_by_email,
      created_by.role_id
    FROM special_pricing
    LEFT JOIN products ON special_pricing.product_id = products.id
    LEFT JOIN users AS created_by ON special_pricing.created_by_user_id = created_by.id
  `;

  const { rows: joinSpecialPricing } = await db.query(SQL);
  return joinSpecialPricing;
}

export async function getSpecial_Pricing() {
  const SQL = `
    SELECT * FROM special_pricing
    `;
  const { rows } = await db.query(SQL);
  return rows;
}

export async function getSpecial_PricingBySpecial_Price(special_price) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE special_price = $1
    `;
  const { rows } = await db.query(SQL, [special_price]);
  return rows;
}

export async function getSpecial_PricingByStart_DateAndEndDate(
  start_date,
  end_date
) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE start_date = $1 AND end_date = $2
    `;
  const { rows } = await db.query(SQL, [start_date, end_date]);
  return rows;
}

export async function getSpecial_PricingByIs_Active(is_active) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE is_active = $1
    `;
  const { rows } = await db.query(SQL, [is_active]);
  return rows;
}

export async function getSpecial_PricingByCreatedByUserId(created_by_user_id) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE created_by_user_id = $1
    `;
  const { rows } = await db.query(SQL, [created_by_user_id]);
  return rows;
}

export async function getSpecial_PricingById(id) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE id = $1
    `;
  const { rows } = await db.query(SQL, [id]);
  return rows;
}
// Jodson- add update and delete functions below

export async function updateSpecialPricing(pricingId, pricingData) {
  const SQL = `
    UPDATE special_pricing 
    SET 
      product_id = $1,
      special_price = $2,
      start_date = $3,
      end_date = $4,
      is_active = $5
    WHERE id = $6
    RETURNING *
  `;
  const { rows } = await db.query(SQL, [
    pricingData.product_id,
    pricingData.special_price,
    pricingData.start_date,
    pricingData.end_date,
    pricingData.is_active,
    pricingId
  ]);
  return rows[0];
}

export async function deleteSpecialPricing(pricingId) {
  const SQL = `DELETE FROM special_pricing WHERE id = $1 RETURNING *`;
  const { rows } = await db.query(SQL, [pricingId]);
  return rows[0];
}