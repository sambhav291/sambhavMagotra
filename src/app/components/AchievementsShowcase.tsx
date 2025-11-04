"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Star, Award, Rocket, Code } from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: 1,
    icon: Trophy,
    title: "Appocalypse Hackathon Winner",
    organization: "MAIT",
    date: "October 2023",
    description: "Won 1st place among 50+ teams for building an innovative mobile application solution",
    color: "#fbbf24",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 2,
    icon: Award,
    title: "CodeScript 3.0 Champion",
    organization: "DTU",
    date: "February 2025",
    description: "Secured 1st position in competitive programming hackathon against 100+ participants",
    color: "#a855f7",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    icon: Rocket,
    title: "Production System Deployment",
    organization: "Candle Yogi",
    date: "2024",
    description: "Successfully deployed PhonePe payment integration handling live UPI transactions",
    color: "#0ea5e9",
    gradient: "from-sky-500/20 to-blue-500/20"
  },
  {
    id: 4,
    icon: Code,
    title: "AI Research Platform Launch",
    organization: "Investimate.ai",
    date: "2024",
    description: "Built and launched AI-powered equity research tool achieving 85-90% time reduction",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: 5,
    icon: Users,
    title: "President - Udaan Society",
    organization: "College Technical Society",
    date: "2024 - Present",
    description: "Leading technical society, organizing workshops and managing 50+ active members",
    color: "#ec4899",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 6,
    icon: Star,
    title: "Operational Head - Tech Vision Alliance",
    organization: "Multi-College Network",
    date: "2023 - 2025",
    description: "Coordinating technical events and hackathons across multiple engineering colleges",
    color: "#f97316",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

export default function AchievementsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((achievement, idx) => {
          const Icon = achievement.icon;
          
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${achievement.gradient} backdrop-blur-xl rounded-xl border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl`}
                   style={{
                     boxShadow: `0 0 40px ${achievement.color}10`
                   }}>
                
                {/* Animated Background Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${achievement.color}30, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon & Date Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                      style={{ borderColor: `${achievement.color}40` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: achievement.color }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-lg font-bold font-display text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-medium text-sky-300">
                      {achievement.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300/80 leading-relaxed font-body">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Hackathon Wins", value: "2" },
          { label: "Projects Deployed", value: "3" },
          { label: "Leadership Roles", value: "2" },
          { label: "CGPA", value: "8.56" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <div className="text-3xl font-bold font-display gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-slate-400 font-body">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
