// config/db.js
// Connects our app to MongoDB Atlas using Mongoose.

const mongoose = require("mongoose");
const dns = require("dns");

// Use Google and Cloudflare DNS to find the Atlas cluster.
// Some networks and phones (like Termux on Android) can't look up
// "mongodb+srv://" addresses with their default DNS, which causes
// a "querySrv ENOTFOUND" error. This fixes that.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

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
