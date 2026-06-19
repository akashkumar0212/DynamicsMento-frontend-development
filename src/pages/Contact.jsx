import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    practice: "ai",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="w-full pt-32 pb-20 space-y-16 max-w-5xl mx-auto px-6 md:px-8">
      
      {/* Title */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-xs font-bold uppercase text-primary tracking-wider">Connect With Us</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading">
          Schedule Consultation
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Submit your requirements below and our lead solutions architects will connect within 1 business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Contact Info Card */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-8 border space-y-8 flex flex-col justify-between text-left">
          <div className="space-y-6">
            <h3 className="font-heading font-extrabold text-xl">Office Directory</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have questions about integrations, security configurations, or legacy software? We are here to assist.
            </p>
          </div>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="flex items-start space-x-3.5">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-foreground">Orbit Plaza</div>
                <div>Crossing Republik, Ghaziabad</div>
                <div>UP 201016, India</div>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="font-bold text-foreground">Dedicated Support</div>
                <div>+91 (78930 17765)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="font-bold text-foreground">Consultation Enquiries</div>
                <div>info@dynamicsmento.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 border text-left">
          {formSubmitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
              <div className="h-16 w-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-bold text-2xl">Consultation Request Logged</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Thank you, {formData.name}. Our solutions practice leads have received your request and will contact you shortly.
              </p>
              <button 
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: "", email: "", company: "", practice: "ai", message: "" });
                }}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-semibold transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-bold text-muted-foreground uppercase">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="practice" className="text-xs font-bold text-muted-foreground uppercase">Practice of Interest</label>
                  <select 
                    id="practice" 
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                  >
                    <option value="d365-crm">D365 CRM</option>
                    <option value="d365-finops">D365 FinOps</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="sap">SAP Solutions</option>
                    <option value="ai">AI Solutions</option>
                    <option value="cloud">Cloud Transformation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase">Project Overview</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your architecture requirements, timeline, or current bottlenecks..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
              >
                <span>Submit Request</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
