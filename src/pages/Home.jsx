import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Cloud, Database, BarChart3, Compass, HelpCircle, Shield, Users, Zap, CheckCircle2 } from "lucide-react";

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
    <div className="w-full pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* SaaS Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400"
            >
              <Zap className="h-3.5 w-3.5" />
              <span>Next-Gen Enterprise Solutions</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading"
            >
              Orchestrate Your <br />
              <span className="text-gradient">Digital Transformation</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
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
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <a 
                href="#services" 
                className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white hover:text-black/50 text-foreground font-semibold transition-all duration-500"
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
              className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-500/25 blur-3xl absolute -z-10"
            />
            
            {/* Mock Floating Tech Stack Interface */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-3xl p-6 shadow-2xl w-full max-w-sm space-y-6 relative z-10 border border-white/20 dark:border-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">Cloud Engine Status</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Azure Cloud Migration</span>
                    <span className="text-blue-500">Active - 94%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[94%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>AI Model Fine-tuning</span>
                    <span className="text-teal-500">Ready</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>SAP S/4HANA Sync</span>
                    <span className="text-purple-500">Syncing...</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[67%]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className=" py-16 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 dark:from-[#111827] dark:via-[#0f172a] dark:to-[#111827] border-y border-slate-200/80 dark:border-white/10 transition-colors duration-300">

        <div className=" max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8" >
          {stats.map((stat) => (

            <div key={stat.label}
              className=" rounded-2xl p-6 text-center bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <h3 className=" text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 ">
                {stat.value}
              </h3>
              <p
                className=" mt-3 text-sm font-semibold uppercase  tracking-wide text-slate-600 dark:text-slate-300 " >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <h2 className="text-xs font-bold uppercase text-primary tracking-wider">Consulting Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Comprehensive Digital Practice Areas
          </h3>
          <p className="text-muted-foreground">
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
                className="group relative rounded-3xl p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white">{service.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="pt-8">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

        {/* Enterprise Trust Section */}
      <section
        className=" py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 dark:from-[#111827] dark:via-[#0f172a] dark:to-[#111827] border-y border-slate-200/80 dark:border-white/10 transition-colors  duration-300 "
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            <div className="space-y-4">

              <h2 className="  text-xs font-bold uppercase text-primary tracking-wider" >
                Enterprise Framework
              </h2>
              <h3
                className=" text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white" >
                Architected for High Scale and Security
              </h3>
              <p className=" text-slate-600 dark:text-slate-300 leading-relaxed text-base max-w-xl" >
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
                <div
                  key={item.title}
                  className=" flex items-start gap-3.5">
                  <div className=" h-6 w-6 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className=" text-base font-bold font-heading text-slate-950 dark:text-white">
                      {item.title}
                    </h4>
                    <p className=" text-sm text-slate-600 dark:text-slate-300 mt-1 ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Audit Card */}
          <div className="relative flex justify-center">
            <div className=" absolute inset-0 bg-grid-pattern opacity-30 -z-10"/>

            <motion.div
              initial={{
                opacity:0,
                x:20
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:0.6
              }}

              className=" rounded-3xl p-8 max-w-md w-full bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl">
              <h4 className="text-lg font-bold font-heading mb-6 flex items-center gap-2 text-slate-950 dark:text-white ">
                <Shield className="h-5 w-5 text-blue-500" />
                <span>
                  Security & Performance Audit
                </span>
              </h4>
              <ul className="space-y-4 text-sm">
                <li
                  className="
                  flex
                  justify-between
                  border-b
                  pb-3
                  border-slate-200
                  dark:border-white/10
                  "
                >
                  <span className="text-slate-600 dark:text-slate-300">
                    SOC2 Certification
                  </span>
                  <span className="font-bold text-green-500 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" />
                    Pass
                  </span>
                </li>
                <li
                  className=" flex justify-between border-b pb-3 border-slate-200 dark:border-white/10"
                >
                  <span className="text-slate-600 dark:text-slate-300">
                    Data Encryption (AES-256)
                  </span>
                  <span className="font-bold text-green-500 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" />
                    Active
                  </span>
                </li>
                <li
                  className=" flex justify-between border-b pb-3 border-slate-200 dark:border-white/10">
                  <span className="text-slate-600 dark:text-slate-300">
                    Global API Latency
                  </span>
                  <span className="font-bold text-slate-950 dark:text-white">
                    &lt; 85ms
                  </span>
                </li>

                <li className=" flex justify-between ">
                  <span className="text-slate-600 dark:text-slate-300">
                    Load Balancing Scaling
                  </span>
                  <span className="font-bold text-slate-950 dark:text-white">
                    Auto (Kubernetes)
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Radial light glow overlay inside CTA */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xs -z-10" />
          
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
              Ready to Modernize Your Operations?
            </h3>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              Schedule a technical consulting call with our solutions architects. We'll analyze your current architecture and deliver a detailed modernization blueprint.
            </p>
            <div className="flex justify-center flex-wrap gap-4 pt-2">
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 hover:scale-[1.02] shadow-lg transition-all duration-300"
              >
                Book Consulting Call
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                Meet the Mentos Team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
