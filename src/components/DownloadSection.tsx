import React from 'react';
import { handleDownload, APP_CONFIG } from '../config';
import { Download, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden bg-transparent border-y border-black/10">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-radial-gradient opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Inner Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0f172a] via-[#0d1424] to-[#090e18] border border-blue-500/30 p-8 sm:p-14 shadow-2xl shadow-black/80 overflow-hidden">
          
          {/* Subtle top badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Windows Desktop Application</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to switch faster?
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Download Chrome Account Switcher for Windows and make your Chrome profiles easier to manage.
          </p>

          {/* Large CTA Button */}
          <div className="mt-10 flex flex-col items-center justify-center">
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center justify-center gap-3.5 px-9 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl shadow-2xl shadow-blue-600/35 hover:shadow-blue-600/50 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(255,252,189)]"
            >
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

            {/* Secondary text */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Windows 10 / 11</span>
              </span>
              <span>•</span>
              <span>{APP_CONFIG.fileSize}</span>
              <span>•</span>
              <span className="text-blue-400 font-semibold">Free to download</span>
            </div>
          </div>

          {/* Value Checklist */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>No Google password required</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Preserves tabs and windows</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Auto-detects up to 10 profiles</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
