"use client";

import { motion } from "framer-motion";
import { Phone, ScanSearch, Zap } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Give Us a Call or Text",
    description:
      "Reach out by phone, text, or email. We'll discuss your home, your EV, and your charging goals — no obligation, no pressure.",
  },
  {
    icon: ScanSearch,
    title: "We Assess Your Home",
    description:
      "A licensed technician visits to evaluate your electrical panel, inspect your space with thermal imaging, and recommend the right installation path.",
  },
  {
    icon: Zap,
    title: "We Install. You Charge.",
    description:
      "We handle all wiring, hardware, and setup. Most installs are completed in a single visit — often next-day from your consultation.",
  },
];

export function HowItWorks() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Installation, Simplified
          </h2>
          <p className="mt-3 text-slate-500 max-w-lg mx-auto text-base">
            From consultation to first charge — we make the process
            straightforward and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[2.75rem] left-[calc(16.67%+2.5rem)] right-[calc(16.67%+2.5rem)] h-px bg-slate-200 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-white shadow-md flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-blue-600" strokeWidth={1.75} />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
