import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function More() {
  const quickLinks = [
    {
      title: "About Us",
      desc: "Learn about our mission, values, and patient-first healthcare approach.",
    },
    {
      title: "Our Services",
      desc: "Explore medical departments, treatments, and specialist support.",
    },
    {
      title: "FAQs",
      desc: "Find answers to common questions related to booking and appointments.",
    },
    {
      title: "Emergency Help",
      desc: "Quick access to emergency contacts, urgent care, and support information.",
    },
    {
      title: "Branches",
      desc: "View our clinic locations, contact numbers, and availability details.",
    },
    {
      title: "Patient Guide",
      desc: "Read important instructions before visiting the doctor or clinic.",
    },
  ];

  const resources = [
    "Appointment booking support",
    "Doctor availability updates",
    "Visiting hours and clinic timings",
    "Insurance and payment guidance",
  ];

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
                More Information
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Explore more healthcare resources and support
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Access additional pages, helpful resources, clinic details, and patient
                support options from one place.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Quick Access</h2>
            <p className="mt-3 text-slate-600">
              Find important sections and useful hospital information quickly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
                <button className="mt-5 rounded-full border border-sky-200 px-5 py-2 font-semibold text-sky-700 transition hover:bg-sky-50">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Info */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-sky-600 p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold">Patient Support</h2>
              <p className="mt-4 text-sky-100">
                Our team is available to help with appointment issues, doctor selection,
                and healthcare guidance.
              </p>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-sm text-sky-100">Helpline</p>
                  <h3 className="text-lg font-semibold">+91 99999 99999</h3>
                </div>
                <div>
                  <p className="text-sm text-sky-100">Email Support</p>
                  <h3 className="text-lg font-semibold">support@medicare.com</h3>
                </div>
                <div>
                  <p className="text-sm text-sky-100">Availability</p>
                  <h3 className="text-lg font-semibold">24/7 Patient Assistance</h3>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-800">Helpful Resources</h2>
              <p className="mt-4 text-slate-600">
                Useful patient information and clinic support details in one section.
              </p>

              <div className="mt-8 space-y-4">
                {resources.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-100 bg-white px-5 py-4 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-sky-600 to-cyan-500 px-8 py-14 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Need something specific?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sky-100">
              Browse more support options or contact our team directly for help.
            </p>
            <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-sky-700 transition hover:bg-slate-100">
              Contact Support
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default More;
