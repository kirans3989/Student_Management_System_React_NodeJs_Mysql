CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

CREATE TABLE IF NOT EXISTS programs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  duration VARCHAR(100),
  fees DECIMAL(10, 2) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  dateOfBirth DATE NOT NULL,
  grade VARCHAR(50) NOT NULL,
  studentId VARCHAR(50) NOT NULL UNIQUE,
  contactNumber VARCHAR(50) NOT NULL,
  address TEXT,
  guardianName VARCHAR(255),
  guardianContact VARCHAR(50),
  bloodGroup VARCHAR(10),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_programs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studentId INT,
  programId INT,
  enrollmentDate DATE NOT NULL,
  status ENUM('active', 'completed', 'dropped') DEFAULT 'active',
  FOREIGN KEY (studentId) REFERENCES students(id),
  FOREIGN KEY (programId) REFERENCES programs(id)
);

CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studentId INT,
  programId INT,
  amount DECIMAL(10, 2) NOT NULL,
  paymentDate DATE NOT NULL,
  paymentType ENUM('tuition', 'exam', 'other') NOT NULL,
  status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  description TEXT,
  FOREIGN KEY (studentId) REFERENCES students(id),
  FOREIGN KEY (programId) REFERENCES programs(id)
);

CREATE TABLE IF NOT EXISTS attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  studentId INT,
  programId INT,
  date DATE NOT NULL,
  status ENUM('present', 'absent', 'late') NOT NULL,
  notes TEXT,
  FOREIGN KEY (studentId) REFERENCES students(id),
  FOREIGN KEY (programId) REFERENCES programs(id)
);

CREATE TABLE IF NOT EXISTS exams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  programId INT,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  totalMarks INT NOT NULL,
  passingMarks INT NOT NULL,
  description TEXT,
  FOREIGN KEY (programId) REFERENCES programs(id)
);

CREATE TABLE IF NOT EXISTS exam_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  examId INT,
  studentId INT,
  marksObtained DECIMAL(5, 2) NOT NULL,
  rank INT,
  remarks TEXT,
  FOREIGN KEY (examId) REFERENCES exams(id),
  FOREIGN KEY (studentId) REFERENCES students(id)
);

CREATE TABLE IF NOT EXISTS notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('sms', 'email') NOT NULL,
  recipientId INT,
  message TEXT NOT NULL,
  status ENUM('pending', 'sent', 'failed') DEFAULT 'pending',
  sentAt TIMESTAMP,
  FOREIGN KEY (recipientId) REFERENCES students(id)
);

CREATE TABLE IF NOT EXISTS activity_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  action VARCHAR(255) NOT NULL,
  entityType VARCHAR(50) NOT NULL,
  entityId INT NOT NULL,
  oldValue JSON,
  newValue JSON,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS financial_transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('income', 'expense') NOT NULL,
  category VARCHAR(100) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
