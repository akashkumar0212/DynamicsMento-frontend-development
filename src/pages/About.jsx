import React from "react";
import { Users, Shield, Target, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="w-full pt-32 pb-20 space-y-24 max-w-5xl mx-auto px-6 md:px-8">

      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-xs font-bold uppercase text-blue-400 tracking-wider">
          About Our Firm
        </h1>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-blue-500">
          Strategic System Mentors
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          We bridge the gap between complex enterprise technologies and clean operational execution.
        </p>
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
              className="rounded-2xl p-6 border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all space-y-4 text-left"
            >

              <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Icon className="h-5 w-5"/>
              </div>


              <h3 className="font-heading font-bold text-lg text-blue-500">
                {item.title}
              </h3>


              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>

            </div>
          );

        })}

      </section>



      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        <div className="space-y-6 text-left">


          <h3 className="text-2xl font-extrabold font-heading text-foreground">
            Our Consulting Model
          </h3>


          <p className="text-sm text-muted-foreground leading-relaxed">
            Unlike traditional consulting agencies, our experts act as collaborative mentors. We don't just hand over reports; we build side-by-side with your internal engineering teams to build operational capacity.
          </p>



          <ul className="space-y-3.5 text-sm text-muted-foreground">

            <li className="flex items-center gap-2.5">
              <CheckCircle className="h-5 w-5 text-green-500"/>
              Full knowledge-transfer on all solutions
            </li>


            <li className="flex items-center gap-2.5">
              <CheckCircle className="h-5 w-5 text-green-500"/>
              Modular pipelines allowing agile changes
            </li>


            <li className="flex items-center gap-2.5">
              <CheckCircle className="h-5 w-5 text-green-500"/>
              Long-term roadmap planning post-migration
            </li>

          </ul>


        </div>



        <div className="rounded-3xl p-8 border bg-card text-card-foreground shadow-sm flex flex-col justify-center text-center space-y-4 min-h-[250px]">


          <div className="text-4xl font-extrabold text-blue-500">
            22+ Years
          </div>


          <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Architecting Corporate Success
          </div>


        </div>


      </section>

    </div>
  );
}