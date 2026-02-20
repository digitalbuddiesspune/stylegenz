/**
 * Creates or updates the admin user (stylegenz123@gmail.com / Stylegenz123).
 * Uses MONGO_URI from .env. For production (e.g. Render), run with your
 * production MONGO_URI so the admin exists in the same DB as your deployed API:
 *   MONGO_URI="your_production_mongo_uri" node scripts/createAdminUser.js
 */
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import User from "../models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });

const ADMIN_EMAIL = "stylegenz123@gmail.com";
const ADMIN_PASSWORD = "Stylegenz123";
const ADMIN_NAME = "Admin";

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    let user = await User.findOne({ email: ADMIN_EMAIL }).select("+password");
    if (!user) {
      user = new User({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        name: ADMIN_NAME,
        isAdmin: true,
        provider: "local",
      });
      await user.save();
      console.log(`✅ Admin user created: ${ADMIN_EMAIL}`);
    } else {
      user.password = ADMIN_PASSWORD;
      user.isAdmin = true;
      user.name = user.name || ADMIN_NAME;
      await user.save();
      console.log(`✅ Admin user updated: ${ADMIN_EMAIL} (isAdmin: true, password reset)`);
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

createAdminUser();
