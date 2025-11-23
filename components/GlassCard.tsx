import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, rotateX: 5, rotateY: 5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      onClick={onClick}
      className={`
        glass-panel rounded-2xl p-6 relative overflow-hidden group
        border border-white/5 hover:border-neon-cyan/30
        transition-colors duration-300
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};