CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    points INT DEFAULT 0,
    role ENUM('user', 'admin') DEFAULT 'user'
);
