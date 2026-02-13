import React from 'react';


function ContactSection() {
      
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
      
        const adminNumber = "919813455636"; // Apna WhatsApp number
      
        // Text ko encode karo URL ke liye
        const text = encodeURIComponent(
          `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        );
      
        // WhatsApp URL (desktop/mobile dono ke liye)
        window.open(`https://wa.me/${adminNumber}?text=${text}`, "_blank");
      
        e.target.reset();
      };
      
  return (
    
    <section id='contact' className="relative min-h-screen bg-slate-950 text-white flex items-center py-24 overflow-hidden border-t border-slate-900">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch.</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Have questions about a specific test or need to schedule a home collection? Our team is available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Information (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Visit Us</h4>
                <p className="text-lg font-medium">Sector 17-C, City Centre,<br />Chandigarh, India</p>
              </div>
            </div>

            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Support</h4>
                <p className="text-lg font-medium">care@labcenter.com</p>
                <p className="text-sm text-blue-400">Response within 2 hours</p>
              </div>
            </div>

            <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Working Hours</h4>
                <p className="text-lg font-medium">Mon - Sat: 07:00 - 21:00</p>
                <p className="text-sm text-green-400 font-bold">Open Sunday: 08:00 - 14:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form (3 Columns) */}
          <div className="lg:col-span-3">
            <form   onSubmit={handleSubmit}
 className="p-8 lg:p-12 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                  name='name'
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                  name='email'
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  name='message'
                  placeholder="How can we help you?" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-500/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span> 💬 Chat on WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              
              <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest">
                Protected by 256-bit encryption
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;