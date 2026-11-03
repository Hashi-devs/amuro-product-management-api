// index.js
// The starting point of our server.

require("dotenv").config(); // loads values from the .env file

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productroutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Lets the server read JSON sent in a request body
app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.send("Welcome to the Product Management API 🛒");
});

// Connect the product routes
app.use("/api/products", productRoutes);

// Any route that doesn't exist
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Connect to the database first, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
