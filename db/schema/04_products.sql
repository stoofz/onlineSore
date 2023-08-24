DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER NOT NULL REFERENCES categories (id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price DECIMAL NOT NULL,
  stock INTEGER NOT NULL,
  image VARCHAR(255),
  description TEXT
);