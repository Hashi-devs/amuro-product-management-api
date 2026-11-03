// config/db.js
// Connects our app to MongoDB Atlas using Mongoose.

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas ✅");
  } catch (error) {
    console.log("Could not connect to MongoDB ❌", error.message);
    process.exit(1); // stop the app if the database isn't reachable
  }
};

module.exports = connectDB;
