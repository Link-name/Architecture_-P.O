
CREATE TABLE Country (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);


CREATE TABLE City (
  id INT PRIMARY KEY,
  id_country INT,
  name VARCHAR(255),
  FOREIGN KEY (id_country) REFERENCES Country(id)
);


CREATE TABLE Provider (
  id INT PRIMARY KEY,
  address VARCHAR(255),
  name VARCHAR(255),
  email VARCHAR(255),
  id_city INT,
  FOREIGN KEY (id_city) REFERENCES City(id)
);


CREATE TABLE Customer (
  id INT PRIMARY KEY,
  FIO VARCHAR(255),
  date_birth DATE,
  id_city INT,
  address VARCHAR(255),
  email VARCHAR(255),
  FOREIGN KEY (id_city) REFERENCES City(id)
);


CREATE TABLE Product (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  id_type INT,
  id_category INT,
  date DATE,
  count FLOAT,
  price DECIMAL(10, 2),
  FOREIGN KEY (id_type) REFERENCES Type(id),
  FOREIGN KEY (id_category) REFERENCES Category(id)
);


CREATE TABLE Type (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);


CREATE TABLE Category (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);


CREATE TABLE Order (
  id INT PRIMARY KEY,
  id_product INT,
  id_provider INT,
  id_customer INT,
  date_sale DATETIME,
  FOREIGN KEY (id_product) REFERENCES Product(id),
  FOREIGN KEY (id_provider) REFERENCES Provider(id),
  FOREIGN KEY (id_customer) REFERENCES Customer(id)
);
