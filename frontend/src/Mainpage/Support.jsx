import React, { useState } from "react";
import {
  Headset,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronDown,
  ShieldAlert,
  HelpCircle,
  FileText,
  CalendarDays,
} from "lucide-react";
import Footer from "../home/Footer";
import Navbar from "./Navbar";

function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "Go to the doctors listing section, choose a doctor, and continue with the booking flow. Later this can be connected with real slot-based API integration.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, upcoming appointments can be rescheduled. Right now this page uses dummy actions, but later it can connect with backend availability and doctor slots.",
    },
    {
      question: "How will I know if my appointment is confirmed?",
      answer:
        "Appointment cards can show statuses like confirmed, pending, completed, or cancelled. Later you can also add SMS, email, or push reminders.",
    },
    {
      question: "Can I use video consultation?",
      answer:
        "Yes, video consultation can be shown for supported doctors. When real API data is connected, consultation mode will be fetched dynamically.",
    },
    {
      question: "What should I do in an emergency?",
      answer:
        "For urgent or life-threatening situations, patients should directly contact emergency services or the nearest hospital instead of waiting for website support.",
    },
  ];

  const supportOptions = [
    {
      title: "Call Support",
      description: "Speak directly with support for booking or schedule help.",
      icon: Phone,
      color: "bg-sky-100 text-sky-700",
      action: "+91 98765 43210",
    },
    {
      title: "Email Help",
      description: "Share your issue, reports, or booking related concern.",
      icon: Mail,
      color: "bg-emerald-100 text-emerald-700",
      action: "support@medicare.com",
    },
    {
      title: "Live Chat",
      description: "Later you can integrate instant chat assistance here.",
      icon: MessageCircle,
      color: "bg-violet-100 text-violet-700",
      action: "Start Chat",
    },
  ];

  const quickLinks = [
    {
      title: "Booking Help",
      subtitle: "Get help with scheduling and slot selection.",
      icon: CalendarDays,
    },
    {
      title: "Reports & Prescriptions",
      subtitle: "Access uploaded files and consultation documents later.",
      icon: FileText,
    },
    {
      title: "General Questions",
      subtitle: "Find quick answers for commonly asked support topics.",
      icon: HelpCircle,
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f6fbff] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-[1550px]">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-6 py-8 md:px-10 md:py-10">
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Help & Support
              </span>

              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Find quick answers, contact support, and resolve patient issues faster
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                This support page is designed to reduce confusion by showing direct
                help paths, common FAQs, and essential contact options in one place.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Help Channels</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">3</h3>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">FAQ Topics</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {faqs.length}
                  </h3>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Response Type</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Fast Help
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-6 text-white md:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                <Headset size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold">Patient-first support experience</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Clear navigation, fast answers, and accessible contact methods help
                reduce patient stress and improve trust in healthcare platforms.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold">Booking assistance</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Help users complete appointments with less friction.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold">Simple question flow</p>
                  <p className="mt-1 text-xs text-slate-300">
                    FAQs should answer common questions quickly without medical jargon.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold">Visible emergency note</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Critical issues should redirect patients toward urgent care help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support options */}
        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {supportOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  {item.action}
                </button>
              </div>
            );
          })}
        </section>

        {/* Content area */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          {/* FAQ */}
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                Frequently Asked Questions
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Common support topics
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-50"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold text-slate-800 md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-500 transition ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <aside className="space-y-5">
            <div className="rounded-[1.8rem] bg-gradient-to-br from-rose-500 to-red-500 p-6 text-white shadow-[0_14px_40px_rgba(239,68,68,0.20)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <ShieldAlert size={24} />
              </div>

              <h3 className="mt-5 text-2xl font-bold">Emergency note</h3>
              <p className="mt-3 text-sm leading-6 text-rose-50">
                For urgent or life-threatening situations, patients should call local
                emergency services or visit the nearest hospital immediately.
              </p>

              <button className="mt-5 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50">
                Emergency Contact
              </button>
            </div>

            <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <h3 className="text-lg font-bold text-slate-900">Quick links</h3>

              <div className="mt-4 space-y-3">
                {quickLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-slate-50 p-4 transition hover:bg-sky-50"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <h3 className="text-lg font-bold text-slate-900">Contact details</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-3">
                  <Phone size={17} className="text-sky-600" />
                  +91 98765 43210
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={17} className="text-sky-600" />
                  support@medicare.com
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={17} className="text-sky-600" />
                  Sector 15, Faridabad, Haryana
                </p>
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

export default SupportPage;