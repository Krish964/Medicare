import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Please fill in both email and password");
      return;
    }

    const toastId = toast.loading("Logging in...");

    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password.trim(),
        }),
      });

      const contentType = response.headers.get("content-type");
      let data = {};

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        throw new Error("Server returned an invalid response");
      }

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      toast.update(toastId, {
        render: data.message || "Login successful 🎉",
        type: "success",
        isLoading: false,
        autoClose: 1800,
        closeButton: true,
      });

      setForm({
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/mainpage");
      }, 1200);
    } catch (error) {
      toast.update(toastId, {
        render: error.message || "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 2200,
        closeButton: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-4 py-8 md:px-8">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(14,116,144,0.12)] md:grid-cols-2">

        {/* Left Panel */}
        <div className="relative hidden flex-col justify-between bg-gradient-to-br from-sky-700 via-cyan-600 to-sky-900 p-10 text-white md:flex">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <span className="text-2xl font-bold">+</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">MediCare</h2>
                <p className="text-sm text-sky-100">Hospital Appointment System</p>
              </div>
            </div>

            <div className="mt-16">
              <p className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-sky-50 backdrop-blur-md">
                Safe • Simple • Trusted
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Welcome back to your healthcare dashboard
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-sky-100">
                Sign in to manage appointments, connect with verified doctors,
                and access your patient account with ease.
              </p>
            </div>

            <div className="mt-12 grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Quick access</h3>
                <p className="mt-2 text-sm text-sky-100">
                  View upcoming bookings and medical schedules instantly.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Secure login</h3>
                <p className="mt-2 text-sm text-sky-100">
                  Patient account access with a clean and protected login flow.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
            <p className="text-sm text-sky-100">Need help?</p>
            <h4 className="mt-1 text-lg font-semibold">Support available 24/7</h4>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 md:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Sign In
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                Login to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use your registered email or mobile number and password to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email or mobile number"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-500">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600" />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="font-medium text-sky-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:from-sky-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Signing In..." : "Login"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                  fill="#4285F4"
                />
              </svg>
              Login with Google
            </button>

            <div className="mt-6 text-center text-sm text-slate-500 md:text-left">
              Don’t have an account?{" "}
              <Link to="/signup" className="font-semibold text-sky-600 hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
