import React,{useState} from "react";
import {Mail,Phone,MapPin,Send} from "lucide-react";

export default function Contact(){
  const [formData,setFormData]=useState({name:"",email:"",company:"",practice:"ai",message:""});

  const handleSubmit=(e)=>{
    e.preventDefault();
  };

  return(
    <div className="w-full pt-32 pb-20 space-y-16 max-w-5xl mx-auto px-6 md:px-8">

      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-xs font-bold uppercase text-blue-400 tracking-wider">Connect With Us</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-blue-500">
          Schedule Consultation
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Submit your requirements below and our lead solutions architects will connect within 1 business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-5 bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border space-y-8 text-left">

          <div className="space-y-5">
            <h3 className="font-heading font-extrabold text-xl text-blue-500">
              Office Directory
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Have questions about integrations, security configurations, or legacy software? We are here to assist.
            </p>
          </div>


          <div className="space-y-6 text-sm text-foreground">

            <div className="flex items-start space-x-3.5">
              <MapPin className="h-5 w-5 text-blue-500 shrink-0"/>
              <div>
                <div className="font-bold">Orbit Plaza</div>
                <div className="text-muted-foreground">Crossing Republik, Ghaziabad</div>
                <div className="text-muted-foreground">UP 201016, India</div>
              </div>
            </div>


            <div className="flex items-center space-x-3.5">
              <Phone className="h-5 w-5 text-blue-500 shrink-0"/>
              <div>
                <div className="font-bold">Dedicated Support</div>
                <div className="text-muted-foreground">+91 (78930 17765)</div>
              </div>
            </div>


            <div className="flex items-center space-x-3.5">
              <Mail className="h-5 w-5 text-blue-500 shrink-0"/>
              <div>
                <div className="font-bold">Consultation Enquiries</div>
                <div className="text-muted-foreground">info@dynamicsmento.com</div>
              </div>
            </div>

          </div>
        </div>


        <div className="lg:col-span-7 bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-border text-left">

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {[
                ["name","Full Name","e.g. John Doe"],
                ["email","Email Address","john@company.com"],
                ["company","Company Name","e.g. Acme Corp"]
              ].map(([id,label,placeholder])=>(
                <div className="space-y-2" key={id}>

                  <label className="text-xs font-bold uppercase text-blue-400">
                    {label}
                  </label>

                  <input
                    value={formData[id]}
                    onChange={e=>setFormData({...formData,[id]:e.target.value})}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />

                </div>
              ))}


              <div className="space-y-2">

                <label className="text-xs font-bold uppercase text-blue-400">
                  Practice Of Interest
                </label>

                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:border-blue-500 outline-none">

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

              <label className="text-xs font-bold uppercase text-blue-400">
                Project Overview
              </label>

              <textarea
                rows="4"
                placeholder="Describe your requirements..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
              />

            </div>


            <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-[1.01] transition-all">

              Submit Request
              <Send className="h-4 w-4"/>

            </button>


          </form>

        </div>

      </div>

    </div>
  );
}