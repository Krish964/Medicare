import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Video,
  Search,
  Filter,
  CircleCheckBig,
  CircleAlert,
  RotateCcw,
  FileText,
  Phone,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "../home/Footer";

function AppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Upcoming");

  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Priya Sharma",
      speciality: "Cardiology",
      date: "12 April 2026",
      time: "10:30 AM",
      hospital: "Metro Heart Clinic, Delhi",
      mode: "In Clinic",
      status: "Confirmed",
      type: "Upcoming",
    },
    {
      id: 2,
      doctorName: "Dr. Rohan Mehta",
      speciality: "Neurology",
      date: "14 April 2026",
      time: "01:00 PM",
      hospital: "Neuro Plus Center, Gurugram",
      mode: "Video Consultation",
      status: "Pending",
      type: "Upcoming",
    },
    {
      id: 3,
      doctorName: "Dr. Aditi Verma",
      speciality: "Dermatology",
      date: "03 April 2026",
      time: "04:15 PM",
      hospital: "SkinCare Clinic, Faridabad",
      mode: "In Clinic",
      status: "Completed",
      type: "Past",
    },
    {
      id: 4,
      doctorName: "Dr. Kunal Arora",
      speciality: "Orthopedics",
      date: "28 March 2026",
      time: "11:00 AM",
      hospital: "Ortho Life Hospital, Noida",
      mode: "In Clinic",
      status: "Cancelled",
      type: "Past",
    },
    {
      id: 5,
      doctorName: "Dr. Neha Bansal",
      speciality: "Pediatrics",
      date: "16 April 2026",
      time: "06:00 PM",
      hospital: "Little Care Clinic, Delhi",
      mode: "Video Consultation",
      status: "Confirmed",
      type: "Upcoming",
    },
  ];

  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) => {
      const matchesTab = item.type === activeTab;

      const matchesSearch =
        item.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hospital.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [appointments, activeTab, searchQuery]);

  const upcomingCount = appointments.filter((item) => item.type === "Upcoming").length;
  const pastCount = appointments.filter((item) => item.type === "Past").length;

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-emerald-100 text-emerald-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Completed":
        return "bg-sky-100 text-sky-700";
      case "Cancelled":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f6fbff] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-[1550px]">
        {/* Header */}
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 py-8 md:px-10 md:py-10">
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                My Appointments
              </span>

              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Track, manage, and review your consultations in one place
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                View upcoming visits, past consultations, and appointment status with
                a simple dashboard layout that can later connect to real backend data.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Upcoming</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {upcomingCount}
                  </h3>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Past Visits</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {pastCount}
                  </h3>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Support</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Available
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-700 via-cyan-600 to-sky-800 p-6 text-white md:p-10">
              <h2 className="text-2xl font-bold">Appointment actions</h2>
              <p className="mt-3 text-sm leading-6 text-sky-100">
                Patients should be able to understand date, time, mode, and status at
                a glance, with simple actions for reschedule or support.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <CircleCheckBig size={20} />
                    <div>
                      <p className="text-sm font-semibold">Confirmed bookings</p>
                      <p className="text-xs text-sky-100">
                        Track approved appointments clearly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <RotateCcw size={20} />
                    <div>
                      <p className="text-sm font-semibold">Easy reschedule flow</p>
                      <p className="text-xs text-sky-100">
                        Later you can connect this with backend slots.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <CircleAlert size={20} />
                    <div>
                      <p className="text-sm font-semibold">Status awareness</p>
                      <p className="text-xs text-sky-100">
                        Pending, completed, or cancelled at one glance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* filters */}
        <section className="mt-8 rounded-[2rem] bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {["Upcoming", "Past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search doctor, hospital..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none focus:border-sky-400 focus:bg-white md:w-[280px]"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                <Filter size={16} />
                Filter
              </button>
            </div>
          </div>
        </section>

        {/* content */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {filteredAppointments.length === 0 ? (
              <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
                <h3 className="text-xl font-bold text-slate-800">
                  No appointments found
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try changing the search or switch appointment tab.
                </p>
              </div>
            ) : (
              filteredAppointments.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.8rem] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.doctorName}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-medium text-sky-700">
                        {item.speciality}
                      </p>

                      <div className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                        <p className="flex items-center gap-2">
                          <CalendarDays size={16} className="text-sky-600" />
                          {item.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock3 size={16} className="text-sky-600" />
                          {item.time}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin size={16} className="text-sky-600" />
                          {item.hospital}
                        </p>
                        <p className="flex items-center gap-2">
                          <Video size={16} className="text-sky-600" />
                          {item.mode}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 md:w-[210px]">
                      {item.type === "Upcoming" ? (
                        <>
                          <button className="rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
                            Reschedule
                          </button>
                          <button className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            Cancel Appointment
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                            Book Again
                          </button>
                          <button className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            View Summary
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* side panel */}
          <aside className="space-y-5">
            <div className="rounded-[1.8rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
              <p className="text-sm text-slate-300">Quick actions</p>
              <h3 className="mt-2 text-2xl font-bold">Need help with a booking?</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                You can later connect this section with live support, slot change,
                cancellation policies, and reminder systems.
              </p>
              <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                Contact Support
              </button>
            </div>

            <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <h3 className="text-lg font-bold text-slate-900">Helpful info</h3>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <FileText size={17} className="text-sky-600" />
                    <p className="text-sm font-semibold text-slate-800">
                      Keep appointment notes
                    </p>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Later you can attach prescriptions, reports, and visit summaries.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <Phone size={17} className="text-sky-600" />
                    <p className="text-sm font-semibold text-slate-800">
                      Reminder integration
                    </p>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    SMS, email, or push reminders can be added once backend is ready.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AppointmentsPage;