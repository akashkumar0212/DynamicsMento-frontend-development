import React from "react";
import { ArrowRight, BarChart3, Cloud, HelpCircle } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "D365 Finance & Operations Enhancement Program",
      client: "Canon Medical Systems ANZ",
      metric: "52% reduction in warehouse routing latency",
      tag: "ERP & FinOps",
      icon: BarChart3,
      report: "\public\\reports\\Canon_Medical_ANZ_D365FO_Case_Study.pdf"
    },
    {
      title: "Enterprise Dynamics 365 Transformation",
      client: "GEMS Education",
      metric: "94% accuracy in compliance verification audits",
      tag: "ERP & FinOps",
      icon: HelpCircle,
      report: "\public\\reports\\GEMS_Education_D365_Case_Study.pdf"
    },
    // {
    //   title: "Legacy Datacenter Lift-and-Shift to Microsoft Azure",
    //   client: "MedNet Systems Group",
    //   metric: "$2.4M saved annually in infrastructure costs",
    //   tag: "Cloud Transformation",
    //   icon: Cloud
    //   report: "/reports/canon-report.pdf"
    // }
  ];

  return (
    <div className="w-full pt-32 pb-20 space-y-16 max-w-5xl mx-auto px-6 md:px-8">
      
      {/* Title */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-xs font-bold uppercase text-primary tracking-wider">Client Outcomes</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading">
          Case Studies
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          See how our enterprise mentoring approach creates resilient systems and quantifiable financial gains.
        </p>
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((study, idx) => {
          const Icon = study.icon;
          return (
            <div 
              key={idx} 
              className="glass-card rounded-3xl p-6 border flex flex-col justify-between space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4 text-left">
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {study.tag}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white leading-snug">
                  {study.title}
                </h3>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-muted-foreground/60">Client</div>
                  <div className="text-sm font-bold">{study.client}</div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/5 text-left">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {study.metric}
                </div>
                <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-900 dark:text-white cursor-pointer hover:text-primary transition-colors">
                  {/* <span>Read Full Report</span> */}
                  <a
                      href={study.report}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Read Full Report</span>
                  </a>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
