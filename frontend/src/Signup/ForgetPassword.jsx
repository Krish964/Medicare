import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successSent, setSuccessSent] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    // yahan pe backend API call jayegi, jaise POST /api/auth/forgot-password
    // ye sirf_frontend demo hai

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessSent(true);
    }, 1200);
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
                Secure password reset
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Can’t remember your password?
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-sky-100">
                Enter your email address and we’ll send you a link to reset
                your password safely and quickly.
              </p>
            </div>

            <div className="mt-12 grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Instant recovery</h3>
                <p className="mt-2 text-sm text-sky-100">
                  Reset your password in a few simple steps without waiting.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-lg font-semibold">Private & secure</h3>
                <p className="mt-2 text-sm text-sky-100">
                  Your new password will be protected and encrypted.
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
                Password Reset
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                Forgot Password?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                No problem! Just enter your email address and we’ll send you a
                password reset link.
              </p>
            </div>

            {!successSent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <p className="text-xs text-slate-500">
                  We’ll send a password reset link to this email address. Please check your inbox
                  and spam folder if you don’t see it within a few minutes.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:from-sky-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending Reset Link..." : "Send Reset Link"}
                </button>
              </form>
            ) : (
              <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-emerald-700">
                  Reset link sent!
                </h3>
                <p className="text-sm text-emerald-600">
                  A password reset link has been sent to <strong>{email}</strong>. Please check
                  your email and follow the instructions to reset your password.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  If you don’t receive the email, please check your spam folder or try again later.
                </p>
              </div>
            )}

            <div className="mt-6 text-center text-sm text-slate-500 md:text-left">
              Remembered your password?{" "}
              <Link to="/login" className="font-semibold text-sky-600 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
