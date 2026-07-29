import React from "react";
import { Users, Shield, Target, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function About() {
  return (
    <div className="w-full pt-36 pb-24 space-y-24 max-w-5xl mx-auto px-6 md:px-8 bg-transparent text-slate-700">

      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-150/50 text-xs font-bold text-blue-600 shadow-sm"
        >
          <span>About Our Firm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight"
        >
          Strategic System Mentors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed font-medium"
        >
          We bridge the gap between complex enterprise technologies and clean operational execution.
        </motion.p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Users, title: "Expertise First", text: "Every mentor brings decades of real-world integration experience." },
          { icon: Shield, title: "Zero Trust Security", text: "Enterprise data privacy and protection is embedded in all solutions." },
          { icon: Target, title: "Outcome Driven", text: "We define precise metrics before starting execution to ensure success." }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl p-8 border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 text-left"
            >
              <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-500/10 text-blue-600 flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5"/>
              </div>

              <h3 className="font-heading font-extrabold text-lg text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-extrabold font-heading text-slate-900">
            Our Consulting Model
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Unlike traditional consulting agencies, our experts act as collaborative mentors. We don't just hand over reports; we build side-by-side with your internal engineering teams to build operational capacity.
          </p>

          <ul className="space-y-3.5 text-sm text-slate-550 font-semibold">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0"/>
              <span>Full knowledge-transfer on all solutions</span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0"/>
              <span>Modular pipelines allowing agile changes</span>
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0"/>
              <span>Long-term roadmap planning post-migration</span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl p-10 border border-blue-500/10 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 shadow-sm flex flex-col justify-center text-center space-y-4 min-h-[250px] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          
          <div className="text-5xl font-black text-blue-600 font-heading tracking-tight">
            22+ Years
          </div>

          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Architecting Corporate Success
          </div>
        </div>
      </section>

    </div>
  );
}