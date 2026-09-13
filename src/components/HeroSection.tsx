import React from 'react';
import { HeroVisual } from './HeroVisual';
import { scrollToDownload } from '../config';
import { Download, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Decorative Mesh / Dots */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left: Media Visual Demo */}
          <div className="lg:col-span-5 w-full flex items-center justify-center order-2 lg:order-1">
            <HeroVisual />
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start order-1 lg:order-2">
            {/* Tag / Eyebrow matching reference image 2 */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" />
              <span className="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
                BUILT FOR PRODUCTIVITY
              </span>
            </div>

            {/* Main Heading - Clean 2 Lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
              <span className="block">Switch Chrome accounts.</span>
              <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                In seconds.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
              Jump between your Chrome profiles instantly with simple keyboard shortcuts — without closing your tabs, losing unsaved work, or disturbing your sessions.
            </p>

            {/* 2x2 Feature Checklist with Checkmarks (matching reference image 2) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Instant keyboard switching</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Preserves open tabs & work</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Works across all profiles</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100% offline, fast & secure</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#download"
                onClick={scrollToDownload}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                {/* Windows 4-square icon */}
                <svg
                  className="w-4 h-4 fill-current text-white"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 12.402l35.689-4.86.016 34.423-35.67.203zm35.67 33.529l.026 34.453-35.67-4.891-.026-29.359zm4.327-39.043l47.997-6.888v41.699l-47.997.105zm47.999 39.539l-.002 41.573-47.997-6.732v-34.739z" />
                </svg>
                <span>Download for Windows</span>
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-800 bg-white/80 hover:bg-white border border-slate-300/90 rounded-2xl shadow-xs transition-all duration-200 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </a>
            </div>

            {/* Subtitle / OS compatibility */}
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Windows 10 & 11 • Free to download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
