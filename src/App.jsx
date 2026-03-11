import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, Activity, ShieldCheck, HardHat, Zap, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// A. NAVBAR - "The Floating Island"
// ==========================================
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-[2rem] w-[90%] max-w-7xl transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl' 
          : 'bg-transparent border border-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6 text-signal" />
        <span className="font-sans font-bold text-xl tracking-tight text-paper">Steve's Electric</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-mono hover:-translate-y-[1px] transition-transform text-paper/80 hover:text-signal">Capabilities</a>
        <a href="#philosophy" className="text-sm font-mono hover:-translate-y-[1px] transition-transform text-paper/80 hover:text-signal">Philosophy</a>
        <a href="#protocol" className="text-sm font-mono hover:-translate-y-[1px] transition-transform text-paper/80 hover:text-signal">Sectors</a>
      </div>
      <button className="relative overflow-hidden bg-signal text-white px-6 py-2.5 rounded-[2rem] font-sans font-semibold text-sm transition-transform duration-300 hover:scale-[1.03] group">
        <span className="relative z-10 flex items-center gap-2">
          Est. Dept <ChevronRight className="w-4 h-4" />
        </span>
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
      </button>
    </nav>
  );
};

// ==========================================
// B. HERO SECTION - "The Opening Shot"
// ==========================================
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hero-text', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888081608-f4b75294a648?q=80&w=2670&auto=format&fit=crop" 
          alt="Placeholder: Replace with actual site shot" 
          className="w-full h-full object-cover opacity-60 grayscale hidden"
        />
        <img 
          src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2769&auto=format&fit=crop" 
          alt="Heavy electrical infrastructure switchgear - GC target" 
          className="w-full h-full object-cover opacity-65 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 md:px-24">
        <div className="max-w-4xl">
          <h1 className="flex flex-col gap-2">
            <span className="hero-text font-sans font-bold text-4xl md:text-5xl lg:text-7xl uppercase tracking-tighter text-paper leading-none">
              Powering the
            </span>
            <span className="hero-text font-serif italic text-6xl md:text-8xl lg:text-[9rem] text-signal leading-[0.85] pr-8 block">
              Infrastructure.
            </span>
          </h1>
          <p className="hero-text mt-8 text-lg font-mono text-paper/70 max-w-xl">
            Commercial and industrial electrical projects engineered with raw precision. High quality, fair cost, zero compromise.
          </p>
          <div className="hero-text mt-10">
             <button className="relative overflow-hidden bg-paper text-dark px-8 py-4 rounded-[2rem] font-sans font-bold text-lg transition-transform duration-300 hover:scale-[1.03] group shadow-[0_0_40px_rgba(255,77,0,0.15)] hover:shadow-[0_0_60px_rgba(255,77,0,0.3)] inline-flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                Initiate Project <Activity className="w-5 h-5" />
              </span>
              <span className="absolute inset-0 bg-signal translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
              <span className="absolute inset-0 text-white flex items-center justify-center gap-2 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-sans font-bold">
                Initiate Project <Activity className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// C. FEATURES - "Interactive Functional Artifacts"
