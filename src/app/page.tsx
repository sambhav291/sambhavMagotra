'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from './components/Navbar';
import ProjectsShowcase from './components/ProjectsShowcase';
import AchievementsShowcase from './components/AchievementsShowcase';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import StarField from './components/StarField';

const VantaHeroBackground = dynamic(() => import('./components/VantaHeroBackground'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-black" />
});

const ContactCenterAnimation = dynamic(() => import('./components/ContactCenterAnimation'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-black" />
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Vanta Halo Background */}
      <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
        {/* Star Field Background */}
        <StarField density={300} speed={0.5} />
        
        {/* Vanta Background - FULL WIDTH */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 1 }}>
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <VantaHeroBackground />
          </Suspense>
        </div>
        
        {/* Hero Content - Left Aligned */}
        <div className="absolute inset-0 flex items-center justify-start z-10 pointer-events-none">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-2xl space-y-6">
              <div className="space-y-3">
                <p className="text-orange-400 text-sm font-mono tracking-wider uppercase">
                  Full Stack Developer & AI Engineer
                </p>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black gradient-text leading-tight">
                  Sambhav Magotra
                </h1>
              </div>
              
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl font-light">
                Building production-grade applications with modern web tech and AI
              </p>
              
              <div className="flex gap-4 pt-6 pointer-events-auto">
                <a 
                  href="https://drive.google.com/file/d/1STdZgerfo_kxZllQVk3wUQBBiktmql_1/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20"
                >
                  Resume
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/20"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 card-glass rounded-lg font-medium text-sm hover:scale-105 hover:bg-white/10 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-12 pb-24 relative">
        {/* Star Field Background */}
        <StarField density={150} speed={0.3} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center gradient-text tracking-tight">
            Featured Projects
          </h2>
          <ProjectsShowcase />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-24 relative">
        {/* Star Field Background */}
        <StarField density={150} speed={0.3} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center gradient-text tracking-tight">
            Professional Experience
          </h2>
          <ExperienceSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-24 relative">
        {/* Star Field Background */}
        <StarField density={150} speed={0.3} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center gradient-text tracking-tight">
            Technical Arsenal
          </h2>
          <SkillsSection />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen py-24 relative">
        {/* Star Field Background */}
        <StarField density={150} speed={0.3} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center gradient-text tracking-tight">
            Achievements
          </h2>
          <AchievementsShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-24 relative bg-gradient-to-b from-black to-purple-900/20 z-20">
        {/* Star Field Background */}
        <StarField density={200} speed={0.4} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center gradient-text tracking-tight">
            Get In Touch
          </h2>
          
          {/* Grid Layout: Animation in center, content on sides */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side Content */}
            <div className="text-center lg:text-right space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Open to collaborations, freelance opportunities, and exciting projects.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:sambhavmagotra009@gmail.com"
                  className="group px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Me
                  </span>
                </a>
              </div>
            </div>

            {/* Center Animation */}
            <div className="flex items-center justify-center">
              <Suspense fallback={<div className="w-full h-[400px] bg-black/20 rounded-lg" />}>
                <ContactCenterAnimation />
              </Suspense>
            </div>

            {/* Right Side Content */}
            <div className="text-center lg:text-left space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Let&apos;s build something amazing together!
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/sambhav291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 card-glass rounded-lg font-semibold hover:scale-105 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </span>
                </a>
                
                <a
                  href="https://linkedin.com/in/sambhav-magotra-3a6187258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 card-glass rounded-lg font-semibold hover:scale-105 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Sambhav Magotra. Built with Next.js, Three.js & passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
