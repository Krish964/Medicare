import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function About() {
    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 py-12">
                {/* Hero Section */}
                <section className="mx-auto max-w-4xl text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md">
                        <span className="text-xl font-bold">+</span>
                    </div>
                    <h1 className="mt-6 text-3xl font-bold text-slate-800 md:text-4xl">
                        About MediCare
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        A modern hospital appointment system built to make healthcare easier
                        for patients and clinics.
                    </p>
                </section>

                {/* Why Us / Mission section */}
                <section className="mx-auto mt-20 max-w-4xl space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                            Our Mission
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
                            To create a simple, secure, and fast way for patients to find
                            verified doctors and book appointments without long queues or
                            confusion.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-800">
                                For Patients
                            </h3>
                            <p className="mt-3 text-slate-600">
                                Book verified doctors, manage your appointments, and access your
                                health journey in one place.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-800">
                                For Clinics
                            </h3>
                            <p className="mt-3 text-slate-600">
                                Better patient flow, clear schedules, and an organized way to
                                manage consultations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How it Works (light 3‑step section) */}
                <section className="mx-auto mt-20 max-w-3xl space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                            How MediCare Works
                        </h2>
                        <p className="mt-4 text-slate-600">
                            A simple, three‑step process from search to appointment.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl bg-sky-50 p-6 text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                                1
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-800">
                                Find Doctors
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Search by specialty, clinic, or location to find the right doctor.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-sky-50 p-6 text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                                2
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-800">
                                Choose Slot
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                View available appointment times and pick the one that fits your schedule.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-sky-50 p-6 text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                                3
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-800">
                                Confirm & Go
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                                Confirm your appointment and get reminders so you never miss it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer CTAs */}
                <section className="mx-auto mt-20 max-w-4xl text-center">
                    <p className="text-slate-600">
                        Explore more or create your account to experience MediCare today.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <Link
                            to="/signup"
                            className="rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700"
                        >
                            Create Account
                        </Link>
                        <Link
                            to="/login"
                            className="rounded-full border border-sky-200 px-6 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50"
                        >
                            Login
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );

}

export default About;
