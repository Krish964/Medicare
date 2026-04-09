import React, { useEffect, useMemo, useState } from "react";
import { X, Search, Stethoscope, CalendarDays, Star, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "../home/Footer";

function Mainpage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:8000/api/auth/doctor");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || data.error || "Failed to fetch doctors");
        }

        const doctorList = Array.isArray(data) ? data : data.doctors || [];
        setDoctors(doctorList);
      } catch (err) {
        setError(err.message || "Something went wrong while fetching doctors");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedDoctor(null);
    };

    if (selectedDoctor) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedDoctor]);

  const specialities = useMemo(() => {
    const items = doctors.map((doc) => doc.speciality).filter(Boolean);
    return ["All", ...new Set(items)];
  }, [doctors]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const name = doc.name || "";
      const speciality = doc.speciality || "";
      const hospital = doc.hospital || "";
      const availability = doc.availability || "";

      const matchesSearch =
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpeciality =
        selectedSpeciality === "All" || speciality === selectedSpeciality;

      const matchesAvailability =
        selectedAvailability === "All" || availability === selectedAvailability;

      return matchesSearch && matchesSpeciality && matchesAvailability;
    });
  }, [doctors, searchQuery, selectedSpeciality, selectedAvailability]);

  const availableToday = doctors.filter(
    (doc) => doc.availability === "Available Today"
  ).length;

  const topRated = doctors.filter((doc) => Number(doc.rating) >= 4.8).length;

  const videoConsultationCount = doctors.filter((doc) => {
    if (Array.isArray(doc.consultationMode)) {
      return doc.consultationMode.includes("Video Consultation");
    }
    return String(doc.consultationMode || "")
      .toLowerCase()
      .includes("video");
  }).length;

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.12),_transparent_25%),linear-gradient(to_bottom_right,_#eff8ff,_#ffffff,_#ecfeff)] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-[1600px]">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-800 via-cyan-700 to-sky-900 px-6 py-10 text-white shadow-[0_25px_80px_rgba(14,116,144,0.22)] md:px-10 md:py-12">
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl"></div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-50 backdrop-blur-md">
                Doctor Directory • Smart Search • Better Booking
              </span>

              <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Discover expert doctors and book care faster
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-sky-100 md:text-base">
                Search by name, speciality, hospital, and availability. Open any
                profile card to view complete doctor information, experience,
                education, services, and consultation details.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-lg transition hover:bg-slate-100">
                  Explore Doctors
                </button>
                <button className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm text-sky-100">Doctors Listed</p>
                <h3 className="mt-2 text-3xl font-bold">{doctors.length}+</h3>
                <p className="mt-1 text-sm text-sky-100">Verified specialist profiles</p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm text-sky-100">Available Today</p>
                <h3 className="mt-2 text-3xl font-bold">{availableToday}</h3>
                <p className="mt-1 text-sm text-sky-100">Same-day consultation options</p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm text-sky-100">Video Consult</p>
                <h3 className="mt-2 text-3xl font-bold">{videoConsultationCount}</h3>
                <p className="mt-1 text-sm text-sky-100">Doctors available online</p>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                  <Search size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Search & Filter</h2>
                  <p className="text-sm text-slate-500">
                    Find the right doctor faster.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Search doctor
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Name, speciality, hospital..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Speciality
                  </label>
                  <select
                    value={selectedSpeciality}
                    onChange={(e) => setSelectedSpeciality(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  >
                    {specialities.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Availability
                  </label>
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                  >
                    <option value="All">All</option>
                    <option value="Available Today">Available Today</option>
                    <option value="Available Tomorrow">Available Tomorrow</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpeciality("All");
                    setSelectedAvailability("All");
                  }}
                  className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <h3 className="text-lg font-bold text-slate-800">Quick Insights</h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-sky-50 p-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">Top Rated</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Highly trusted specialists
                    </p>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-sky-700 shadow-sm">
                    {topRated}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">Today Slots</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Ready for quick booking
                    </p>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-emerald-700 shadow-sm">
                    {availableToday}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-cyan-50 p-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">Video Consultation</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      Online care available
                    </p>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-2 text-sm font-bold text-cyan-700 shadow-sm">
                    {videoConsultationCount}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <h3 className="text-lg font-bold text-slate-800">Why this layout works</h3>

              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-800">Compact cards</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Quick scan ke liye small profile boxes so user ek screen me zyada doctors dekh sake.
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-800">Detail in popup</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Full info modal me aati hai, isse main layout clean aur uncluttered rehta hai.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-4">
                  <h4 className="text-sm font-semibold text-slate-800">Sticky sidebar</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Left panel scroll ke time visible rehta hai, isliye area empty feel nahi hota.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main>
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                  Featured Directory
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-800">
                  Meet Our Doctors
                </h2>
              </div>

              <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-500 shadow-sm backdrop-blur-xl">
                {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""} found
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              {specialities.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSpeciality(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedSpeciality === item
                      ? "bg-sky-600 text-white shadow-md"
                      : "bg-white text-slate-600 shadow-sm hover:bg-sky-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="rounded-[1.4rem] border border-slate-100 bg-white p-3 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
                  >
                    <div className="h-32 animate-pulse rounded-2xl bg-slate-200"></div>
                    <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-slate-200"></div>
                    <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-slate-100"></div>
                    <div className="mt-3 h-8 animate-pulse rounded-xl bg-slate-100"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="rounded-[2rem] border border-red-100 bg-white p-10 text-center shadow-[0_12px_45px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-bold text-slate-800">Unable to load doctors</h3>
                <p className="mt-2 text-sm text-red-500">{error}</p>
              </div>
            ) : filteredDoctors.length === 0 ? (
              <div className="rounded-[2rem] border border-white/60 bg-white/80 p-10 text-center shadow-[0_12px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <h3 className="text-xl font-bold text-slate-800">No doctors found</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try a different name, speciality, or availability filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {filteredDoctors.map((doctor) => (
                  <div
                    key={doctor.id || doctor._id}
                    onClick={() => setSelectedDoctor(doctor)}
                    className="group cursor-pointer overflow-hidden rounded-[1.35rem] border border-white/60 bg-white/90 p-3 shadow-[0_12px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(14,116,144,0.12)]"
                  >
                    <div className="relative h-32 overflow-hidden rounded-2xl">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                      <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-sky-700 shadow-sm">
                        {doctor.speciality}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h3 className="line-clamp-1 text-sm font-bold text-slate-800">
                        {doctor.name}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                        {doctor.hospital}
                      </p>

                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="rounded-xl bg-slate-50 px-3 py-2">
                          <p className="text-[10px] text-slate-500">Fee</p>
                          <p className="mt-1 text-xs font-semibold text-slate-800">
                            ₹{doctor.fee}
                          </p>
                        </div>
                        <div className="rounded-xl bg-slate-50 px-3 py-2">
                          <p className="text-[10px] text-slate-500">Exp</p>
                          <p className="mt-1 text-xs font-semibold text-slate-800">
                            {doctor.experience} yrs
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span className="rounded-full bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">
                          ★ {doctor.rating}
                        </span>

                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                            doctor.availability === "Available Today"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {doctor.availability}
                        </span>
                      </div>

                      <button className="mt-3 w-full rounded-xl bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-700">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </section>
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="doctor-modal-title"
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                  Doctor Profile
                </p>
                <h3 id="doctor-modal-title" className="mt-1 text-xl font-bold text-slate-800">
                  {selectedDoctor.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedDoctor(null)}
                className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[calc(90vh-88px)] overflow-y-auto p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
                {/* Left */}
                <div>
                  <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <img
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      className="h-72 w-full object-cover"
                    />
                  </div>

                  <div className="mt-4 rounded-[1.5rem] bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {selectedDoctor.speciality}
                      </span>
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                        ★ {selectedDoctor.rating}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                      <p className="flex items-center gap-2">
                        <Stethoscope size={16} className="text-sky-600" />
                        <span>{selectedDoctor.hospital}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-sky-600" />
                        <span>{selectedDoctor.timing}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={16} className="text-sky-600" />
                        <span>{selectedDoctor.location}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Star size={16} className="text-sky-600" />
                        <span>{selectedDoctor.experience} years experience</span>
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
                        <p className="text-xs text-slate-500">Consultation Fee</p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          ₹{selectedDoctor.fee}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
                        <p className="text-xs text-slate-500">Reviews</p>
                        <p className="mt-1 text-sm font-bold text-slate-800">
                          {selectedDoctor.reviews || "120+"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <div className="rounded-[1.5rem] bg-white">
                    <h4 className="text-lg font-bold text-slate-800">About Doctor</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {selectedDoctor.description ||
                        selectedDoctor.about ||
                        "This doctor is experienced in patient-focused care and provides detailed consultations for diagnosis, treatment planning, and long-term health support."}
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.5rem] bg-slate-50 p-4">
                        <h5 className="text-sm font-bold text-slate-800">Education</h5>
                        <div className="mt-3 space-y-2 text-sm text-slate-600">
                          {Array.isArray(selectedDoctor.education) ? (
                            selectedDoctor.education.map((item, index) => (
                              <p key={index}>• {item}</p>
                            ))
                          ) : (
                            <p>• {selectedDoctor.degree || "MBBS, MD"}</p>
                          )}
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] bg-slate-50 p-4">
                        <h5 className="text-sm font-bold text-slate-800">Consultation</h5>
                        <div className="mt-3 space-y-2 text-sm text-slate-600">
                          {Array.isArray(selectedDoctor.consultationMode) ? (
                            selectedDoctor.consultationMode.map((item, index) => (
                              <p key={index}>• {item}</p>
                            ))
                          ) : (
                            <p>• {selectedDoctor.consultationMode || "In Clinic"}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.5rem] bg-slate-50 p-4">
                      <h5 className="text-sm font-bold text-slate-800">Services</h5>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {Array.isArray(selectedDoctor.services) ? (
                          selectedDoctor.services.map((service, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm"
                            >
                              {service}
                            </span>
                          ))
                        ) : (
                          <>
                            <span className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
                              General Consultation
                            </span>
                            <span className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
                              Follow-up Care
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.5rem] bg-slate-50 p-4">
                      <h5 className="text-sm font-bold text-slate-800">Address & Languages</h5>
                      <div className="mt-3 space-y-2 text-sm text-slate-600">
                        <p>
                          <span className="font-semibold text-slate-800">Address:</span>{" "}
                          {selectedDoctor.address || selectedDoctor.location}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Languages:</span>{" "}
                          {Array.isArray(selectedDoctor.languages)
                            ? selectedDoctor.languages.join(", ")
                            : selectedDoctor.languages || "English"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Patients:</span>{" "}
                          {selectedDoctor.patients || "1000+"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.5rem] bg-slate-50 p-4">
                      <h5 className="text-sm font-bold text-slate-800">Available Slots</h5>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {Array.isArray(selectedDoctor.slots) ? (
                          selectedDoctor.slots.map((slot, index) => (
                            <button
                              key={index}
                              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                            >
                              {slot}
                            </button>
                          ))
                        ) : (
                          <>
                            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                              10:30 AM
                            </button>
                            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                              12:00 PM
                            </button>
                            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                              05:30 PM
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button className="flex-1 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-sky-700 hover:to-cyan-600">
                        Book Now
                      </button>
                      <button className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                        Contact Clinic
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
<Footer/>
    </>
  );
}

export default Mainpage;