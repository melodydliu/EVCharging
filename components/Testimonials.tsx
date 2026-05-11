"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "[Customer Name]",
    location: "Honolulu",
    review:
      "VIR Electric made the whole process seamless. They came out next-day, completed the install in a few hours, and I'm now charging at full speed every night. Highly recommend!",
    stars: 5,
    tier: "Gold Package",
  },
  {
    name: "[Customer Name]",
    location: "Kailua",
    review:
      "Professional, punctual, and fairly priced. The thermal imaging inspection was a great bonus — they actually caught a worn connection at my breaker panel I didn't know about. Great team.",
    stars: 5,
    tier: "Bronze Package",
  },
  {
    name: "[Customer Name]",
    location: "Aiea",
    review:
      "Got the Platinum package for my Tesla and it's been life-changing. No more scrambling for public chargers. VIR Electric is the real deal — licensed, local, and top quality.",
    stars: 5,
    tier: "Platinum Package",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-slate-500 max-w-lg mx-auto text-base">
            Trusted by Oahu homeowners from Honolulu to Kailua.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <StarRow count={t.stars} />
                <Quote className="w-5 h-5 text-slate-200 flex-shrink-0" />
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                {/* Author */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xs font-bold">
                      {t.name[1]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.location}, Oahu</p>
                  </div>
                </div>
                {/* Tier badge */}
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t.tier}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-xs text-slate-300 mt-8">
          Placeholder reviews — replace with real customer testimonials before launch.
        </p>
      </div>
    </section>
  );
}
