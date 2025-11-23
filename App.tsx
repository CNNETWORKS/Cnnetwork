import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Moon, Sun, ExternalLink, Shield, Cloud, Share2, 
  AlertTriangle, Terminal, Ghost, Send, Globe, Lock, Zap
} from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import { GlassCard } from './components/GlassCard';
import { PROVIDERS, STORY_STEPS, GLOSSARY } from './constants';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <div ref={scrollRef} className={`min-h-screen font-sans transition-colors duration-500 ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* 3D Background (Only visible in dark mode for best effect) */}
      {theme === Theme.DARK && <ThreeBackground />}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-cyber text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                CNNETWORK
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#learn" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Learn</a>
                <a href="#story" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Evolution</a>
                <a href="#cdn" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Providers</a>
                <a href="#report" className="hover:text-neon-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Report</a>
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2">
                {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#learn" className="block px-3 py-2 rounded-md text-base font-medium hover:text-neon-cyan">Learn</a>
              <a href="#story" className="block px-3 py-2 rounded-md text-base font-medium hover:text-neon-cyan">Evolution</a>
              <a href="#cdn" className="block px-3 py-2 rounded-md text-base font-medium hover:text-neon-cyan">Providers</a>
              <a href="#report" className="block px-3 py-2 rounded-md text-base font-medium hover:text-neon-cyan">Report</a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative max-w-5xl mx-auto px-4 mb-24 perspective-1000">
          <motion.div style={{ y: yHero }}>
            <a href="https://t.me/wasemotion" target="_blank" rel="noreferrer" className="block group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[2/1] border border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.2)]">
                {/* Inner 3D Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
                
                {/* Animated Grid Floor */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(200px)_scale(3)] animate-[pulse_4s_infinite]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="text-4xl md:text-7xl font-cyber font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] mb-4">
                      TUNNEL EMOTIONS
                    </h1>
                    <p className="text-neon-purple font-tech text-xl md:text-2xl tracking-[0.2em] uppercase mb-8 animate-pulse">
                      Return to the Source
                    </p>
                  </motion.div>
                  
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-400 group-hover:text-white transition-colors">
                    <ExternalLink size={16} />
                    <span>Click to Enter the Gateway</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </section>

        {/* COMMUNITY CARDS */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://t.me/cnnetworkofficial" target="_blank" rel="noreferrer">
              <GlassCard className="h-full flex flex-col items-center text-center group hover:border-neon-cyan/50">
                <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4 text-neon-cyan group-hover:scale-110 transition-transform">
                  <Globe size={32} />
                </div>
                <h3 className="font-cyber text-xl mb-2 text-white">CN Network</h3>
                <p className="text-gray-400 text-sm">The Official Community</p>
              </GlassCard>
            </a>

            <a href="https://t.me/jioxt" target="_blank" rel="noreferrer">
              <GlassCard className="h-full flex flex-col items-center text-center group hover:border-neon-pink/50">
                <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4 text-neon-pink group-hover:scale-110 transition-transform">
                  <Zap size={32} />
                </div>
                <h3 className="font-cyber text-xl mb-2 text-white">Owner (jioxt)</h3>
                <p className="text-gray-400 text-sm">Visionary & Lead</p>
              </GlassCard>
            </a>

            <a href="https://t.me/iitmc" target="_blank" rel="noreferrer">
              <GlassCard className="h-full flex flex-col items-center text-center group hover:border-neon-green/50">
                <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-4 text-neon-green group-hover:scale-110 transition-transform">
                  <Share2 size={32} />
                </div>
                <h3 className="font-cyber text-xl mb-2 text-white">Friends (IITMC)</h3>
                <p className="text-gray-400 text-sm">Allies & Partners</p>
              </GlassCard>
            </a>
          </div>
        </section>

        {/* WHAT IS CNNETWORK */}
        <section id="learn" className="max-w-7xl mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-cyber font-bold mb-4">What is <span className="text-neon-cyan">CNNETWORK</span>?</h2>
            <p className="max-w-2xl mx-auto text-gray-400">A global learning hub about CDNs, clouds, routing, security awareness, and the deep history of internet culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <Cloud className="w-12 h-12 text-neon-cyan mb-4" />
              <h3 className="text-2xl font-bold mb-2">Learn</h3>
              <p className="text-gray-400">Master the concepts of Content Delivery Networks, Cloud Computing, and advanced Routing protocols.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <Share2 className="w-12 h-12 text-neon-pink mb-4" />
              <h3 className="text-2xl font-bold mb-2">Share</h3>
              <p className="text-gray-400">A community driven by knowledge exchange. Guides, tutorials, and collaborative problem solving.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <Shield className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-2xl font-bold mb-2">Protect</h3>
              <p className="text-gray-400">Understanding security awareness, privacy concepts, and how to navigate the digital world safely.</p>
            </div>
          </div>
        </section>

        {/* EMOTIONAL STORY */}
        <section id="story" className="relative max-w-4xl mx-auto px-4 mb-32">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-cyber font-bold text-white mb-2">The Free Internet Era</h2>
            <p className="text-neon-cyan font-tech tracking-widest uppercase">A Lost Chapter of History</p>
          </div>

          <div className="space-y-16">
            {STORY_STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 md:text-right hidden md:block" />
                
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-neon-cyan flex items-center justify-center z-20 shadow-[0_0_15px_theme('colors.cyan.500')]">
                  <span className="text-xs font-bold">{step.id}</span>
                </div>

                <div className="flex-1 pl-12 md:pl-0">
                  <GlassCard className={`p-8 ${step.icon === 'warn' ? 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      {step.icon === 'warn' && <AlertTriangle className="text-red-500" />}
                      <h3 className={`text-2xl font-bold ${step.icon === 'warn' ? 'text-red-400' : 'text-white'}`}>{step.title}</h3>
                    </div>
                    {step.highlight && (
                      <p className="text-red-400 font-bold mb-4 uppercase tracking-widest text-sm">{step.highlight}</p>
                    )}
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      {step.content.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRIVACY & LEGAL */}
        <section className="max-w-5xl mx-auto px-4 mb-24">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-center gap-6 mb-8">
                <Lock className="w-10 h-10 text-neon-cyan" />
                <Terminal className="w-10 h-10 text-neon-purple" />
              </div>
              <h2 className="text-3xl font-cyber mb-6">Privacy & Concepts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['VPN', 'SNI', 'SSH', 'WebSockets'].map(term => (
                  <div key={term} className="bg-black/40 p-4 rounded-lg border border-white/5 font-tech text-lg text-neon-cyan">
                    {term}
                  </div>
                ))}
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 max-w-2xl mx-auto">
                <p className="text-red-200 text-sm font-semibold">
                  LEGAL NOTICE: CNNETWORK teaches networking concepts for educational and legal use only. We do NOT support bypassing telecom systems, fraud, or any unlawful activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CDN GRID */}
        <section id="cdn" className="max-w-7xl mx-auto px-4 mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cyber font-bold mb-4">Provider <span className="text-neon-purple">Matrix</span></h2>
            <p className="text-gray-400">The backbone of the modern internet.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROVIDERS.map((provider, idx) => (
              <GlassCard key={idx} className="h-full hover:bg-white/5 group" hoverEffect={true}>
                <div className="flex flex-col h-full">
                  <div className="mb-2 text-neon-cyan font-tech text-xs uppercase tracking-wider border-b border-white/5 pb-2">
                    {provider.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">{provider.name}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{provider.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* GHOST REPORT */}
        <section id="report" className="max-w-3xl mx-auto px-4 mb-32">
          <GlassCard className="p-8 md:p-12 border-neon-purple/30 shadow-[0_0_40px_rgba(188,19,254,0.1)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-neon-purple/20">
                <Ghost className="w-8 h-8 text-neon-purple" />
              </div>
              <div>
                <h2 className="text-2xl font-cyber font-bold">Found a Bugh*st?</h2>
                <p className="text-gray-400 text-sm">Report issues on Tengine, AliyunOSS, BunnyCDN, GHS, etc.</p>
              </div>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Target Host / CDN</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors" placeholder="e.g. cdn.example.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Description</label>
                <textarea className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none transition-colors h-32" placeholder="Describe the anomaly..." />
              </div>
              <button className="w-full bg-gradient-to-r from-neon-purple to-fuchsia-600 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-shadow flex items-center justify-center gap-2">
                <Send size={18} />
                Submit Report via Encrypted Channel
              </button>
            </form>
          </GlassCard>
        </section>

        {/* TECH GLOSSARY */}
        <section className="max-w-5xl mx-auto px-4 mb-24">
          <h2 className="text-3xl font-cyber font-bold mb-8 pl-4 border-l-4 border-neon-cyan">Tech Glossary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GLOSSARY.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-neon-cyan/20 transition-colors">
                <h3 className="text-neon-cyan font-bold text-lg mb-2">{item.term}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT / CONTACT */}
        <section className="max-w-4xl mx-auto px-4 mb-24 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-cyber font-bold mb-4">About Us</h2>
            <p className="text-gray-400">We are a collective of network engineers, security researchers, and cloud enthusiasts dedicated to understanding the invisible infrastructure that powers the world.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Cloud Computing', 'DNS Management', 'Network Security', 'DevOps', 'Edge Routing'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon-cyan font-tech">
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-cyber text-xl font-bold text-white mb-2">CNNETWORK</h3>
            <p className="text-gray-500 text-sm max-w-xs">Connecting the dots between the cloud and the community.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} CNNETWORK. Educational Use Only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;