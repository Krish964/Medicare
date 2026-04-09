import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-900 px-6 py-10 text-slate-300">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:items-start">
                {/* Left: Brand */}
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
                            <span className="text-lg font-bold">+</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">MediCare</h3>
                    </div>

                    <p className="mt-3 max-w-xs text-sm text-slate-400">
                        A smart hospital appointment system for patients and clinics, built
                        to make healthcare access easier and faster.
                    </p>
                </div>

                {/* Center: Links */}
                <div className="flex flex-col gap-4 text-sm md:flex-row md:gap-14">
                    <div>
                        <h4 className="font-semibold text-slate-200">Explore</h4>
                        <ul className="mt-3 space-y-1">
                            <li>
                                <Link
                                    to="/"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/doctors"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Doctors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-200">Account</h4>
                        <ul className="mt-3 space-y-1">
                            <li>
                                <Link
                                    to="/login"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/signup"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Create Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/forgot-password"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-200">Support</h4>
                        <ul className="mt-3 space-y-1">
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-slate-400 hover:text-white hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-8 border-t border-slate-800 pt-5 text-center text-xs text-slate-500">
                <p>
                    &copy; {new Date().getFullYear()} MediCare. All rights reserved. Part
                    of your hospital appointment management system.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
