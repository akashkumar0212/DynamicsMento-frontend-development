import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Cloud, Database, BarChart3, Compass, HelpCircle, CheckCircle2, ChevronRight } from "lucide-react";

const solutionData = {
  "d365-crm": {
    name: "D365 CRM",
    title: "Dynamics 365 Customer Relationship Management",
    icon: HelpCircle,
    desc: "Align your marketing, sales, and support operations under a single, unified data model. Power deep client interactions and drive automation.",
    features: [
      "Omnichannel Sales Automation pipelines",
      "Unified Customer Service dashboard frameworks",
      "Real-time analytics and predictive scoring models",
      "Custom integration with power platform tools",
      "Mobile access with offline sync capabilities"
    ]
  },
  "d365-finops": {
    name: "D365 FinOps",
    title: "Dynamics 365 Finance & Operations",
    icon: BarChart3,
    desc: "Unify financial analytics, automate supply chain processes, and digitize enterprise resource workflows.",
    features: [
      "Real-time general ledger financial consolidation",
      "Automated procurement and inventory tracking",
      "Global asset management dashboards",
      "Intelligent warehouse routing management",
      "Cross-border fiscal regulation automation models"
    ]
  },
  "erp": {
    name: "ERP Solutions",
    title: "Enterprise Resource Planning Modernization",
    icon: Database,
    desc: "Consolidate accounting, manufacturing, human resources, and supply chains into a single high-performance ERP system.",
    features: [
      "Tailored custom system modules and integrations",
      "Robust data synchronization across databases",
      "Automated regulatory compliance reporting",
      "Advanced workflow management pipelines",
      "Scalable database clustering and performance tuning"
    ]
  },
  "sap": {
    name: "SAP Solutions",
    title: "SAP Strategy & S/4HANA Transformation",
    icon: Compass,
    desc: "Optimize your SAP landscapes. Transition securely to S/4HANA, configure hybrid architectures, and scale operations.",
    features: [
      "SAP S/4HANA migration blueprinting & execution",
      "Custom ABAP application optimization & refactoring",
      "Cloud platform integration (BTP, Azure, AWS)",
      "System landscape consolidation and cleanup",
      "SAP Fiori custom user experience design"
    ]
  },
  "ai": {
    name: "AI Solutions",
    title: "Next-Gen Artificial Intelligence & Automation",
    icon: Cpu,
    desc: "Deploy intelligent automation. Build LLMs, fine-tune models, and configure generative pipelines within secure boundaries.",
    features: [
      "Custom LLM fine-tuning for domain knowledge bases",
      "Intelligent workflow automation and agentic systems",
      "Real-time predictive anomaly detection models",
      "Computer vision systems for quality audit inspections",
      "Secure hosting and vector database integration"
    ]
  },
  "cloud": {
    name: "Cloud Transformation",
    title: "Enterprise Cloud Infrastructure & Migration",
    icon: Cloud,
    desc: "Accelerate your cloud journey. Re-platform legacy systems to resilient, auto-scaling cloud environments.",
    features: [
      "Multi-cloud architectures (AWS, Azure, GCP)",
      "Zero-downtime database and system migrations",
      "Serverless scaling infrastructure configuration",
      "DevSecOps automation pipelines and monitoring",
      "Cost optimization audits and architectural refactoring"
    ]
  }
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutionData[slug];

  if (!solution) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center space-y-6">
        <h2 className="text-3xl font-bold">Solution Practice Not Found</h2>
        <p className="text-muted-foreground">The requested consulting practice area does not exist.</p>
        <Link to="/" className="inline-flex items-center space-x-2 text-primary font-bold">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="w-full pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-8 space-y-16">
      
      {/* Back link */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Solutions</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Solution Head */}
        <div className="lg:col-span-7 space-y-6">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            {solution.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {solution.desc}
          </p>
        </div>

        {/* Feature List Card */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-8 border">
          <h3 className="font-heading font-bold text-lg mb-6 text-slate-900 dark:text-white">Core Capabilities</h3>
          <ul className="space-y-4">
            {solution.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-normal">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-slate-50 dark:bg-[#070b15] border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
        <div className="space-y-2 text-left">
          <h4 className="font-heading font-bold text-xl">Need consultation on {solution.name}?</h4>
          <p className="text-sm text-muted-foreground max-w-md">
            Connect with our lead systems architects to review specifications, timelines, and budgets.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:scale-[1.02] shadow-md transition-all duration-300 shrink-0"
        >
          Speak with a Mentor
        </Link>
      </div>

    </div>
  );
}
