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

  const { rows : joinSpecialPricing } = await db.query(SQL);
  return joinSpecialPricing;
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
