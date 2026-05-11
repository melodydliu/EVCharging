"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, MessageSquare, Mail } from "lucide-react";
import { CALENDLY_URL, PHONE_HREF, SMS_HREF, EMAIL_HREF, PHONE, EMAIL } from "@/lib/constants";

const contactOptions = [
  { icon: Phone, label: PHONE, href: PHONE_HREF },
  { icon: MessageSquare, label: "Text Us", href: SMS_HREF },
  { icon: Mail, label: EMAIL, href: EMAIL_HREF },
];

export function CTASection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#050A18" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-blue-400 font-semibold text-xs tracking-widest uppercase mb-4">
            Get Started Today
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Upgrade Your EV Charging?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Join Oahu homeowners who made the switch to fast, reliable home
            charging. Schedule your free consultation — often completed next-day.
          </p>

          {/* Primary CTA */}
          <div className="mt-9">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/20 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Schedule Free Consultation
            </a>
          </div>

          {/* Secondary contact options */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {contactOptions.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 border border-white/12 hover:bg-white/6 text-slate-400 hover:text-white px-5 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
