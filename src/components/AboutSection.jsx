import React, { useState } from 'react';

function AboutSection() {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 text-white flex items-center py-24 overflow-hidden"
    >

      {/* Background */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">

            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800">

              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
                alt="Medical Researcher"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md p-8 border-t border-slate-800">

                <div className="flex justify-between items-center">

                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">10k+</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Patients Served
                    </p>
                  </div>

                  <div className="h-10 w-[1px] bg-slate-800"></div>

                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">15+</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Expert MDs
                    </p>
                  </div>

                  <div className="h-10 w-[1px] bg-slate-800"></div>

                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Digital Workflow
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500/20 rounded-[2.5rem] -z-10"></div>

          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">

            {/* Header */}
            <div className="space-y-4">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                  Our Legacy
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Setting the Standard in{" "}
                <span className="text-blue-400">
                  Diagnostic Integrity.
                </span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed">
                For over a decade, we have combined medical excellence with
                compassionate care to deliver trusted diagnostic services.
              </p>

            </div>

            {/* Features */}
            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  ✅
                </div>

                <div>
                  <h4 className="text-xl font-bold">Uncompromising Quality</h4>
                  <p className="text-slate-500 text-sm">
                    Every report is verified by senior specialists.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  ⚡
                </div>

                <div>
                  <h4 className="text-xl font-bold">Advanced Technology</h4>
                  <p className="text-slate-500 text-sm">
                    AI-based systems ensure maximum accuracy.
                  </p>
                </div>

              </div>

            </div>

            {/* Button */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="bg-slate-100 text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              {showDetails ? "Hide Details" : "Explore Our Laboratory"}
            </button>

            {/* Expandable Details */}
            {showDetails && (

              <div className="mt-6 p-6 rounded-2xl border border-blue-500/30 bg-slate-900/70 text-slate-300 space-y-4 animate-fadeIn">

                <h3 className="text-xl font-bold text-blue-400">
                  Our Laboratory Facilities
                </h3>

                <p>
                  ✔ NABL Certified Laboratory  
                  ✔ Fully Automated Analyzers  
                  ✔ Separate Biochemistry, Pathology & Microbiology Units  
                  ✔ ISO Standard Hygiene Protocols  
                  ✔ Daily Quality Audits  
                  ✔ 24x7 Emergency Testing  
                </p>

                <p>
                  Our lab follows international diagnostic standards,
                  ensuring fast, accurate, and secure medical reports.
                </p>

                <p className="text-sm text-slate-400">
                  Trusted by 10,000+ patients across the region.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;
