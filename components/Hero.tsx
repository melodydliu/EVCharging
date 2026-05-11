"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, MessageSquare, Zap, ChevronDown } from "lucide-react";
import { PHONE_HREF, SMS_HREF, CALENDLY_URL } from "@/lib/constants";

const trustChips = [
  "Licensed & Insured",
  "Locally Owned",
  "Next-Day Available",
  "90-Day Guarantee",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#050A18" }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/6 w-[500px] h-[400px] rounded-full bg-blue-900/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* ── Left: copy + CTAs ── */}
        <div>
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Serving Oahu, Hawaii
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.12] tracking-tight"
          >
            Fast, Professional{" "}
            <span className="text-blue-400">EV Charger</span>
            {" "}Installation.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            Stop slow-charging overnight. VIR Electric installs professional home
            EV chargers for any home — licensed, insured, and often completed
            next-day.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/12 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={SMS_HREF}
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/12 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Text Us
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustChips.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm text-slate-500"
              >
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: visual ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Pulsing outer ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border border-blue-500/40"
            />
            {/* Static rings */}
            <div className="absolute inset-6 rounded-full border border-blue-500/25" />
            <div className="absolute inset-12 rounded-full border border-blue-500/35" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-600/8 blur-2xl" />
            {/* Icon circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-blue-600/15 border border-blue-500/35 flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-16 h-16 text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
            {/* Floating badges */}
            <div
              className="absolute -top-2 right-0 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-white shadow-xl"
              style={{ backgroundColor: "rgba(10,15,30,0.85)", backdropFilter: "blur(8px)" }}
            >
              ⚡ Next-Day Install
            </div>
            <div
              className="absolute -bottom-2 left-0 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-white shadow-xl"
              style={{ backgroundColor: "rgba(10,15,30,0.85)", backdropFilter: "blur(8px)" }}
            >
              ✓ Licensed &amp; Insured
            </div>
            <div
              className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-white shadow-xl"
              style={{ backgroundColor: "rgba(10,15,30,0.85)", backdropFilter: "blur(8px)" }}
            >
              🛡 90-Day Guarantee
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 pointer-events-none"
      >
        <span className="text-xs tracking-wide">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
