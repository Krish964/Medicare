import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Stethoscope,
  CalendarDays,
  LayoutGrid,
  CircleHelp,
  Search,
  Bell,
  User,
} from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false); // ✅ profile modal
  const navigate = useNavigate();

  const navItemClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-sky-100 text-sky-700 shadow-sm"
        : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
    }`;

  const mobileNavItemClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-sky-50 text-sky-700"
        : "text-slate-700 hover:bg-sky-50"
    }`;

  // ✅ profile modal options
  const profileOptions = [
    { label: "View Profile", disabled: true },
    { label: "Settings", disabled: true },
    { label: "Help & Support", disabled: true },
    { label: "Logout", isLogout: true },
  ];

  return (
    <header className="sticky top-0 z-50 mb-6">
      <div className="mx-auto max-w-[1600px]">
        <nav className="flex items-center justify-between rounded-[1.6rem] border border-white/60 bg-white/85 px-4 py-3 shadow-[0_12px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl md:px-6">
          {/* Left */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-md">
              <Stethoscope size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800 md:text-lg">
                MediCare
              </h2>
              <p className="text-xs text-slate-500">Doctor Discovery Platform</p>
            </div>
          </NavLink>

          {/* Center nav desktop */}
          <div className="hidden items-center gap-2 lg:flex">
            <NavLink to="/mainpage" className={navItemClass}>
              Doctors
            </NavLink>
            <NavLink to="/specialities" className={navItemClass}>
              Specialities
            </NavLink>
            <NavLink to="/appointments" className={navItemClass}>
              Appointments
            </NavLink>
            <NavLink to="/support" className={navItemClass}>
              Support
            </NavLink>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-3 md:flex">
            <NavLink
              to="/search"
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <Search size={16} />
              <span>Search</span>
            </NavLink>
            <NavLink
              to="/notifications"
              className="relative rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500"></span>
            </NavLink>

            {/* Profile icon with modal trigger */}
            <button
              type="button"
              onClick={() => setProfileModalOpen(true)}
              className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50"
            >
              <User size={18} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-700 md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-3 rounded-[1.5rem] border border-white/60 bg-white/90 p-4 shadow-[0_12px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl md:hidden">
            <div className="space-y-2">
              <NavLink
                to="/mainpage"
                className={mobileNavItemClass}
                onClick={() => setMobileOpen(false)}
              >
                <LayoutGrid size={18} className="text-sky-600" />
                Doctors
              </NavLink>
              <NavLink
                to="/specialities"
                className={mobileNavItemClass}
                onClick={() => setMobileOpen(false)}
              >
                <Stethoscope size={18} className="text-sky-600" />
                Specialities
              </NavLink>
              <NavLink
                to="/appointments"
                className={mobileNavItemClass}
                onClick={() => setMobileOpen(false)}
              >
                <CalendarDays size={18} className="text-sky-600" />
                Appointments
              </NavLink>
              <NavLink
                to="/support"
                className={mobileNavItemClass}
                onClick={() => setMobileOpen(false)}
              >
                <CircleHelp size={18} className="text-sky-600" />
                Help & Support
              </NavLink>
              <NavLink
                to="/search"
                className={mobileNavItemClass}
                onClick={() => setMobileOpen(false)}
              >
                <Search size={18} className="text-sky-600" />
                Search
              </NavLink>
              <NavLink
                to="/profile"
                className={mobileNavItemClass}
                onClick={() => setMobileOpen(false)}
              >
                <User size={18} className="text-sky-600" />
                Profile
              </NavLink>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <NavLink
                to="/search"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
              >
                Search
              </NavLink>
              <NavLink
                to="/appointments"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book Now
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Profile Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Profile</h3>
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {profileOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={option.disabled}
                  onClick={() => {
                    if (option.isLogout) {
                      setProfileModalOpen(false);
                      navigate("/"); // 🔥 logout = go to home
                    }
                  }}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    option.disabled
                      ? "cursor-not-allowed text-slate-400"
                      : "text-slate-700 hover:bg-sky-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;