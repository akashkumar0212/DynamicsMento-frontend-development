import React from "react";
import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin,} from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#060a12] border-t border-slate-200 dark:border-white/5 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="flex items-center space-x-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <span className="font-heading text-lg font-bold tracking-tight text-slate-700 dark:text-white">
                DYNAMICS
              </span>
              <span className="font-heading text-lg font-medium tracking-tight text-blue-500 dark:text-blue-400 ml-1">
                MENTOS
              </span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Enterprise-grade engineering, strategic consultation, and automated cloud solutions. Orchestrating digital architecture for global organizations.
          </p>
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="h-9 w-9 rounded-lg bg-slate-200/50 dark:bg-white/5 text-muted-foreground hover:text-primary hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-all duration-300"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="h-9 w-9 rounded-lg bg-slate-200/50 dark:bg-white/5 text-muted-foreground hover:text-primary hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-all duration-300"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="h-9 w-9 rounded-lg bg-slate-200/50 dark:bg-white/5 text-muted-foreground hover:text-primary hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center transition-all duration-300"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Practices Links */}
        <div>
          <h4 className="font-heading text-xs font-bold tracking-wider text-slate-900 dark:text-white uppercase mb-5">
            Solutions
          </h4>
          <ul className="space-y-3.5">
            <li>
              <Link to="/solutions/d365-crm" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                D365 CRM
              </Link>
            </li>
            <li>
              <Link to="/solutions/d365-finops" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                D365 FinOps
              </Link>
            </li>
            <li>
              <Link to="/solutions/erp" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ERP Solutions
              </Link>
            </li>
            <li>
              <Link to="/solutions/sap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                SAP Solutions
              </Link>
            </li>
            <li>
              <Link to="/solutions/ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                AI Solutions
              </Link>
            </li>
            <li>
              <Link to="/solutions/cloud" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cloud Transformation
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-heading text-xs font-bold tracking-wider text-slate-900 dark:text-white uppercase mb-5">
            Company
          </h4>
          <ul className="space-y-3.5">
            <li>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Info
              </Link>
            </li>
            <li>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Careers
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-xs font-bold tracking-wider text-slate-900 dark:text-white uppercase mb-5">
            Contact
          </h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground">
            <li className="flex items-start space-x-2.5">
              <MapPin className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
              <span>Office 228, Orbit Plaza, Crossing Republik, Ghaziabad,  UP, India</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
              <span>+91 (9898989898)</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
              <span>consulting@dynamicsmentos.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
        <div>
          &copy; {currentYear} Dynamics Mentos Consulting. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
