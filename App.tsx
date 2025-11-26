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
    <div
      ref={scrollRef}
      className={`min-h-screen font-sans transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >

      {/* 3D Background */}
      {theme === Theme.DARK && <ThreeBackground />}

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-cyber text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                CNNETWORK
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#learn" className="hover:text-neon-cyan px-3 py-2">Learn</a>
                <a href="#story" className="hover:text-neon-cyan px-3 py-2">Evolution</a>
                <a href="#cdn" className="hover:text-neon-cyan px-3 py-2">Providers</a>
                <a href="#report" className="hover:text-neon-cyan px-3 py-2">Report</a>

                <button onClick={toggleTheme} className="p-2 hover:bg-white/10 rounded-full">
                  {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/90 backdrop-blur-xl border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#learn" className="block px-3 py-2">Learn</a>
              <a href="#story" className="block px-3 py-2">Evolution</a>
              <a href="#cdn" className="block px-3 py-2">Providers</a>
              <a href="#report" className="block px-3 py-2">Report</a>
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-20 pb-20">

        {/* HERO */}
        <section className="relative max-w-5xl mx-auto px-4 mb-24">
          <motion.div style={{ y: yHero }}>
            <a href="https://t.me/wasemotion" target="_blank" rel="noreferrer" className="block group cursor-pointer">

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[2/1] border border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.2)]">
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />

                {/* Grid Animation */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(200px)_scale(3)] animate-[pulse_4s_infinite]" />

                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-4xl md:text-7xl font-cyber font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-cyan to-white drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                      TUNNEL EMOTIONS
                    </h1>
                    <p className="text-neon-purple font-tech text-xl uppercase tracking-widest mt-4">Return to the Source</p>
                  </motion.div>
                </div>

              </div>

            </a>
          </motion.div>
        </section>

        {/* COMMUNITY CARDS */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <a href="https://t.me/cnnetworkofficial" target="_blank">
              <GlassCard className="h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4">
                  <Globe size={32} className="text-neon-cyan" />
                </div>
                <h3 className="font-cyber text-xl text-white">CN Network</h3>
                <p className="text-gray-400 text-sm">Official Community</p>
              </GlassCard>
            </a>

            <a href="https://t.me/jioxt" target="_blank">
              <GlassCard className="h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4">
                  <Zap size={32} className="text-neon-pink" />
                </div>
                <h3 className="font-cyber text-xl text-white">Owner (jioxt)</h3>
                <p className="text-gray-400 text-sm">Visionary & Leader</p>
              </GlassCard>
            </a>

            <a href="https://t.me/iitmc" target="_blank">
              <GlassCard className="h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                  <Share2 size={32} className="text-neon-green" />
                </div>
                <h3 className="font-cyber text-xl text-white">Friends (IITMC)</h3>
                <p className="text-gray-400 text-sm">Allies & Partners</p>
              </GlassCard>
            </a>

          </div>
        </section>

        {/* WHAT IS CNNETWORK */}
        <section id="learn" className="max-w-7xl mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-cyber font-bold">
              What is <span className="text-neon-cyan">CNNETWORK</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              A global learning hub about CDNs, routing, cloud, and internet infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <Cloud className="w-12 h-12 text-neon-cyan mb-4" />
              <h3 className="text-2xl font-bold">Learn</h3>
              <p className="text-gray-400">Understand CDNs, Cloud, Routing & Networking.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <Share2 className="w-12 h-12 text-neon-pink mb-4" />
              <h3 className="text-2xl font-bold">Share</h3>
              <p className="text-gray-400">Knowledge sharing through community.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <Shield className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-2xl font-bold">Protect</h3>
              <p className="text-gray-400">Security awareness & safe internet practices.</p>
            </div>

          </div>
        </section>

        {/* STORY TIMELINE */}
        <section id="story" className="max-w-4xl mx-auto px-4 mb-32">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-cyber font-bold">The Free Internet Era</h2>
            <p className="text-neon-cyan font-tech uppercase tracking-widest">A Lost Chapter</p>
          </div>

          <div className="space-y-16">
            {STORY_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  {step.content.map((p, i) => (
                    <p key={i} className="text-gray-300 mb-2">{p}</p>
                  ))}
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </section>

        {/* PRIVACY CONCEPTS */}
        <section className="max-w-5xl mx-auto px-4 mb-32">
          <div className="border border-white/10 rounded-3xl p-10 bg-white/5 text-center">

            <div className="flex justify-center gap-6 mb-8">
              <Lock className="w-10 h-10 text-neon-cyan" />
              <Terminal className="w-10 h-10 text-neon-purple" />
            </div>

            <h2 className="text-3xl font-cyber mb-6">Privacy Concepts</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["VPN", "SNI", "SSH", "WebSockets"].map(term => (
                <div key={term} className="p-4 border border-white/10 rounded-lg bg-black/40 text-neon-cyan font-tech">
                  {term}
                </div>
              ))}
            </div>

            <p className="bg-red-500/20 border border-red-500/40 p-4 rounded-lg text-red-300 text-sm">
              LEGAL NOTICE: CNNETWORK is for educational networking concepts ONLY.
              No illegal use is supported.
            </p>

          </div>
        </section>

        {/* CDN LIST */}
        <section id="cdn" className="max-w-7xl mx-auto px-4 mb-32">
          <h2 className="text-center text-4xl font-cyber mb-6">Provider Matrix</h2>
          <p className="text-center text-gray-400 mb-12">Modern Internet Backbone</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROVIDERS.map((provider, idx) => (
              <GlassCard key={idx} className="p-4 hover:border-neon-cyan/30">
                <div className="text-neon-cyan font-tech text-xs uppercase border-b border-white/5 pb-2 mb-2">
                  {provider.category}
                </div>
                <h3 className="text-lg font-bold">{provider.name}</h3>
                <p className="text-xs text-gray-400">{provider.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* REPORT BUG */}
        <section id="report" className="max-w-3xl mx-auto px-4 mb-32">
          <GlassCard className="p-10 border-neon-purple/30">

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-neon-purple/20">
                <Ghost className="w-8 h-8 text-neon-purple" />
              </div>
              <div>
                <h2 className="text-2xl font-cyber">Found a Bugh*st?</h2>
                <p className="text-gray-400 text-sm">Report CDN or network anomalies.</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs text-gray-500">Host / CDN</label>
                <input className="w-full bg-black/40 border border-white/10 p-3 rounded-lg" placeholder="e.g. cdn.example.com" />
              </div>

              <div>
                <label className="text-xs text-gray-500">Description</label>
                <textarea className="w-full bg-black/40 border border-white/10 p-3 rounded-lg h-32" placeholder="Describe the issue..." />
              </div>

              <button className="w-full bg-gradient-to-r from-neon-purple to-fuchsia-600 py-4 rounded-lg font-bold flex items-center justify-center gap-2">
                <Send size={18} />
                Submit Report
              </button>
            </form>

          </GlassCard>
        </section>

        {/* GLOSSARY */}
        <section className="max-w-5xl mx-auto px-4 mb-32">
          <h2 className="text-3xl font-cyber mb-8 border-l-4 border-neon-cyan pl-4">Tech Glossary</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GLOSSARY.map((item, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-neon-cyan font-bold text-lg mb-2">{item.term}</h3>
                <p className="text-gray-400 text-sm">{item.def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-4xl mx-auto px-4 mb-32 text-center">
          <h2 className="text-3xl font-cyber mb-4">About Us</h2>
          <p className="text-gray-400 mb-8">
            Network engineers & cloud researchers exploring internet infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Cloud Computing", "DNS", "Security", "DevOps", "Routing"].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neon-cyan">
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/80 py-12 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

          <div className="text-center md:text-left">
            <h3 className="font-cyber text-xl text-white">CNNETWORK</h3>
            <p className="text-gray-500 text-sm">Connecting community & cloud.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
            <div className="flex gap-6 text-sm text-gray-400">

              <a href="/privacy.html" className="hover:text-white">Privacy Policy</a>
              <a href="/legal.html" className="hover:text-white">Legal Notice</a>
              <a href="/terms.html" className="hover:text-white">Terms & Conditions</a>
              <a href="/contact.html" className="hover:text-white">Contact</a>

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
