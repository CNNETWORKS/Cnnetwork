import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Share2, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative z-20 py-32 px-4 bg-[#030014]">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
                    WHAT IS <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">CLOUD NETWORK?</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    More than just connectivity. It is the nervous system of the digital age. A global learning hub about CDNs, edge routing, security awareness, and the deep, emotional evolution of internet culture.
                </p>
                <div className="flex flex-wrap gap-3">
                    {['#CDNs', '#Routing', '#Privacy', '#Culture', '#Security'].map(tag => (
                        <span key={tag} className="text-sm font-mono text-neon-cyan border border-neon-cyan/30 px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            <div className="grid gap-6">
                <Card 
                    icon={<BookOpen className="text-neon-pink" />}
                    title="Learn & Master"
                    desc="Dive deep into cloud architecture, content delivery, and backend logic."
                />
                <Card 
                    icon={<Share2 className="text-neon-purple" />}
                    title="Share Knowledge"
                    desc="A community built on open exchange of information and guides."
                />
                <Card 
                    icon={<Shield className="text-neon-cyan" />}
                    title="Protect & Secure"
                    desc="Understand the threats to build better defenses. Security first."
                />
            </div>
        </div>

      </div>
    </section>
  );
};

const Card = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ x: 10 }}
        className="glass-panel p-6 rounded-xl border border-white/5 flex items-start gap-4 group hover:border-white/20 transition-colors"
    >
        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </motion.div>
);
                           
