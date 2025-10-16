import db from "#db/client";

export async function createCustomer_Category_Pricing({
  customer_id,
  product_category,
  price_tier_id
}) {
  const SQL = `
    INSERT INTO customer_category_pricing
    (customer_id, product_category, price_tier_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `;
  const { rows } = await db.query(SQL, [customer_id, product_category, price_tier_id]);
  return rows[0];
}

export async function joinCustomerCategoryPricing() {
  const SQL = `
    SELECT
      ccp.id,
      ccp.product_category,
      customers.id AS customer_id,
      customers.company_name,
      customers.contact_name,
      customers.email,
      price_categories.id AS tier_id,
      price_categories.category_name,
      price_categories.discount_percentage,
      price_categories.tier_level
    FROM customer_category_pricing ccp
    LEFT JOIN customers ON ccp.customer_id = customers.id
    LEFT JOIN price_categories ON ccp.price_tier_id = price_categories.id
  `;
  const { rows } = await db.query(SQL);
  return rows;
}
