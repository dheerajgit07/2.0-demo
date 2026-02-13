import React from 'react';

function Tests() {
  const popularTests = [
    {
      name: "Complete Blood Count",
      details: "CBC, Sugar (PP/F), and Cholesterol",
      price: "₹499",
      tag: "Best Seller"
    },
    {
      name: "Digital Radiography",
      details: "High-definition X-Ray with rapid reporting",
      price: "₹799",
      tag: "Fast Track"
    },
    {
      name: "Advanced MRI",
      details: "High-Tesla 3D internal scanning technology",
      price: "₹2,499",
      tag: "Precision"
    }
  ];

  return (
    <section
      id="tests"
      className="relative min-h-screen bg-slate-950 text-white flex items-center py-24 overflow-hidden border-t border-slate-900"
    >

      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">

          <div className="space-y-4">

            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              Available Tests
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Popular{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Diagnostics
              </span>
            </h2>

            <p className="text-slate-400 max-w-lg">
              Transparent pricing. No hidden costs. Choose from our most requested laboratory screenings.
            </p>

          </div>

          <button className="text-sm font-semibold text-blue-400 hover:text-white transition-colors underline decoration-blue-500/40 underline-offset-8">
            View All 200+ Tests
          </button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {popularTests.map((test, index) => (

            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >

              {/* Tag */}
              <div className="flex justify-between items-start mb-6">

                <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {test.tag}
                </span>

              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                {test.name}
              </h3>

              {/* Details */}
              <p className="text-slate-400 text-sm mb-8 line-clamp-2">
                {test.details}
              </p>

              {/* Price + Available */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">

                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase">
                    Starting at
                  </span>
                  <span className="text-2xl font-black text-white">
                    {test.price}
                  </span>
                </div>

                {/* Disabled Button */}
                <button
                  disabled
                  className="bg-green-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm cursor-not-allowed opacity-80"
                >
                  Available
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Home Collection */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-slate-900 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

            </div>

            <div>
              <h4 className="font-bold">Safe Home Sample Collection</h4>
              <p className="text-sm text-slate-400">
                Professional phlebotomists at your doorstep.
              </p>
            </div>

          </div>

          <button className="text-sm font-bold text-blue-400 hover:text-blue-300">
            
          </button>

        </div>

      </div>
    </section>
  );
}

export default Tests;
