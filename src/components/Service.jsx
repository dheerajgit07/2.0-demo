import React, { useState } from "react";

function Services() {

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Blood Analysis",
      desc: "Comprehensive hematology for detailed health insights.",
      details:
        "Includes CBC, ESR, Hemoglobin, Platelet Count, and Infection Screening. Reports within 6 hours.",
      icon: "🔬",
    },
    {
      title: "Thyroid Profile",
      desc: "Advanced hormonal screening for metabolic health.",
      details:
        "T3, T4, TSH testing with endocrinologist review. Fasting not required.",
      icon: "🦋",
    },
    {
      title: "Full Body Checkup",
      desc: "Preventative screening packages for all ages.",
      details:
        "Includes blood, urine, ECG, liver, kidney, sugar, cholesterol, and doctor consultation.",
      icon: "📋",
    },
    {
      title: "Digital X-Ray",
      desc: "High-resolution imaging with minimal radiation.",
      details:
        "Chest, spine, limbs, dental imaging with instant digital reports.",
      icon: "🦴",
    },
    {
      title: "MRI Scanning",
      desc: "Precision neuro and musculoskeletal diagnostics.",
      details:
        "1.5T MRI machine, brain, spine, joints, abdomen scan with specialist analysis.",
      icon: "🧠",
    },
    {
      title: "Home Collection",
      desc: "Professional sample collection at your doorstep.",
      details:
        "Certified phlebotomist visit between 6AM–10AM. Free for orders above ₹500.",
      icon: "🏠",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen bg-slate-950 text-white flex items-center py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">

          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Clinical Excellence
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Specialized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Diagnostic Services
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Equipped with cutting-edge technology to provide you with clinical
            precision and rapid results.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm cursor-default"
            >

              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Learn More Button */}
              <button
                onClick={() => setSelectedService(service)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 group-hover:text-blue-400 transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

            </div>

          ))}

        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Don't see what you're looking for?
            <span className="text-blue-400 cursor-pointer hover:underline ml-1">
              View our full directory of 500+ tests.
            </span>
          </p>
        </div>

      </div>

      {/* ================= MODAL ================= */}
      {selectedService && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fadeIn">

            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <div className="text-4xl mb-4">
              {selectedService.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-blue-400">
              {selectedService.title}
            </h3>

            <p className="text-slate-300 mb-4">
              {selectedService.desc}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {selectedService.details}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition"
            >
              Close
            </button>

          </div>

        </div>
      )}
      {/* ========================================== */}

    </section>
  );
}

export default Services;
