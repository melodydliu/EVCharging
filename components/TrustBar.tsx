"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock, ThumbsUp, ScanLine } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "State contractor certified" },
  { icon: MapPin, label: "Locally Owned", sub: "Serving Oahu, HI" },
  { icon: Clock, label: "Next-Day Available", sub: "Fast, flexible scheduling" },
  { icon: ThumbsUp, label: "90-Day Guarantee", sub: "No questions asked" },
  { icon: ScanLine, label: "Thermal Imaging", sub: "Included with every install" },
];

export function TrustBar() {
  return (
    <section className="py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 font-semibold text-xs tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built on Trust. Backed by Results.
          </h2>
        </motion.div>

        {/* Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="flex flex-col items-center text-center gap-3 last:col-span-2 last:justify-self-center sm:last:col-span-1 sm:last:justify-self-auto"
            >
              <div className="size-12 rounded-full bg-blue-500/15 ring-1 ring-blue-400/35 flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.2)]">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-snug">{label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
