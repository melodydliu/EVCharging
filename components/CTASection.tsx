"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail } from "lucide-react";
import { PHONE_HREF, SMS_HREF, EMAIL_HREF, PHONE, EMAIL } from "@/lib/constants";

const contactOptions = [
  { icon: Phone, label: "Call Us", sublabel: PHONE, href: PHONE_HREF },
  { icon: MessageSquare, label: "Text Us", sublabel: PHONE, href: SMS_HREF },
  { icon: Mail, label: "Email Us", sublabel: EMAIL, href: EMAIL_HREF },
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
            charging. Give us a call, send a text, or shoot us an email — we&apos;ll
            get back to you fast.
          </p>

          {/* Contact options */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {contactOptions.map(({ icon: Icon, label, sublabel, href }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-4 rounded-xl transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{sublabel}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
