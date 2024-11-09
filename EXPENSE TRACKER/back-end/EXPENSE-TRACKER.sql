-- Drop the database if it already exists
DROP DATABASE IF EXISTS expense_tracker;

-- Create a new database
CREATE DATABASE expense_tracker;

-- Use the newly created database
USE expense_tracker;

CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL,
    category VARCHAR(100)
);