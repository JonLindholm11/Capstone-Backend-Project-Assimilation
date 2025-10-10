DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS special_pricing;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS price_categories;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(20) NOT NULL,
    description VARCHAR(500) NOT NULL,
    role_level INT NOT NULL
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role_id INT DEFAULT 4 REFERENCES roles(id) NOT NULL
);

CREATE TABLE price_categories(
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    category_description VARCHAR(500) NOT NULL,
    discount_percentage DECIMAL(5, 2) NOT NULL,
    tier_level INT NOT NULL
);

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    company_name TEXT,
    contact_name TEXT,
    email TEXT NOT NULL,
    assigned_salesman_id INT REFERENCES users(id) NOT NULL
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_category VARCHAR(100) NOT NULL,
    product_description TEXT NOT NULL,
    basic_price DECIMAL(10, 2) NOT NULL,
    product_img VARCHAR(500) NOT NULL
);

CREATE TABLE customer_category_pricing(
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) NOT NULL,
    product_category VARCHAR(100) NOT NULL,
    price_tier_id INT REFERENCES price_categories(id) NOT NULL,
    UNIQUE(customer_id, product_category)
);
CREATE TABLE special_pricing(
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) NOT NULL,
    special_price DECIMAL(10, 2),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_by_user_id INT REFERENCES users(id) NOT NULL
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(20, 2) NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    assigned_service_rep INT REFERENCES users(id) NOT NULL,
    created_date DATE NOT NULL
);

CREATE TABLE order_items(
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) NOT NULL,
    product_id INT REFERENCES products(id) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(20, 2) NOT NULL,
    applied_discount_percentage DECIMAL(5,2) NOT NULL
);