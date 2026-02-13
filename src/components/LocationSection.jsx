import React from "react";
import LabImage from "/Users/apple/Desktop/Lab/my-project/src/assets/images/WhatsApp Image 2026-01-28 at 21.56.48.jpeg"; // ✅ Apni image ka sahi path yahan rakho

function LocationSection() {
  return (
    <section
      id="location"
      className="relative bg-slate-950 text-white py-24 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 space-y-4">

          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Our Location
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            Visit Our <span className="text-blue-400">Laboratory</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto">
            See our facility and get accurate directions through Google Maps.
          </p>

        </div>


        {/* IMAGE + MAP GRID */}
        <div className="grid md:grid-cols-3 gap-8 items-center">


          {/* LEFT → IMAGE CARD (Small) */}
          <div className="md:col-span-1 w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">

            <img
              src={LabImage}
              alt="Maha Luxmi Clinical Laboratory"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

          </div>


          {/* RIGHT → MAP CARD (Big) */}
          <div className="md:col-span-2 w-full h-[450px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">

            <iframe
              title="Lab Location"
              src="https://www.google.com/maps?q=Maha+Luxmi+Clinical+Laboratory+Nilokheri&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>


        </div>

      </div>
    </section>
  );
}

export default LocationSection;
