import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Manpreet <span className="text-blue-500">Verma</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing world-class diagnostic and pathology services. 
              Our commitment to accuracy and patient care is at the heart of everything we do.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Home', 'About Us', 'Tests', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Blood Analysis', 'Thyroid Profile', 'Full Body Checkup', 'Home Collection', 'MRI Scanning'].map((service) => (
                <li key={service} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 text-slate-400">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Sector 17-C, City Centre,<br />Chandigarh, India</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span className="font-medium text-white">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>care@labcenter.com</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Clock size={18} className="text-blue-500 shrink-0" />
                <span>Mon – Sat: 7AM – 9PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 tracking-wide">
            © {currentYear} Manpreet Verma Diagnostic Center. ISO 9001:2015 Certified.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;