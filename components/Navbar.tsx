"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Phone, Menu, X } from "lucide-react";
import { PHONE_HREF, PHONE } from "@/lib/constants";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              VIR Electric
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  scrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? "text-slate-600" : "text-white/80"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-md shadow-blue-600/20"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-slate-700 font-medium py-2.5 hover:text-blue-600 transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 space-y-2 mt-2">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-slate-700 font-medium py-2 hover:text-blue-600 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
