import React from 'react';
import { HeroVisual } from './HeroVisual';
import { handleDownload } from '../config';
import { Download, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Decorative Mesh / Dots */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/25 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Cpu className="w-3.5 h-3.5 text-blue-700" />
          <span>WINDOWS • CHROME UTILITY</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1] max-w-4xl mx-auto">
          Switch Chrome accounts{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
            in seconds.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
          Jump between your Chrome profiles instantly with simple keyboard shortcuts — without closing your tabs or losing your session.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(255,252,189)]"
          >
            {/* Windows 4-square icon */}
            <svg
              className="w-5 h-5 fill-current text-white"
              viewBox="0 0 88 88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 12.402l35.689-4.86.016 34.423-35.67.203zm35.67 33.529l.026 34.453-35.67-4.891-.026-29.359zm4.327-39.043l47.997-6.888v41.699l-47.997.105zm47.999 39.539l-.002 41.573-47.997-6.732v-34.739z" />
            </svg>
            <span>Download for Windows</span>
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
          </button>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-slate-800 bg-white/80 hover:bg-white border border-slate-300/90 rounded-2xl shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4 text-slate-600" />
          </a>
        </div>

        {/* Subtitle / OS compatibility */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Windows 10 & 11 • Free to download</span>
        </div>

        {/* Live Visual Demonstration */}
        <HeroVisual />
      </div>
    </section>
  );
};
