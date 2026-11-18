
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./src/config/db.js";
import User from "./src/models/User.js";

const promoteAdmin = async () => {
  try {
    await connectDB();

    const user = await User.findOneAndUpdate(
      { email: "arvanya@gmail.com" },
      { $set: { role: "admin" } },
      { new: true }
    );

    if (!user) {
      console.log("Account not found. Check the email address.");
      return;
    }

    console.log("Admin role assigned successfully!");
    console.log("Email:", user.email);
    console.log("Role:", user.role);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

promoteAdmin();
