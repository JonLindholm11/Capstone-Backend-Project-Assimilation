import db from "#db/client";

export async function createProducts(
  product_name,
  product_category,
  product_description,
  basic_price,
  product_img
) {
  const SQL = `
    INSERT INTO products
        (product_name, product_category, product_description, basic_price, product_img)
    VALUES
        ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const { rows: products } = db.query(
    SQL,
    (product_name,
    product_category,
    product_description,
    basic_price,
    product_img)
  );
  return products;
}

export async function getProducts(
  product_name,
  product_category,
  product_description,
  basic_price,
  product_img
) {
  const SQL = `
    SELECT * FROM products
    WHERE product_name, product_category, product_description, basic_price, product_img = $1, $2, $3, $4, $5
    `;
  const { rows: products } = db.query(
    SQL,
    (product_name,
    product_category,
    product_description,
    basic_price,
    product_img)
  );
  return products;
}

export async function getProductsByCategory(product_category) {
  const SQL = `
    SELECT * FROM products
    WHERE product_category = $1
    `;
  const { rows: products_category } = db.query(SQL, product_category);
  return products_category;
}

export async function getProductsByName(product_name) {
  const SQL = `
    SELECT * FROM products
    WHERE product_name = $1
    `;
  const { rows: product_name } = db.query(SQL, product_name);
  return product_name;
}

export async function getProductsByDescription(product_description) {
  const SQL = `
    SELECT * FROM products
    WHERE product_description = $1
    `;
  const { rows: product_description } = db.query(SQL, product_description);
  return product_description;
}

export async function getProductsByBasicPrice(basic_price) {
  const SQL = `
    SELECT * FROM products
    WHERE basic_price = $1
    `;
  const { rows: basic_price } = db.query(SQL, basic_price);
  return basic_price;
}

export async function getProductsByProductImg(product_img) {
  const SQL = `
    SELECT * FROM products
    WHERE product_img = $1
    `;
  const { rows: product_img } = db.query(SQL, product_img);
  return product_img;
}

export async function getProductsById(id) {
  const SQL = `
    SELECT * FROM products
    WHERE id = $1
    `;
  const { rows: product_id } = db.query(SQL, id);
  return product_id;
}
