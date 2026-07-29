import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    practice: "D365 FinOps",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mvzeqekv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          company: "",
          practice: "D365 FinOps",
          message: "",
        });
      } else {
        alert("Unable to send your request. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full pt-36 pb-24 max-w-5xl mx-auto px-6 md:px-8 space-y-16 text-slate-700">

      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-55 border border-blue-150/50 text-xs font-bold text-blue-655 shadow-sm"
        >
          <span>Contact with us</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight"
        >
          Schedule Consultation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed font-medium"
        >
          Submit your requirements below and our lead solution architects will contact you within one business day.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-8 text-left space-y-8 shadow-sm">

          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold font-heading text-blue-600">
              Office Directory
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Have questions regarding Dynamics 365, Business Central,
              Power Platform, AI, integrations or digital transformation?
              We'd love to hear from you.
            </p>
          </div>

          <div className="space-y-7">

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-500/10 flex items-center justify-center shadow-sm shrink-0">
                <MapPin className="h-5 w-5 text-blue-600"/>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Office Address
                </h4>
                <p className="text-sm text-slate-500 font-medium">Orbit Plaza</p>
                <p className="text-sm text-slate-500 font-medium">Crossing Republik, Ghaziabad</p>
                <p className="text-sm text-slate-500 font-medium">Uttar Pradesh 201016, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-500/10 flex items-center justify-center shadow-sm shrink-0">
                <Phone className="h-5 w-5 text-blue-600"/>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Dedicated Support
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  +91 78930 17765
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-500/10 flex items-center justify-center shadow-sm shrink-0">
                <Mail className="h-5 w-5 text-blue-600"/>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">
                  Consultation Enquiries
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  info@dynamicsmento.com
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm">

          {submitted ? (

            <div className="flex flex-col items-center justify-center text-center py-10">

              <div className="h-20 w-20 rounded-full bg-emerald-50 border border-emerald-500/10 flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle className="h-10 w-10 text-emerald-600" />
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4">
                Thank You!
              </h3>

              <p className="text-slate-500 leading-relaxed font-medium max-w-md">
                Your consultation request has been submitted successfully.
                <br /><br />
                Our solutions team has received your enquiry and will get back to you within
                <strong> 1 business day.</strong>
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Submit Another Request
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {[
                  ["name","Full Name","e.g. John Doe"],
                  ["email","Email Address","john@company.com"],
                  ["company","Company Name","e.g. Microsoft"],
                ].map(([id,label,placeholder])=>(
                  <div key={id} className="space-y-2">

                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      {label}
                    </label>

                    <input
                      type={id==="email"?"email":"text"}
                      required
                      value={formData[id]}
                      onChange={(e)=>setFormData({...formData,[id]:e.target.value})}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />

                  </div>
                ))}

                <div className="space-y-2">

                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Practice Of Interest
                  </label>

                  <select
                    value={formData.practice}
                    onChange={(e)=>setFormData({...formData,practice:e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  >
                    <option>D365 FinOps</option>
                    <option>D365 CRM</option>
                    <option>Business Central</option>
                    <option>Copilot & AI Solutions</option>
                    <option>Finance Transformation</option>
                    <option>Power Platform</option>
                  </select>

                </div>

              </div>

              <div className="space-y-2">

                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Project Overview
                </label>

                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e)=>setFormData({...formData,message:e.target.value})}
                  placeholder="Tell us about your project, business goals or technical requirements..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none resize-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-6 py-3.5 text-white font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Send className="h-4 w-4"/>
                  </>
                )}
              </button>

            </form>

          )}

        </div>

      </div>

    </div>

  );
}