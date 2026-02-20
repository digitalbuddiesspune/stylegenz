import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield } from "lucide-react";

const ADMIN_EMAIL = "stylegenz123@gmail.com";
const ADMIN_PASSWORD = "Stylegenz123";

const AdminLogin = () => {
  const { user, login, logout, loading: userLoading } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState(ADMIN_PASSWORD);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/admin/dashboard";

  // If already logged in as admin, redirect to dashboard
  useEffect(() => {
    if (userLoading) return;
    if (user?.isAdmin) {
      navigate(from, { replace: true });
    }
  }, [user, userLoading, navigate, from]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email.trim().toLowerCase(), password);

    if (result?.success && result?.user) {
      if (result.user.isAdmin) {
        navigate(from, { replace: true });
      } else {
        logout();
        setError("Access denied. Admin credentials required.");
      }
    } else {
      setError(result?.error || "Invalid email or password. Please try again.");
    }

    setLoading(false);
  };

  if (userLoading || user?.isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div
      className="h-screen overflow-hidden flex flex-col md:flex-row"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="w-full md:w-1/2 flex items-center justify-center p-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1768806794/0082814518a48318cbf77196757ded98_fsqt5a.jpg"
          alt="Admin"
          className="w-full h-full object-cover hidden lg:block"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div
          className="w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ backgroundColor: "var(--text-heading)", color: "var(--bg-primary)" }}>
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              Admin Sign In
            </h2>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
              Use your admin credentials to access the dashboard.
            </p>
          </div>

          {error && (
            <div
              className="mb-6 p-3 rounded-lg"
              style={{ backgroundColor: "#FEE2E2", borderColor: "#FECACA", borderWidth: "1px" }}
            >
              <p className="text-sm" style={{ color: "#DC2626" }}>
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5" style={{ color: "var(--text-secondary)" }} />
                </div>
                <input
                  type="email"
                  placeholder="Admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 rounded-lg border transition focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                    backgroundColor: "var(--bg-secondary)",
                  }}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5" style={{ color: "var(--text-secondary)" }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 rounded-lg border transition focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                    backgroundColor: "var(--bg-secondary)",
                  }}
                  required
                  minLength={6}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium transition ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 hover:shadow-md"
              }`}
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    style={{ color: "var(--bg-primary)" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  <span>Sign in to Admin</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/home"
              className="text-sm hover:underline transition"
              style={{ color: "var(--text-secondary)" }}
            >
              ← Back to store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
