import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const specialties = [
  {
    title: "Cardiology Care",
    desc: "Fast heart checkups, preventive screenings, and specialist consultations.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pediatrics",
    desc: "Friendly child care appointments with experienced pediatric doctors.",
    img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Neurology",
    desc: "Smart specialist search for headaches, sleep concerns, and advanced diagnosis.",
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=80",
  },
];

const testimonials = [
  {
    name: "Ritika Sharma",
    text: "The booking flow was smooth, and I got my appointment confirmed without calling.",
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Aanya Verma",
    text: "I loved how easy it was to compare doctors and choose a time slot on mobile.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Arjun Malhotra",
    text: "This looks modern, premium, and much more reliable than old clinic websites.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
  },
];

const features = [
  {
    title: "Human-first design",
    desc: "Strong visuals and calm layout build trust quickly.",
    icon: "❤",
  },
  {
    title: "Online scheduling",
    desc: "Visible booking buttons reduce friction for patients.",
    icon: "📅",
  },
  {
    title: "Mobile ready",
    desc: "Responsive layout works smoothly across screen sizes.",
    icon: "📱",
  },
  {
    title: "Trust elements",
    desc: "Profiles, reviews, and clear sections improve confidence.",
    icon: "⭐",
  },
];

export default function DoctorHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">
      <Nav/>
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              Trusted care • Same-day booking
            </span>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your health appointments, beautifully organized.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Book top doctors, compare slots, and get fast access to care with a homepage that feels premium,
              clean, and easy to use.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                Find a Doctor
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
                Explore Departments
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-blue-100/50 backdrop-blur">
                <p className="text-3xl font-black text-slate-900">120+</p>
                <p className="mt-1 text-sm text-slate-500">Experienced doctors</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-blue-100/50 backdrop-blur">
                <p className="text-3xl font-black text-slate-900">24/7</p>
                <p className="mt-1 text-sm text-slate-500">Instant booking support</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-blue-100/50 backdrop-blur">
                <p className="text-3xl font-black text-slate-900">4.9/5</p>
                <p className="mt-1 text-sm text-slate-500">Patient satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <div className="absolute left-0 top-0 z-20 w-52 rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt="Doctor smiling in clinic"
                width="800"
                height="1000"
                loading="eager"
                className="h-40 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-base font-extrabold text-slate-900">Dr. Meera Kapoor</h3>
              <p className="mt-1 text-sm text-slate-500">Cardiology specialist with fast online slots.</p>
            </div>

            <div className="absolute left-6 top-16 right-0 overflow-hidden rounded-[34px] bg-gradient-to-b from-blue-100 to-teal-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                alt="Modern healthcare consultation room"
                width="1200"
                height="1400"
                loading="eager"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div
              id="booking"
              className="absolute bottom-3 right-0 z-20 w-60 rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur"
            >
              <h3 className="text-base font-extrabold text-slate-900">Next available today</h3>
              <p className="mt-1 text-sm text-slate-500">
                Find nearby care, choose a specialist, and confirm in minutes.
              </p>

              <div className="mt-4 flex">
                {[
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&q=80",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Doctor profile avatar"
                    width="300"
                    height="300"
                    loading="lazy"
                    className="-mr-3 h-11 w-11 rounded-full border-4 border-white object-cover"
                  />
                ))}
              </div>

              <button className="mt-5 w-full rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                Reserve 10:30 AM
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-4">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 rounded-[32px] border border-white/80 bg-white/80 px-4 py-5 shadow-xl backdrop-blur sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 rounded-2xl p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 text-xl text-blue-700">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="specialties" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              Popular departments
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Specialists patients can discover in one clean flow.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Clear service presentation, strong doctor imagery, and visible booking actions help patients understand care options quickly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-lg shadow-sky-100/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                width="1000"
                height="800"
                loading="lazy"
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="care" className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Healthcare gallery"
              width="900"
              height="900"
              loading="lazy"
              className="h-60 w-full rounded-[26px] object-cover shadow-lg shadow-sky-100/40"
            />
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            Patient journey
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Built to feel premium, full, and reassuring from first click.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A strong medical homepage should combine clear information architecture, trust blocks, and direct booking access.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                no: "1",
                title: "Search specialists quickly",
                desc: "Patients can compare care options without confusion.",
              },
              {
                no: "2",
                title: "See trust signals up front",
                desc: "Reviews and doctor details improve confidence early.",
              },
              {
                no: "3",
                title: "Book with fewer steps",
                desc: "Visible scheduling buttons support faster appointment conversion.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-[24px] border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-sky-100/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-400 text-sm font-extrabold text-white">
                  {item.no}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              Patient stories
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Reviews that make the homepage feel alive and trustworthy.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Human photography and visible testimonials help support trust before patients take action.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-lg shadow-sky-100/40"
            >
              <img
                src={item.img}
                alt={item.name}
                width="1000"
                height="900"
                loading="lazy"
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 text-orange-400">★★★★★</div>
                <p className="text-sm leading-7 text-slate-600">“{item.text}”</p>
                <p className="mt-4 text-base font-extrabold text-slate-900">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-blue-800 to-teal-500 shadow-2xl lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Ready to launch
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              A homepage concept that feels rich, modern, and booking-focused.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              This layout combines modern medical imagery, strong call-to-action placement, responsive sections,
              and trust-building content for a premium doctor appointment homepage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5">
                Start Booking Flow
              </button>
              <button className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
                View Services
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1578496781985-452d4a934d50?auto=format&fit=crop&w=1200&q=80"
              alt="Doctor team in modern healthcare environment"
              width="1200"
              height="1000"
              loading="lazy"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}