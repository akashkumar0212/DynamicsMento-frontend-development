import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import faviconLogo from "../assets/favicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] border-t border-slate-800 text-slate-300 relative overflow-hidden pt-24 pb-12 text-left">

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

        {/* Company */}
        <div className="lg:col-span-2 space-y-6">

          <Link to="/" className="flex items-center space-x-3 group">

            <div className="h-11 w-15 rounded-xl bg-white border border-slate-700 flex items-center justify-center p-1 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={faviconLogo}
                alt="Dynamics Mento Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <span className="font-heading text-lg font-black tracking-tight text-white">
              DYNAMICS MENTO
            </span>

          </Link>

          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Enterprise-grade engineering, strategic consultation, and automated
            cloud solutions. Orchestrating digital architecture for global
            organizations.
          </p>

          <div className="flex items-center gap-3">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:text-white hover:border-blue-400 transition-all"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:text-white hover:border-blue-400 transition-all"
            >
              <FaTwitter />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:text-white hover:border-blue-400 transition-all"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        {/* Solutions */}
        <FooterColumn
          title="Solutions"
          items={[
            "D365 CRM",
            "D365 FinOps",
            "Business Central",
            "Copilot & AI Solutions",
            "Power Platform & Power Automate",
            "Finance Transformation",
          ]}
        />

        {/* Company */}
        <FooterColumn
          title="Company"
          items={[
            "About Us",
            "Case Studies",
            "Contact Info",
          ]}
        />

        {/* Contact */}
        <div>

          <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-white mb-6">
            Contact
          </h4>

          <ul className="space-y-4 text-sm text-slate-400">

            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <span>
                Office 228, Orbit Plaza, Crossing Republik,
                Ghaziabad, UP, India
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-400 shrink-0" />
              <span>+91 (120 4481981)</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-400 shrink-0" />
              <span>info@dynamicsmento.com</span>
            </li>

          </ul>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">

        <div>
          © {currentYear} Dynamics Mento Consulting. All rights reserved.
        </div>

        <div className="flex gap-6">

          <Link
            to="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-of-service"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>

          <Link
            to="/sitemap"
            className="hover:text-white transition-colors"
          >
            Sitemap
          </Link>

        </div>

      </div>

    </footer>
  );
}

function FooterColumn({ title, items }) {

  const routes = {
    "D365 CRM": "/solutions/d365-crm",
    "D365 FinOps": "/solutions/d365-finops",
    "Business Central": "/solutions/business-central",
    "Copilot & AI Solutions": "/solutions/copilot-ai",
    "Power Platform & Power Automate": "/solutions/power-platform",
    "Finance Transformation": "/solutions/finance-transformation",

    "About Us": "/about",
    "Case Studies": "/case-studies",
    "Contact Info": "/contact",
    "Careers": "/careers",
  };

  return (
    <div>

      <h4 className="font-heading text-xs font-bold tracking-wider uppercase text-white mb-6">
        {title}
      </h4>

      <ul className="space-y-3.5">

        {items.map((item) => (

          <li key={item}>

            <Link
              to={routes[item] || "/"}
              className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
            >
              {item}
            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}