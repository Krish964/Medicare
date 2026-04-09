import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Contact() {
    return (
        <>
        <Nav/>
            <div>
                <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold">Send us a message</h2>
                        <p className="mt-3 text-slate-600">
                            Fill out the form below and our team will get back to you shortly.
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:from-sky-700 hover:to-cyan-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Contact
