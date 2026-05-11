"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock, ThumbsUp, ScanLine } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Locally Owned · Oahu, HI" },
  { icon: Clock, label: "Next-Day Available" },
  { icon: ThumbsUp, label: "90-Day Guarantee" },
  { icon: ScanLine, label: "Thermal Imaging Included" },
];

export function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 text-slate-700"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
