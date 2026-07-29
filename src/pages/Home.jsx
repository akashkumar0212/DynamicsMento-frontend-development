import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Cloud, Database, BarChart3, Compass, HelpCircle, Shield, Users, Zap, CheckCircle2, Award } from "lucide-react";

const services = [
  {
    name: "D365 CRM",
    description: "Connect sales, service, and marketing with unified intelligent flows. Empower teams to build deep, lifetime relationships with customers.",
    icon: HelpCircle,
    color: "from-blue-500 to-indigo-500",
    link: "/solutions/d365-crm"
  },
  {
    name: "D365 FinOps",
    description: "Automate financial operations, manage supply chains, and streamline operations. Leverage high-level ERP orchestration for real-time visibility.",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-500",
    link: "/solutions/d365-finops"
  },
  {
    name: "Business Central",
    description: "Bespoke systems integrating production, human resources, finance, and logistics. Drive transparency and agility across your enterprise operations.",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    link: "/solutions/erp"
  },
  {
    name: "Copilot & AI Solutions",
    description: "Accelerate migration to S/4HANA, optimize existing landscapes, and integrate cloud services with global SAP architectures.",
    icon: Compass,
    color: "from-pink-500 to-red-500",
    link: "/solutions/sap"
  },
  {
    name: "Power Platform & Power Automate",
    description: "Build apps, automate workflows, and visualise data with Microsoft Power Platform and Power BI.",
    icon: Cpu,
    color: "from-teal-500 to-emerald-500",
    link: "/solutions/ai"
  },
  {
    name: "Finance Transformation",
    description: "Modernise, automate, and streamline your finance function with the power of Dynamics 365 and digital solutions.",
    icon: Cloud,
    color: "from-emerald-500 to-blue-500",
    link: "/solutions/cloud"
  }
];

const stats = [
  { value: "99.8%", label: "Migration Success Rate" },
  { value: "150+", label: "Enterprise Projects Delivered" },
  { value: "40%", label: "Average Operational Speedup" },
  { value: "24/7", label: "Global Dedicated Support" }
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full pb-20 bg-[#F8FBFF]">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-36 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8FBFF] to-[#F1F8FF]">
        {/* Abstract grids and glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none -z-10" />
        <div className="absolute top-20 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* SaaS Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-150/50 text-xs font-bold text-blue-600 shadow-sm"
            >
              <Zap className="h-3.5 w-3.5 text-blue-500" />
              <span>Next-Gen Enterprise Solutions</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] font-heading text-slate-900"
            >
              Orchestrate Your <br />
              <span>Digital Transformation</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
            >
              Dynamics Mento provide best-in-class industry solutions built on Microsoft’s Dynamics 365 Business Applications platform, and extended via industry-specific applications from Dynamics Mento and our partners to meet your unique requirements.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="flex items-center space-x-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <a 
                href="#services" 
                className="px-7 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                Explore Offerings
              </a>
            </motion.div>
          </div>

          {/* Animated Hero Graphic */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-3xl absolute -z-10"
            />
            
            {/* Mock Floating Tech Stack Interface */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl p-7 shadow-xl w-full max-w-sm space-y-6 relative z-10 border border-blue-500/10 bg-white/95"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-450" />
                </div>
                <span className="text-[10px] text-slate-450 font-extrabold uppercase tracking-wider">Cloud Engine Status</span>
              </div>
              <div className="space-y-5 text-left">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-800">GEMS ERP Sync</span>
                    <span className="text-blue-600 font-semibold">Active - 94%</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Unified compliance platform</div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[94%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-800">Canon Scan API</span>
                    <span className="text-emerald-600 font-semibold">Ready</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Advanced barcode tracking</div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#F1F8FF] border-y border-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="rounded-2xl p-6 text-center bg-white border border-blue-500/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-blue-600">
                {stat.value}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 md:px-8 bg-white border-t border-blue-50/50">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="text-xs font-bold uppercase text-blue-600 tracking-wider">Consulting Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
            Comprehensive Digital Practice Areas
          </h3>
          <p className="text-slate-500 leading-relaxed font-medium">
            We architect end-to-end modernization pathways for medium to large enterprises.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="group relative rounded-3xl p-8 bg-white border border-slate-200 hover:border-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/[0.03] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-500/10 text-blue-600 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors duration-200">{service.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Enterprise Trust Section */}
      <section className="py-24 bg-[#F1F8FF] border-y border-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase text-blue-600 tracking-wider">
                Enterprise Framework
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-900">
                Architected for High Scale and Security
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Modern enterprise applications require robust foundations.
                We integrate the best industry practices to ensure continuous
                scalability, zero data loss, and real-time operations.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  title: "Strategic Mentors",
                  desc: "Certified architects leading multi-tier global architectures."
                },
                {
                  title: "Continuous Delivery",
                  desc: "Automated pipeline management ensuring zero disruption."
                },
                {
                  title: "Regulatory Alignment",
                  desc: "Compliance with GDPR, HIPAA, and industry-specific protocols."
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-50 border border-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Audit Card */}
          <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 max-w-md w-full bg-white border border-slate-200 shadow-xl shadow-blue-500/10"
          >
            <h4 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 text-slate-900">
              <Award className="h-6 w-6 text-blue-600" />
              <span>Why Choose Dynamics Mento?</span>
            </h4>

            <ul className="space-y-5">

              <li className="flex items-start gap-3 border-b border-slate-100 pb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-semibold text-slate-900">
                    Microsoft Certified Expertise
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">
                    Specialists in Dynamics 365, Power Platform, Business Central,
                    Azure and Copilot solutions.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 border-b border-slate-100 pb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-semibold text-slate-900">
                    End-to-End Delivery
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">
                    From consulting and implementation to migration, integration,
                    automation and ongoing support.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 border-b border-slate-100 pb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-semibold text-slate-900">
                    Industry-Focused Solutions
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">
                    Tailored ERP and CRM solutions designed around your business
                    processes and growth goals.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-semibold text-slate-900">
                    Long-Term Partnership
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">
                    Dedicated support, proactive optimisation and continuous
                    innovation to maximise your Microsoft investment.
                  </p>
                </div>
              </li>

            </ul>
          </motion.div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8 bg-[#F8FBFF]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2563EB] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-blue-900/35"
        >
          {/* Radial light glows inside CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              Ready to Modernize Your Operations?
            </h3>
            <p className="text-blue-100/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Schedule a technical consulting call with our solutions architects. We'll analyze your current architecture and deliver a detailed modernization blueprint.
            </p>
            <div className="flex justify-center flex-wrap gap-4 pt-2">
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-blue-600 font-bold hover:scale-[1.02] shadow-lg active:scale-[0.98] transition-all duration-300"
              >
                Book Consulting Call
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