// ==========================================
const Features = () => {
  const containerRef = useRef(null);
  
  // Shuffler State
  const [shufflerCards, setShufflerCards] = useState([
    { id: 1, text: "East Coast Hubs Built", val: "45+" },
    { id: 2, text: "Midwest Grid Integrated", val: "12" },
    { id: 3, text: "West Coast Facilities", val: "28" }
  ]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );
    }, containerRef);

    const shufflerInterval = setInterval(() => {
      setShufflerCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);

    return () => {
      ctx.revert();
      clearInterval(shufflerInterval);
    };
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-mono text-signal mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-signal rounded-full"></div> SYS. CAPABILITIES</h2>
          <p className="font-serif italic text-4xl md:text-5xl max-w-2xl text-paper">Functional capacity operating at national scale.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Diagnostic Shuffler */}
          <div className="feature-card bg-obsidian border border-white/5 rounded-[2rem] p-8 min-h-[400px] flex flex-col justify-between shadow-xl overflow-hidden relative group hover:border-white/10 transition-colors">
            <div>
              <h3 className="font-sans font-bold text-2xl mb-2 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-signal" /> National Reach</h3>
              <p className="font-mono text-sm text-paper/60">Licensed and executing in over 45 states across the country.</p>
            </div>
            
            <div className="relative h-48 mt-8 perspective-[1000px]">
              {shufflerCards.map((card, i) => (
                <div 
                  key={card.id}
                  className="absolute bottom-0 w-full bg-background border border-white/10 rounded-2xl p-4 flex justify-between items-center transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    transform: `translateY(-${i * 15}px) scale(${1 - i * 0.05})`,
                    opacity: 1 - i * 0.2,
                    zIndex: 10 - i,
                  }}
                >
                  <span className="font-sans font-medium">{card.text}</span>
                  <span className="font-mono text-signal p-2 rounded-lg bg-signal/10">{card.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: High-Voltage Capabilities (Replaces Zero-Incident TRIR) */}
          <div className="feature-card bg-obsidian border border-white/5 rounded-[2rem] p-8 min-h-[400px] flex flex-col shadow-xl overflow-hidden relative group hover:border-white/10 transition-colors">
             <div>
              <h3 className="font-sans font-bold text-2xl mb-2 flex items-center gap-2"><Zap className="w-6 h-6 text-signal" /> Turnkey Design-Build</h3>
              <p className="font-mono text-sm text-paper/60">End-to-end BIM coordination, high-voltage distribution, and integrated systems engineering.</p>
            </div>

            <div className="mt-auto bg-dark p-6 rounded-2xl border border-white/5 h-48 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <svg viewBox="0 0 400 200" className="w-full h-full stroke-signal fill-none stroke-[2px]">
                     <path d="M0,100 Q40,100 50,50 T100,100 T150,150 T200,100 T250,50 T300,100 T350,150 T400,100" className="animate-[waveform_3s_linear_infinite]"></path>
                     <path d="M0,120 Q40,120 50,70 T100,120 T150,170 T200,120 T250,70 T300,120 T350,170 T400,120" className="opacity-30 animate-[waveform_4s_linear_infinite_reverse]"></path>
                  </svg>
               </div>
               
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="font-sans text-paper/40 font-bold text-xs tracking-widest uppercase mb-2">SYSTEM PARAMETERS</div>
                  <div className="bg-background/80 backdrop-blur-md border border-white/10 rounded-lg py-2 px-4 shadow-[0_0_20px_rgba(255,77,0,0.1)] inline-block">
                     <span className="font-mono text-signal font-bold text-xl tracking-tighter block leading-none">VDC / BIM / PREFAB</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler */}
          <div className="feature-card bg-obsidian border border-white/5 rounded-[2rem] p-8 min-h-[400px] flex flex-col justify-between shadow-xl overflow-hidden relative group hover:border-white/10 transition-colors">
            <div>
              <h3 className="font-sans font-bold text-2xl mb-2 flex items-center gap-2"><Activity className="w-6 h-6 text-signal" /> Execution Excellence</h3>
              <p className="font-mono text-sm text-paper/60">Predictable, fast-track delivery matrices mapped to rigorous timeframes.</p>
            </div>

            <div className="bg-dark p-4 rounded-2xl border border-white/5 mt-auto relative">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['S','M','T','W','T','F','S'].map(d => (
                  <div key={d} className="text-center font-mono text-[10px] text-paper/40">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className={`aspect-square rounded-sm ${i === 9 ? 'bg-signal animate-pulse' : 'bg-white/5 group-hover:bg-white/10 transition-colors'}`}></div>
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <MousePointer2 className="w-8 h-8 text-white drop-shadow-md translate-x-4 translate-y-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// D. PHILOSOPHY - "The Manifesto"
// ==========================================
const Philosophy = () => {
  const philRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.phil-text',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15,
          scrollTrigger: {
            trigger: philRef.current,
            start: "top 60%"
          }
        }
      );
      
      gsap.to('.parallax-bg', {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: philRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={philRef} className="relative py-40 overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888081608-f4b75294a648?q=80&w=2670&auto=format&fit=crop" 
          alt="Placeholder: Replace with actual site shot" 
          className="parallax-bg w-full h-[120%] object-cover opacity-[0.10] grayscale -top-[10%] hidden"
        />
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop" 
          alt="Technical schematic aesthetic - raw texture" 
          className="parallax-bg w-full h-[120%] object-cover opacity-[0.15] grayscale -top-[10%]"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="phil-text font-mono text-signal mb-8 tracking-widest text-sm">SYSTEM OVERRIDE INITIATED</p>
        <p className="phil-text font-sans text-xl md:text-3xl text-paper/60 mb-12">
          Most infrastructure focuses on building the expected.<br className="hidden md:block"/> Compromising on material, delaying timelines.
        </p>
        <p className="phil-text font-serif italic text-5xl md:text-7xl lg:text-8xl text-paper leading-tight">
          We focus on <span className="text-signal">execution</span><br/> that outlasts the grid.
        </p>
      </div>
    </section>
  );
};

// ==========================================
// E. PROTOCOL - "Sticky Stacking Archive" -> "Project Experience"
// ==========================================
const Protocol = () => {
  useRef(null);
  
  const projects = [
    {
      step: '01',
      title: 'Heavy Industrial',
      desc: 'Manufacturing facilities, processing plants, and heavy-duty grid infrastructure demanding exact tolerance and massive payload routing.',
      imgSrc: 'https://images.unsplash.com/photo-1574360098055-6b5cfd638ba4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      step: '02',
      title: 'Mission Critical Data',
      desc: 'Tier-4 data centers and colocation facilities where uninterrupted uptime and redundant electrical pathways are non-negotiable.',
      imgSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
    },
    {
      step: '03',
      title: 'Commercial & Corporate',
      desc: 'High-rise office buildings, massive distribution hubs, and corporate campuses requiring rapid scale and clean architectural integration.',
      imgSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <section id="protocol" className="py-20 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-mono text-signal mb-16 text-center text-sm md:text-base tracking-[0.2em] shadow-sm uppercase">PROJECT EXPERIENCE // SECTORS</h2>
        
        <div className="space-y-12 pb-32">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="sticky top-32 bg-obsidian border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between"
              style={{ top: `calc(6rem + ${i * 1.5}rem)`, zIndex: i }}
            >
              <div className="flex-1 order-2 md:order-1">
                <span className="font-mono text-signal text-5xl mb-4 block">[{p.step}]</span>
                <h3 className="font-sans font-bold text-3xl mb-4 text-paper">{p.title}</h3>
                <p className="font-mono text-paper/60 text-sm">{p.desc}</p>
              </div>
              <div className="w-full md:w-[280px] h-48 md:h-[280px] flex-shrink-0 bg-dark rounded-[1rem] overflow-hidden border border-white/5 order-1 md:order-2 relative group">
                <img 
                  src={p.imgSrc} 
                  alt={`Placeholder: Replace with actual ${p.title} job site shot`} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark/40 backdrop-blur-sm">
                   <span className="font-mono text-xs tracking-widest bg-dark px-3 py-1 rounded-sm border border-white/10 uppercase drop-shadow-lg">Placeholder Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// F. GET STARTED & FOOTER
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-dark pt-32 pb-8 rounded-t-[4rem] relative z-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center mb-32 relative z-10">
          <h2 className="font-serif italic text-6xl md:text-8xl text-paper mb-8">Ready to Build.</h2>
          <button className="relative overflow-hidden bg-signal text-white px-10 py-5 rounded-[2rem] font-sans font-bold text-xl transition-transform duration-300 hover:scale-[1.03] group shadow-[0_0_40px_rgba(255,77,0,0.15)] hover:shadow-[0_0_60px_rgba(255,77,0,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Contact Estimation Dept <ChevronRight className="w-6 h-6" />
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-white/5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-signal" />
              <span className="font-sans font-bold text-2xl tracking-tight text-paper">Steve's Electric</span>
            </div>
            <p className="font-mono text-sm text-paper/50 max-w-xs">Excellence in the infrastructure that powers America.</p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-paper mb-4 uppercase text-sm tracking-wider">Navigation</h4>
            <ul className="space-y-2 font-mono text-sm text-paper/50">
              <li><a href="#features" className="hover:text-signal transition-colors">Capabilities</a></li>
              <li><a href="#philosophy" className="hover:text-signal transition-colors">Philosophy</a></li>
              <li><a href="#protocol" className="hover:text-signal transition-colors">Sectors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-paper mb-4 uppercase text-sm tracking-wider">Status</h4>
            <div className="bg-obsidian border border-white/5 rounded-xl p-4 inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-[#00FF66] rounded-full animate-pulse shadow-[0_0_10px_#00FF66]"></span>
              <span className="font-mono text-xs text-paper/70 tracking-widest leading-none">SYSTEM<br/>OPERATIONAL</span>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-paper/40 gap-4">
          <p>&copy; {new Date().getFullYear()} Steve's Electric. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-paper transition-colors">Privacy</a>
             <a href="#" className="hover:text-paper transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
function App() {
  return (
    <main className="bg-background selection:bg-signal selection:text-white relative">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Footer />
    </main>
  );
}

export default App;
