"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Justin K.",
    location: "Honolulu, HI",
    review:
      "Hit Quinton about a few different outlet options and he broke everything down with pricing for each. Everything felt fair, especially for how thorough he is and the quality of his work. He was able to fit us in same day, which was clutch. Did an awesome job, kept me updated the whole time, and even sent over a work report after showing everything he did. Super solid experience. If you need an electrician, this is your guy!",
    stars: 5,
    accent: { border: "border-t-blue-500", quote: "text-blue-200", avatar: "bg-blue-50", initial: "text-blue-600" },
  },
  {
    name: "Rudy M.",
    location: "Honolulu, HI",
    review:
      "I needed a level 2 50 amp EV charger installed that also included voltage monitors on the panel. Quinton charged a fair price when I compared to other electrician proposals. He did a phenomenal job with the meter upgrade, running the lines through the house through the garage, and also helped me figure out how to install and use the new charger. Finished on time, was flexible in terms of what I wanted done and when, easy to work with, very cordial, offered even to stick around while I tested everything. Quinton is my electrician going forward if we need additional electrical work done.",
    stars: 5,
    accent: { border: "border-t-indigo-500", quote: "text-indigo-200", avatar: "bg-indigo-50", initial: "text-indigo-600" },
  },
  {
    name: "Katy S.",
    location: "Mililani, HI",
    review:
      "Quinton did an excellent job! He was willing to fit us in on short notice and was prompt in arrival. He even had follow up texts on the work done. He also made sure to let me know of any other issues that we could have. I will be recommending VIR Electric to all of my family and friends.",
    stars: 5,
    accent: { border: "border-t-violet-500", quote: "text-violet-200", avatar: "bg-violet-50", initial: "text-violet-600" },
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
    <section className="py-24 bg-slate-50">
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
              className={`flex flex-col bg-white rounded-2xl p-6 border border-slate-100 border-t-2 ${t.accent.border} shadow-sm hover:shadow-md transition-all duration-300`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <StarRow count={t.stars} />
                <Quote className={`w-5 h-5 shrink-0 ${t.accent.quote}`} />
              </div>

              {/* Review text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full ${t.accent.avatar} border-2 border-white shadow-sm flex items-center justify-center shrink-0`}>
                  <span className={`text-xs font-bold ${t.accent.initial}`}>{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
