import React, { useMemo, useState } from "react";
import {
  Search,
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Eye,
  Smile,
  Stethoscope,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Activity,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "../home/Footer";

function SpecialitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const specialities = [
    {
      id: 1,
      name: "Cardiology",
      icon: HeartPulse,
      doctors: 24,
      accent: "rose",
      short: "Heart, BP, chest pain, preventive cardiac care.",
      description:
        "Heart rhythm issues, blood pressure management, chest discomfort, follow-up reviews, and long-term cardiac consultation.",
      treatments: ["ECG Review", "Heart Checkup", "BP Management"],
    },
    {
      id: 2,
      name: "Neurology",
      icon: Brain,
      doctors: 18,
      accent: "violet",
      short: "Migraine, nerves, stroke follow-up, memory concerns.",
      description:
        "Neurological assessment for headaches, nerve disorders, recovery plans, movement symptoms, and cognitive evaluation.",
      treatments: ["Migraine Care", "Nerve Testing", "Stroke Follow-up"],
    },
    {
      id: 3,
      name: "Pediatrics",
      icon: Baby,
      doctors: 20,
      accent: "sky",
      short: "Child fever, vaccination, growth and newborn support.",
      description:
        "Child consultations, vaccinations, developmental tracking, common infections, and parent guidance for newborn and pediatric care.",
      treatments: ["Child Checkup", "Vaccination", "Newborn Advice"],
    },
    {
      id: 4,
      name: "Orthopedics",
      icon: Bone,
      doctors: 16,
      accent: "amber",
      short: "Joint pain, bone issues, back pain, injury recovery.",
      description:
        "Care for fractures, sports injuries, posture problems, joint pain, spine concerns, and rehabilitation planning.",
      treatments: ["Joint Pain", "Spine Care", "Sports Injury"],
    },
    {
      id: 5,
      name: "Ophthalmology",
      icon: Eye,
      doctors: 14,
      accent: "emerald",
      short: "Vision tests, eye strain, infection and routine eye care.",
      description:
        "Eye examinations, screen strain support, infection treatment, vision correction guidance, and preventive eye checkups.",
      treatments: ["Eye Exam", "Vision Test", "Eye Infection"],
    },
    {
      id: 6,
      name: "Dental Care",
      icon: Smile,
      doctors: 22,
      accent: "cyan",
      short: "Tooth pain, cleaning, cavities and oral hygiene care.",
      description:
        "Oral health consultations for pain, cleaning, cavity treatment, gum issues, and preventive dental maintenance.",
      treatments: ["Tooth Cleaning", "Cavity Care", "Dental Checkup"],
    },
    {
      id: 7,
      name: "General Medicine",
      icon: Stethoscope,
      doctors: 30,
      accent: "slate",
      short: "Fever, weakness, infection, routine medical consultation.",
      description:
        "First-level diagnosis, fever and infection care, preventive health advice, fatigue evaluation, and general physician consultation.",
      treatments: ["Fever Care", "Routine Visit", "Consultation"],
    },
    {
      id: 8,
      name: "Dermatology",
      icon: ShieldCheck,
      doctors: 12,
      accent: "fuchsia",
      short: "Skin allergy, acne, hair fall, pigmentation support.",
      description:
        "Skin and hair related treatment for acne, rashes, irritation, pigmentation, allergy evaluation, and long-term skin care.",
      treatments: ["Skin Allergy", "Acne Care", "Hair Fall Advice"],
    },
  ];

  const accentMap = {
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      soft: "bg-rose-100",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      soft: "bg-violet-100",
    },
    sky: {
      bg: "bg-sky-50",
      text: "text-sky-600",
      soft: "bg-sky-100",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      soft: "bg-amber-100",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      soft: "bg-emerald-100",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      soft: "bg-cyan-100",
    },
    slate: {
      bg: "bg-slate-100",
      text: "text-slate-700",
      soft: "bg-slate-200",
    },
    fuchsia: {
      bg: "bg-fuchsia-50",
      text: "text-fuchsia-600",
      soft: "bg-fuchsia-100",
    },
  };

  const filteredSpecialities = useMemo(() => {
    return specialities.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.short.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab = activeTab === "All" || item.name === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  const totalDoctors = specialities.reduce((acc, item) => acc + item.doctors, 0);
  const featured = specialities[0];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f6fbff] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-[1550px]">
        {/* top banner */}
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="px-6 py-8 md:px-10 md:py-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                <Sparkles size={14} />
                Medical Specialities
              </span>

              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Explore departments by care need, symptoms, and treatment focus
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Patients often know their problem before they know the department.
                This page organizes specialities in a clearer and more guided format.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Departments</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {specialities.length}
                  </h3>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Doctors</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {totalDoctors}+
                  </h3>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Access</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Online + Clinic
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-6 text-white md:p-10">
              <p className="text-sm text-slate-300">Quick speciality finder</p>
              <h2 className="mt-2 text-2xl font-bold">
                Search the right department before booking
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Search by speciality name, symptom area, or service intent to reduce
                confusion for first-time patients.
              </p>

              <div className="relative mt-6">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search by speciality or symptom..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white px-11 py-3 text-sm text-slate-700 outline-none"
                />
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                  Why this works
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  Specialty discovery pages help users avoid guessing and provide a
                  cleaner path than stuffing every department on the homepage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* tabs */}
        <section className="mt-8">
          <div className="flex flex-wrap gap-3">
            {["All", ...specialities.map((item) => item.name)].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 shadow-sm hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* content layout */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
          {/* featured panel */}
          <aside className="rounded-[2rem] bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
                <featured.icon size={26} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Featured speciality</p>
                <h3 className="text-2xl font-bold text-slate-900">{featured.name}</h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              {featured.description}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {featured.treatments.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] bg-gradient-to-br from-rose-50 to-white p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Available doctors
              </p>
              <h4 className="mt-2 text-4xl font-bold text-slate-900">
                {featured.doctors}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Doctors currently listed in this department for patient discovery.
              </p>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              View {featured.name} Doctors
            </button>
          </aside>

          {/* speciality rows */}
          <div className="space-y-4">
            {filteredSpecialities.length === 0 ? (
              <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
                <h3 className="text-xl font-bold text-slate-800">
                  No speciality found
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try another keyword or select a different tab.
                </p>
              </div>
            ) : (
              filteredSpecialities.map((item) => {
                const Icon = item.icon;
                const styles = accentMap[item.accent];

                return (
                  <div
                    key={item.id}
                    className="rounded-[1.8rem] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${styles.bg} ${styles.text}`}
                        >
                          <Icon size={24} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-900">
                              {item.name}
                            </h3>
                            <span
                              className={`rounded-full ${styles.soft} px-3 py-1 text-xs font-semibold ${styles.text}`}
                            >
                              {item.doctors} doctors
                            </span>
                          </div>

                          <p className="mt-2 text-sm font-medium text-slate-500">
                            {item.short}
                          </p>

                          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.treatments.map((treatment, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                              >
                                {treatment}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 md:flex-col">
                        <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                          View Doctors
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                          Learn More
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* bottom strip */}
        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Activity size={22} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Symptom-led discovery
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Users can think in terms of their problem first and then move toward the
              right department with less friction.
            </p>
          </div>

          <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Search size={22} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Clear category separation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Specialty landing pages keep healthcare navigation cleaner and prevent
              the homepage from becoming overcrowded.
            </p>
          </div>

          <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
              <HeartPulse size={22} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Better patient guidance
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Short descriptions and treatment tags help users understand each
              department before moving to doctors or booking.
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SpecialitiesPage;