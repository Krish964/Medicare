import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      setEmailVerified(false);
    }
  };

  const handleVerifyEmail = () => {
    if (!form.email.trim()) {
      toast.error("Please enter your email first");
      return;
    }

    toast.success("Verification email sent successfully!");
    setEmailVerified(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailVerified) {
      toast.error("Please verify your email first");
      return;
    }

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.mobile.trim() ||
      !form.password.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data = {};
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      const backendMessage =
        data?.message || data?.error || "Something went wrong";

      if (!response.ok) {
        throw new Error(backendMessage);
      }

      toast.success(backendMessage || "Signup successful");

      setForm({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });

      setEmailVerified(false);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-4 py-8 md:px-8">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_70px_rgba(14,116,144,0.12)] md:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden flex-col justify-between bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-800 p-10 text-white md:flex">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <span className="text-2xl font-bold">+</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">MediCare</h2>
                <p className="text-sm text-sky-100">Smart Hospital Appointment System</p>
              </div>
            </div>

            <div className="mt-16">
              <p className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-sky-50 backdrop-blur-md">
                Trusted by Patients & Clinics
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Create your account and book doctors in minutes
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-sky-100">
                Join a secure healthcare platform where you can discover verified doctors,
                manage appointments, and access a smoother patient experience.
              </p>
            </div>

            <div className="mt-12 grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Verified specialists</h3>
                <p className="mt-2 text-sm text-sky-100">
                  Connect with trusted doctors across multiple departments.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Quick appointment booking</h3>
                <p className="mt-2 text-sm text-sky-100">
                  Book appointments faster with simple and guided steps.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Private and secure</h3>
                <p className="mt-2 text-sm text-sky-100">
                  Your details stay protected with secure account flow.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
            <div>
              <p className="text-sm text-sky-100">Support</p>
              <h4 className="text-lg font-semibold">24/7 Patient Help</h4>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-700">
              Live Available
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 md:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Register
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                Create Patient Account
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill your details below. Email verification is required before account creation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    disabled={emailVerified}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 disabled:bg-emerald-50 disabled:text-emerald-700"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyEmail}
                    disabled={!form.email || emailVerified}
                    className={`rounded-2xl px-5 py-3 text-sm font-semibold whitespace-nowrap transition ${!form.email || emailVerified
                      ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
                      : "bg-sky-600 text-white shadow-md hover:bg-sky-700"
                      }`}
                  >
                    {emailVerified ? "Verified" : "Verify Email"}
                  </button>
                </div>

                <p className={`mt-2 text-xs ${emailVerified ? "text-emerald-600" : "text-slate-400"}`}>
                  {emailVerified
                    ? "Your email has been verified successfully."
                    : "Please verify your email before submitting the form."}
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile Number
                </label>
                <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-sky-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-100">
                  <span className="flex items-center border-r border-slate-200 px-4 text-sm font-medium text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-slate-700 outline-none"
                  />
                </div>
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
                  placeholder="Create strong password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
                <p className="mt-2 text-xs text-slate-400">
                  Use at least 8 characters with letters and numbers.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-sky-50 px-4 py-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600" />
                <p className="text-xs leading-5 text-slate-600">
                  I agree to the Terms & Conditions and Privacy Policy, and I understand that my data
                  will be used for account creation and appointment services.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !emailVerified}
                className="w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:from-sky-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
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

            <div className="mt-6 flex items-center justify-between text-sm">
              <Link to="/forgot-password" className="font-medium text-sky-600 hover:underline">
                Forgot Password?
              </Link>

              <p className="text-slate-500">
                Already registered?{" "}
                <Link to="/login" className="font-semibold text-sky-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
