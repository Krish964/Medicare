import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import {Stethoscope} from "lucide-react"

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-md">
                      <Stethoscope size={20} />
                    </div>
        
                    <div>
                      <h2 className="text-base font-bold text-slate-800 md:text-lg">
                        MediCare
                      </h2>
                      <p className="text-xs text-slate-500">Doctor Discovery Platform</p>
                    </div>
                  </div>
        

        {/* Nav links with NavLink */}
        <ul className="hidden items-center gap-8 font-medium text-slate-700 md:flex">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `cursor-pointer transition hover:text-sky-600 ${
                  isActive ? "text-sky-600 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cursor-pointer transition hover:text-sky-600 ${
                  isActive ? "text-sky-600 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `cursor-pointer transition hover:text-sky-600 ${
                  isActive ? "text-sky-600 font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/more"
              className={({ isActive }) =>
                `cursor-pointer transition hover:text-sky-600 ${
                  isActive ? "text-sky-600 font-semibold" : ""
                }`
              }
            >
              More
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => navigate("/login")}
            className="rounded-full border border-sky-200 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-sky-700"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="rounded-lg border border-sky-200 p-2 text-sky-700 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
