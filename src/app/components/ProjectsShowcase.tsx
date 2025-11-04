"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PROJECTS from "@/data/projects";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function ProjectsShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative"
          >
            {/* Card Container */}
            <div 
              className="relative card-glass overflow-hidden transition-all duration-500 hover:scale-105 p-8 h-full bg-black/80 backdrop-blur-xl"
              style={{
                boxShadow: hoveredId === project.id ? `0 0 60px ${project.color}40` : 'none',
                borderColor: hoveredId === project.id ? `${project.color}60` : 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Live Preview - iframe of actual website */}
                {project.link ? (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-black/40 border border-white/10 group-hover:border-white/20 transition-all">
                    <iframe
                      src={project.link}
                      className="absolute inset-0 w-full h-full border-0"
                      style={{
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                        width: '200%',
                        height: '200%'
                      }}
                      title={`${project.title} preview`}
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts"
                    />
                    {/* Overlay to prevent interaction */}
                    <div className="absolute inset-0 cursor-pointer" onClick={() => window.open(project.link, '_blank')} />
                    {/* Gradient overlay for better visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                    {/* Click to visit indicator */}
                    <div className="absolute bottom-2 right-2 px-3 py-1 bg-black/80 rounded-full text-xs text-white/60 backdrop-blur-sm pointer-events-none">
                      Live Preview
                    </div>
                  </div>
                ) : project.image ? (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-black/40 border border-white/10 group-hover:border-white/20 transition-all">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  </div>
                ) : project.id === "phonepe-integration" ? (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-black/40 border border-white/10 group-hover:border-white/20 transition-all flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="#f59e0b" fillOpacity="0.2" />
                        <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12zm12-8a8 8 0 100 16 8 8 0 000-16z" fill="#f59e0b" />
                        <rect x="28" y="28" width="8" height="8" rx="2" fill="#fff" fillOpacity="0.7" />
                      </svg>
                      <div className="mt-2 text-sm text-yellow-400 font-semibold">PhonePe Integration</div>
                      <div className="text-xs text-yellow-200 opacity-70">Payment Gateway Placeholder</div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-black/40 border border-white/10 group-hover:border-white/20 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center space-y-2">
                        <div className="text-sm opacity-60">Project Preview</div>
                        <div className="text-xs opacity-40">Internal Project</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Title & Links */}
                <div className="flex items-start justify-between gap-4">
                  <h3 
                    className="text-2xl font-black text-white tracking-tight"
                    style={{
                      textShadow: `0 0 20px ${project.color}80`
                    }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 card-glass rounded-xl hover:bg-white/20 transition-colors"
                        style={{ borderColor: project.color }}
                      >
                        <ExternalLink className="w-5 h-5" style={{ color: project.color }} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 card-glass rounded-xl hover:bg-white/20 transition-colors"
                        style={{ borderColor: project.color }}
                      >
                        <Github className="w-5 h-5" style={{ color: project.color }} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Impact Badge */}
                {project.impact && (
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm"
                    style={{
                      background: `${project.color}20`,
                      border: `2px solid ${project.color}60`,
                      color: project.color
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    {project.impact}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 card-glass text-white text-sm font-semibold rounded-full hover:scale-110 transition-transform"
                      style={{
                        borderColor: `${project.color}40`,
                        background: `${project.color}10`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features - Expandable */}
                <motion.div
                  initial={false}
                  animate={{
                    height: hoveredId === project.id ? "auto" : 0,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <h4 
                      className="text-sm font-black uppercase tracking-wider"
                      style={{ color: project.color }}
                    >
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-400 flex items-start gap-3"
                        >
                          <span
                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Shine Effect */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
