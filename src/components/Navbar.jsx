import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Cpu, Cloud, Database, BarChart3, HelpCircle, Compass, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const solutions = [
  { name: "D365 CRM", path: "/solutions/d365-crm", description: "Customer relationship management optimization", icon: HelpCircle },
  { name: "D365 FinOps", path: "/solutions/d365-finops", description: "Finance and operations ERP automation", icon: BarChart3 },
  { name: "ERP Solutions", path: "/solutions/erp", description: "Integrated enterprise resource planning", icon: Database },
  { name: "SAP Solutions", path: "/solutions/sap", description: "Strategic SAP architecture & migrations", icon: Compass },
  { name: "AI Solutions", path: "/solutions/ai", description: "Next-gen intelligent models & agents", icon: Cpu },
  { name: "Cloud Transformation", path: "/solutions/cloud", description: "Secure, scalable cloud environments", icon: Cloud },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "py-3 glass-panel border-b shadow-lg" 
          : "py-5 bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="h-5.5 w-5.5 animate-pulse" />
          </div>
          <div>
            <span className="font-heading text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-slate-500 to-slate-900 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              DYNAMICS
            </span>
            <span className="font-heading text-lg md:text-xl font-medium tracking-tight text-blue-600 dark:text-blue-400 ml-1">
              MENTOS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>

          {/* Solutions Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1.5 focus:outline-none">
              <span>Solutions</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 rounded-2xl glass-panel shadow-xl border p-4 grid gap-3"
                >
                  <div className="text-xs font-semibold text-muted-foreground/60 uppercase px-2 mb-1">Our Practices</div>
                  {solutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link
                        key={solution.name}
                        to={solution.path}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-100/50 dark:hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="h-8 w-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{solution.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{solution.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/about" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          <Link 
            to="/case-studies" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/case-studies" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Case Studies
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right side items */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Link 
            to="/contact" 
            className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile controls & toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full glass-panel border-b mt-3 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 max-h-[85vh] overflow-y-auto">
              <Link 
                to="/" 
                className="text-base font-semibold text-foreground py-1 border-b border-slate-100 dark:border-white/5"
              >
                Home
              </Link>
              
              <div className="flex flex-col space-y-2.5">
                <span className="text-xs font-semibold uppercase text-muted-foreground/60 tracking-wider">Solutions</span>
                <div className="grid grid-cols-1 gap-2.5 pl-2">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className="text-base font-semibold text-foreground py-1 border-b border-slate-100 dark:border-white/5"
              >
                About
              </Link>
              <Link 
                to="/case-studies" 
                className="text-base font-semibold text-foreground py-1 border-b border-slate-100 dark:border-white/5"
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="text-base font-semibold text-foreground py-1 border-b border-slate-100 dark:border-white/5"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-md mt-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
