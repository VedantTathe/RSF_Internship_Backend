# RSF_Internship_Backend

This is the backend server for the **RSF Internship Project**, built with **Node.js**, **Express**, and **MongoDB**. It handles authentication and protected routes, and serves as the core API for the frontend application.

---
## 📁 Folder Structure
```
RSF_Internship_Backend/
│
├── controllers/ # Route controllers (Auth, Home)
├── db/ # MongoDB connection
├── middleware/ # Middleware (e.g., auth verification)
├── models/ # Mongoose schemas/models
├── routes/ # Route definitions
├── .env # Environment variables
├── server.js # Entry point of the application
└── README.md # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/RSF_Internship_Backend.git
cd RSF_Internship_Backend
```

### 2. Install Dependencies
```bash
npm install
```

###3. Setup Environment Variables
Create a .env file in the root directory and add the following:
```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the Server
```bash
npm start
```
The server will start on http://localhost:5000 (or your specified port).

###API Endpoints:
```
-Auth Routes (/auth)
POST /auth/register – Register a new user

POST /auth/login – Login and receive JWT

-Home/Protected Routes (/home)
GET /home/dashboard – Example of a protected route
```
