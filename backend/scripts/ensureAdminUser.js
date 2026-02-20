/**
 * Ensures the default admin user exists (solemate123@gmail.com / Solemate123).
 * Call this after MongoDB is connected. Safe to run on every startup.
 */
import User from "../models/User.js";

const ADMIN_EMAIL = "solemate123@gmail.com";
const ADMIN_PASSWORD = "Solemate123";
const ADMIN_NAME = "Admin";

export async function ensureAdminUser() {
  try {
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
      console.log("✅ Admin user created:", ADMIN_EMAIL);
    } else {
      user.password = ADMIN_PASSWORD;
      user.isAdmin = true;
      user.provider = "local";
      user.name = user.name || ADMIN_NAME;
      await user.save();
      console.log("✅ Admin user ready:", ADMIN_EMAIL);
    }
  } catch (err) {
    console.error("⚠️ Admin user setup failed:", err.message);
  }
}
