import { Zap, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import {
  PHONE,
  PHONE_HREF,
  SMS_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
} from "@/lib/constants";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/30">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">VIR Electric</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Juxta Holdings LLC DBA VIR Electric. Licensed, insured EV charger
              installation on Oahu, Hawaii.
            </p>
            <p className="mt-3 text-xs text-slate-600 italic">
              One Stop Shop for EV Charger Installations.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={SMS_HREF}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                  Text Us
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Location</p>
            <div className="flex items-start gap-2 text-sm text-slate-500">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
            <p className="mt-4 text-xs text-slate-600">Serving all of Oahu, Hawaii</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} VIR Electric (Juxta Holdings LLC). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-green-500 inline-block" />
            Licensed · Insured · Locally Owned
          </p>
        </div>
      </div>
    </footer>
  );
}
