"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail } from "lucide-react";
import { PHONE_HREF, SMS_HREF, EMAIL_HREF } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#050A18" }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=3272&auto=format&fit=crop"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Smooth left→right fade: text side stays dark, photo breathes through on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/85 to-[#050A18]/20" />
        {/* Top/bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A18]/40 via-transparent to-[#050A18]/92" />
      </div>

      {/* Blue tint blobs — keep the brand colour alive over the photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex items-center w-full min-h-dvh lg:min-h-0 lg:flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* ── Left: copy + CTAs ── */}
        <div>
          {/* Headline */}
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

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-7 text-lg text-slate-400 leading-relaxed max-w-lg"
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
            className="mt-10 flex flex-wrap gap-3"
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
