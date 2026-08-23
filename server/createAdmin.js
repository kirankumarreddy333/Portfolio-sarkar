import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const hashedPassword = await bcrypt.hash("admin123", 10);

await User.create({
  username: "admin",
  password: hashedPassword,
});

console.log("✅ Admin user created");

process.exit();