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
    <div className="w-full pt-32 pb-20 max-w-5xl mx-auto px-6 md:px-8 space-y-16">

        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-xs font-semibold text-blue-650 dark:text-blue-400"
          >
            <span>Contact with us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-905 dark:text-white tracking-tight font-heading leading-tight"
          >
            Schedule
            <span className="text-gradient"> Consultation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            Submit your requirements below and our lead solution architects will contact you within one business day.
          </motion.p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-5 rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 text-left space-y-8">

          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-blue-600">
              Office Directory
            </h3>

            <p className="text-sm text-muted-foreground leading-7">
              Have questions regarding Dynamics 365, Business Central,
              Power Platform, AI, integrations or digital transformation?
              We'd love to hear from you.
            </p>
          </div>

          <div className="space-y-7">

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-blue-55 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600"/>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Office Address
                </h4>

                <p className="text-sm text-muted-foreground">Orbit Plaza</p>
                <p className="text-sm text-muted-foreground">Crossing Republik, Ghaziabad</p>
                <p className="text-sm text-muted-foreground">Uttar Pradesh 201016, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-blue-55 flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600"/>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Dedicated Support
                </h4>

                <p className="text-sm text-muted-foreground">
                  +91 78930 17765
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-blue-55 flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600"/>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Consultation Enquiries
                </h4>

                <p className="text-sm text-muted-foreground">
                  info@dynamicsmento.com
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="lg:col-span-7 rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 text-left">

          {submitted ? (

            <div className="flex flex-col items-center justify-center text-center py-10">

              <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Thank You!
              </h3>

              <p className="text-muted-foreground leading-7 max-w-md">
                Your consultation request has been submitted successfully.
                <br /><br />
                Our solutions team has received your enquiry and will get back to you within
                <strong> 1 business day.</strong>
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
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

        <label className="text-xs font-semibold uppercase tracking-wider text-blue-500">
          {label}
        </label>

        <input
          type={id==="email"?"email":"text"}
          required
          value={formData[id]}
          onChange={(e)=>setFormData({...formData,[id]:e.target.value})}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

      </div>
    ))}

    <div className="space-y-2">

      <label className="text-xs font-semibold uppercase tracking-wider text-blue-500">
        Practice Of Interest
      </label>

      <select
        value={formData.practice}
        onChange={(e)=>setFormData({...formData,practice:e.target.value})}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

    <label className="text-xs font-semibold uppercase tracking-wider text-blue-500">
      Project Overview
    </label>

    <textarea
      required
      rows={5}
      value={formData.message}
      onChange={(e)=>setFormData({...formData,message:e.target.value})}
      placeholder="Tell us about your project, business goals or technical requirements..."
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none resize-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />

  </div>

  <button
    type="submit"
    disabled={loading}
    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {loading ? (
      <>
        <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
        Submitting...
      </>
    ) : (
      <>
        Submit Request
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