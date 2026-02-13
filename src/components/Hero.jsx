import React from 'react';
// 1. Image ko pehle import karein
import AwardImage from "../assets/images/award-ceremony.jpg";

function Hero() {
  return (
    <section id='home' className="relative h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center">
      
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">Advanced Clinical Laboratory</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Healthcare <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300">
                  Driven by Data.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
                Experience the next generation of diagnostic precision. We combine AI-driven analysis with expert pathology for results you can trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>window.open("https://forms.gle/nkR4xNYjepBdxN1g7")} className="group relative overflow-hidden bg-blue-600 px-8 py-4 rounded-xl font-bold transition-all hover:bg-blue-500 active:scale-95 shadow-2xl shadow-blue-500/20">
                <span className="relative z-10">Schedule Appointment</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button onClick={()=>window.open("https://forms.gle/wrfaiM4D1JQsbpmV9")} className="px-8 py-4 rounded-xl font-bold border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <span>Our Test Menu</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800/60 max-w-md">
              <div>
                <span className="block text-2xl font-bold">150+</span>
                <span className="text-xs text-slate-500 uppercase tracking-tighter">Specialized Tests</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">12h</span>
                <span className="text-xs text-slate-500 uppercase tracking-tighter">Express Result</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">5.0</span>
                <span className="text-xs text-slate-500 uppercase tracking-tighter">Patient Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="hidden lg:block relative h-full">
            <div className="relative z-10 w-full h-[600px] rounded-[40px] overflow-hidden border border-slate-800 shadow-2xl">
              {/* 2. src mein variable use karein */}
              <img
                src={AwardImage} 
                alt="Maha Luxmi Lab Award Ceremony"
                className="w-full h-full object-cover object-center brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
            </div>

            <div className="absolute -top-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <p className="text-4xl font-black italic">25+</p>
               <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Years Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
}

export default Hero;
