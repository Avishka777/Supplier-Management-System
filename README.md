# Supplier Management System

The Supplier Management System is a web application designed to streamline the process of managing suppliers, their details, and related operations.

# Introduction

The Supplier Management System is built to simplify the tasks involved in managing suppliers, including registration, viewing details, updating information, and managing payroll. It provides a user-friendly interface for administrators to efficiently handle supplier-related operations.

# Features

- Supplier registration: Add new suppliers to the system with relevant details.
- View supplier details: Display comprehensive information about registered suppliers.
- Update supplier information: Modify and update supplier details as needed.
- Payroll management: Add, edit, and manage payroll details for suppliers.
- Search functionality: Easily search and filter suppliers based on various criteria.

# Technologies Used

- Frontend: React.js, React Router, Axios, Styled Components
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Tools: Redux, React Toast notifications

# Getting Started with Project

To get started with the project, follow these steps:

1. Clone the Repository: Clone the project repository to your local machine using the following command:
    - git clone <repository_url> 
2. Install Dependencies: Open a terminal within the project directory and run the following command to install all dependencies:
    - npm install 
3. Create .env file: use "MONGO" for your MongoDB url and use "JWT_SECRET" for secret key:
    - JWT_SECRET = "anything"
    - MONGO = "mongodb+srv://xxx:xxx@xxx-xxx.nfsmyma.mongodb.net/?retryWrites=true&w=majority&appName=xxx-xxx"
4. Run Backend Server: Start the backend server by running the following command in the terminal:
    - npm start
5. Run Frontend Server: Open a new terminal and navigate to the frontend directory within the project directory using the following command:
    - cd frontend
6. Then, run the following command to start the frontend server:
    - npm start
7. Access the Application: Open a web browser and go:
8. With these steps, you should now be able to run the project locally and access it through your web browser.

# Usage
- Upon starting the application, users can navigate through different pages to perform various tasks related to supplier management.
- Admin users can access features like supplier registration, viewing details, updating information, and managing payroll.
- Search functionality allows users to search for specific suppliers based on different parameters.
