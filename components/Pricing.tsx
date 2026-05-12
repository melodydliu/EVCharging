"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { PHONE_HREF } from "@/lib/constants";

const tiers = [
  {
    name: "Bronze",
    price: "$405",
    tagline: "For pre-wired homes",
    description:
      "Ideal if your home already has 240V wiring at the charger location. Quick, clean installation.",
    accentColor: "text-amber-600",
    borderClass: "border-slate-200",
    ringClass: "",
    badgeClass: "bg-amber-50 text-amber-700 border border-amber-200",
    btnClass: "bg-slate-900 hover:bg-slate-700 text-white",
    highlight: false,
    badge: null,
    features: [
      "240V EV Receptacle installation",
      "50A GFCI protection",
      "Thermal imaging inspection",
      "Work documentation",
      "90-day satisfaction guarantee",
    ],
  },
  {
    name: "Gold",
    price: "$1,990",
    tagline: "For any home",
    description:
      "Full wiring run from your panel to the charger location. Works for homes without existing 240V.",
    accentColor: "text-blue-600",
    borderClass: "border-blue-500",
    ringClass: "ring-2 ring-blue-500 ring-offset-2",
    badgeClass: "bg-blue-600 text-white border border-blue-600",
    btnClass: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Bronze",
      "Full pipe & wire run from panel",
      "All materials included",
      "Professional installation",
      "Thermal imaging inspection",
      "Work documentation",
      "90-day satisfaction guarantee",
    ],
  },
  {
    name: "Platinum",
    price: "$2,340",
    tagline: "Tesla owners' pick",
    description:
      "Our most complete package — Tesla Gen 3 Wall Connector included, HECO Shift & Save compatible.",
    accentColor: "text-slate-500",
    borderClass: "border-slate-200",
    ringClass: "",
    badgeClass: "bg-slate-100 text-slate-600 border border-slate-300",
    btnClass: "bg-slate-900 hover:bg-slate-700 text-white",
    highlight: false,
    badge: "Tesla Ready",
    features: [
      "Everything in Gold",
      "Tesla Gen 3 Wall Connector included",
      "6–8× faster than a standard outlet",
      "HECO Shift & Save compatible",
      "Thermal imaging inspection",
      "Work documentation",
      "90-day satisfaction guarantee",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
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
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-slate-500 max-w-lg mx-auto text-base">
            No hidden fees. No surprises. Choose the package that fits your home and your car.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: tier.highlight ? -4 : -6 }}
              className={`relative rounded-2xl border-2 ${tier.borderClass} ${tier.ringClass} bg-white p-7 flex flex-col transition-shadow duration-300 hover:shadow-xl ${
                tier.highlight ? "shadow-lg shadow-blue-100" : "shadow-sm"
              }`}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${tier.badgeClass}`}
                  >
                    {tier.highlight && <Star className="w-3 h-3 fill-current" />}
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier label */}
              <span className={`text-xs font-bold tracking-widest uppercase ${tier.accentColor}`}>
                {tier.name}
              </span>

              {/* Price */}
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
              </div>

              <p className="mt-1 text-sm font-medium text-slate-500">{tier.tagline}</p>
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{tier.description}</p>

              <div className="my-5 h-px bg-slate-100" />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-blue-600 stroke-[3]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={PHONE_HREF}
                className={`mt-7 block w-full text-center font-semibold py-3 rounded-xl transition-all duration-200 text-sm ${tier.btnClass}`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-400 mt-10"
        >
          Not sure which package fits your home?{" "}
          <a href={PHONE_HREF} className="text-blue-600 hover:underline font-medium">
            Give us a call
          </a>{" "}
          and we&apos;ll help you figure it out — no obligation.
        </motion.p>
      </div>
    </section>
  );
}
