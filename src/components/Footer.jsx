import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import faviconLogo from "../assets/favicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-white via-slate-50 to-blue-50/70 dark:from-[#111827] dark:via-[#0f172a] dark:to-[#111827] border-t border-slate-200 dark:border-white/10 transition-colors duration-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-16 rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center p-1">
              <img src={faviconLogo} alt="Dynamics Mento Logo" className="h-full w-full object-contain" />
            </div>

            <div>
              <span className="font-heading text-lg font-bold text-slate-800 dark:text-white">DYNAMICS</span>
              <span className="font-heading text-lg font-medium text-blue-600 dark:text-blue-400 ml-1">MENTO</span>
            </div>
          </Link>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
            Enterprise-grade engineering, strategic consultation, and automated cloud solutions. Orchestrating digital architecture for global organizations.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl bg-white/70 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:text-black hover:-translate-y-1 transition-all">
              <FaLinkedin />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl bg-white/70 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:text-black hover:-translate-y-1 transition-all">
              <FaTwitter />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl bg-white/70 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:text-black hover:-translate-y-1 transition-all">
              <FaGithub />
            </a>
          </div>
        </div>

        <FooterColumn title="Solutions" items={["D365 CRM","D365 FinOps","Business Central","Copilot & AI Solutions","Power Platform & Power Automate","Finance Transformation"]}/>

        <FooterColumn title="Company" items={["About Us","Case Studies","Contact Info","Careers"]}/>

        <div>
          <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white mb-5">Contact</h4>

          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-Blck shrink-0"/>
              <span>Office 228, Orbit Plaza, Crossing Republik, Ghaziabad, UP, India</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-black"/>
              <span>+91 (120 4481981)</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-black"/>
              <span>info@dynamicsmento.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div>© {currentYear} Dynamics Mentos Consulting. All rights reserved.</div>

        <div className="flex gap-6">
          <span className="hover:text-black cursor-pointer">Privacy Policy</span>
          <span className="hover:text-black cursor-pointer">Terms of Service</span>
          <span className="hover:text-black cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({title,items}) {
  return (
    <div>
      <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-white mb-5">{title}</h4>

      <ul className="space-y-3.5">
        {items.map(item=>(
          <li key={item}>
            <span className="text-sm text-slate-600 dark:text-slate-300 hover:text-black cursor-pointer transition-colors">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}