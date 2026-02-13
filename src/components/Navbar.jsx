import { useState, useEffect } from "react";
import { FlaskConical, Menu, X, ArrowRight, User } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Tests", "About", "Contact","location","blog"];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-lg shadow-blue-500/20">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tighter text-white">
              MANPREET <span className="text-blue-400">VERMA</span>
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-[9px] tracking-[0.2em] uppercase font-black text-slate-400">
                Diagnostic Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item} className="relative group overflow-hidden">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-300 hover:text-white transition-colors block py-2"
              >
                {item}
              </a>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300" />
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mr-4">
            <User size={16} className="text-blue-500" />
            Portal
          </button> */}
          
          <button onClick={()=>window.open("https://forms.gle/TtitS1dqkfRU9RoZA")} className="group relative px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
            <div className="relative flex items-center gap-2 text-white">
              Add Details
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-8 space-y-6 bg-gradient-to-b from-slate-950 to-slate-900">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-6 border-t border-slate-800">
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3">
              Patient Portal Login
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;