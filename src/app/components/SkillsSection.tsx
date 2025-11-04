'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Server, Database, Cloud } from 'lucide-react';

const techStack = {
  "Languages": { 
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
    icon: Code2,
    color: "#ef4444"
  },
  "Frontend": { 
    items: ["Next.js", "React.js", "React Native", "HTML/CSS", "Tailwind CSS"],
    icon: Palette,
    color: "#a855f7"
  },
  "Backend": { 
    items: ["Nest.js", "FastAPI", "Node.js", "Express.js"],
    icon: Server,
    color: "#0ea5e9"
  },
  "Databases": { 
    items: ["PostgreSQL", "MongoDB", "Supabase"],
    icon: Database,
    color: "#10b981"
  },
  "Cloud & DevOps": { 
    items: ["Azure", "Vercel", "Render", "Docker", "Git", "GitHub", "CI/CD", "REST APIs"],
    icon: Cloud,
    color: "#f59e0b"
  },
};

export default function SkillsSection() {
  const categories = Object.entries(techStack);
  const topRow = categories.slice(0, 3); // Languages, Frontend, Backend
  const bottomRow = categories.slice(3, 5); // Databases, Cloud & DevOps

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topRow.map(([category, { items, icon: Icon, color }], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div 
                className="relative h-full bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:border-white/20"
                style={{
                  boxShadow: `0 0 30px ${color}15`
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}20, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ borderColor: `${color}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h4 
                      className="text-xl font-bold tracking-tight"
                      style={{ color }}
                    >
                      {category}
                    </h4>
                  </div>

                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/10 transition-all cursor-default"
                        style={{ 
                          borderColor: `${color}20`,
                          boxShadow: `0 0 10px ${color}10`
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bottomRow.map(([category, { items, icon: Icon, color }], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div 
                className="relative h-full bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:border-white/20"
                style={{
                  boxShadow: `0 0 30px ${color}15`
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}20, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ borderColor: `${color}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h4 
                      className="text-xl font-bold tracking-tight"
                      style={{ color }}
                    >
                      {category}
                    </h4>
                  </div>

                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (idx + 3) * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/10 transition-all cursor-default"
                        style={{ 
                          borderColor: `${color}20`,
                          boxShadow: `0 0 10px ${color}10`
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}