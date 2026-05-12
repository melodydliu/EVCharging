"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Zap } from "lucide-react";
import { PHONE_HREF, SMS_HREF, EMAIL_HREF } from "@/lib/constants";

const CX = 200;
const CY = 200;
const R = 155;
const CIRC = 2 * Math.PI * R;
const ARC = CIRC * 0.78;
const GAP = CIRC - ARC;

function ChargingCircle() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <filter id="arc-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bolt-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="inner-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#050A18" stopOpacity="0.98" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r={188} fill="none" stroke="rgba(59,130,246,0.07)" strokeWidth="1" />

      {[0, 2, 4].map((delay, i) => (
        <circle key={i} cx={CX} cy={CY} r={R} fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5">
          <animate attributeName="r" from={R} to={R + 50} dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.45;0" dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(59,130,246,0.14)" strokeWidth="3" />
      <circle cx={CX} cy={CY} r={R - 5} fill="url(#inner-bg)" />

      <circle
        cx={CX} cy={CY} r={R}
        fill="none"
        stroke="rgba(96,165,250,0.92)"
        strokeWidth="3.5"
        strokeDasharray={`${ARC} ${GAP}`}
        strokeLinecap="round"
        filter="url(#arc-glow)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`-90 ${CX} ${CY}`}
          to={`270 ${CX} ${CY}`}
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>

      <g transform="translate(173.5, 167) scale(2.8)" filter="url(#bolt-glow)">
        <path
          d="M 13 2 L 3 14 L 12 14 L 11 22 L 21 10 L 12 10 Z"
          fill="rgba(147,197,253,0.95)"
          stroke="rgba(96,165,250,0.5)"
          strokeWidth="0.4"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#050A18" }}
    >
      {/* Ambient glow behind right column (desktop) */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[560px] h-[560px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center w-full min-h-dvh lg:min-h-0 lg:flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

          {/* Charging circle — desktop right column only */}
          <div className="hidden lg:flex items-center justify-center lg:order-last">
            <motion.div
              className="w-[480px] h-[480px]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ChargingCircle />
            </motion.div>
          </div>

          {/* Copy + CTAs */}
          <div className="lg:order-first text-center lg:text-left">

            {/* Glowing bolt — mobile only, above headline */}
            <motion.div
              className="lg:hidden flex justify-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="absolute w-20 h-20 rounded-full bg-blue-500/25 blur-2xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <Zap className="relative w-10 h-10 text-blue-400" strokeWidth={1.5} fill="rgba(96,165,250,0.15)" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.12] tracking-tight"
            >
              Fast, Professional{" "}
              <span className="text-blue-400">EV Charger</span>
              {" "}Installation.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-7 text-lg text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Sick of slow-charging overnight? VIR Electric installs speedy professional home EV chargers — licensed, insured, and often completed next-day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm"
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
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/12 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
