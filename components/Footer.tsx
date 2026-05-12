import { ADDRESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-6 px-4 text-center text-xs text-slate-600">
      <p>© {new Date().getFullYear()} VIR Electric (Juxta Holdings LLC) · {ADDRESS}</p>
      <p className="mt-1">Licensed · Insured · Locally Owned · Serving Oahu, Hawaii</p>
    </footer>
  );
}
