"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ExperienceAnimation = dynamic(() => import('./ExperienceAnimation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />
});

export default function ExperienceSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Experience Card */}
          <div className="relative card-glass p-8 overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            {/* Gradient Background Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
              style={{
                background: "radial-gradient(circle at 30% 30%, #f59e0b30, transparent 70%)",
              }}
            />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg border border-orange-500/30">
                    <Briefcase className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      Candle Yogi
                      <span className="text-base font-normal text-gray-400 ml-3">
                        (formerly TradingJournal.ai)
                      </span>
                    </h3>
                    <p className="text-lg font-semibold text-orange-400 mt-1">
                      Software Developer Intern
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span>July 1, 2024 – August 14, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>Remote - Vancouver, Canada</span>
                  </div>
                </div>
              </div>

              {/* Description Points */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#f59e0b" }}
                    />
                    <p className="text-gray-300 leading-relaxed">
                      Delivered production-ready <strong className="text-white">PhonePe UPI payment flow</strong> (order initiation, HMAC verification, webhooks, idempotent retries) and built <strong className="text-white">6+ secure REST API endpoints</strong>.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#f59e0b" }}
                    />
                    <p className="text-gray-300 leading-relaxed">
                      Built the <strong className="text-white">Pricing module in React</strong> with responsive UI, validation, and integrated <strong className="text-white">unit tests (Jest, React Testing Library, Supertest)</strong> for payment flows.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#f59e0b" }}
                    />
                    <p className="text-gray-300 leading-relaxed">
                      Worked across <strong className="text-white">frontend (React)</strong> and <strong className="text-white">backend (Node.js/Express)</strong> codebases using Git workflows in a fast-paced startup environment.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#f59e0b" }}
                    />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Collaborated with product managers and designers</strong> to support client-facing demos and feature debugging.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "PhonePe API", "Jest", "React Testing Library", "Git"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 card-glass text-white text-sm font-semibold rounded-full hover:scale-110 transition-transform"
                        style={{
                          borderColor: "#f59e0b40",
                          background: "#f59e0b10",
                        }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
              style={{
                background: "linear-gradient(90deg, transparent, #f59e0b, transparent)",
              }}
            />
          </div>
        </motion.div>

        {/* Right: 3D Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-2xl overflow-hidden border border-orange-500/20"
          style={{
            background: 'radial-gradient(circle at center, #1a0a00 0%, #000000 100%)'
          }}
        >
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <ExperienceAnimation />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}
