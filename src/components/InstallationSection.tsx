import React from 'react';
import { Terminal, Download, CheckCircle2, Play, Wrench, Puzzle, Zap } from 'lucide-react';
import installVideo from '../assets/install.mp4';
import { handleDownload } from '../config';

export const InstallationSection: React.FC = () => {
  return (
    <section id="installation" className="py-24 bg-transparent relative border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-blue-700" />
            <span>Installation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            How to Install Chrome Account Switcher
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Follow the 4 simple steps below to set up your profiles and start switching with keyboard shortcuts.
          </p>
        </div>

        {/* 2-Column Grid: Installation Steps & Visual Video Walkthrough */}
        <div className="reveal-on-scroll mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (6 cols): 4 Detailed Steps */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Step 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-blue-400/80 ring-2 ring-blue-500/20 shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25 flex items-center justify-center font-mono font-bold text-sm">
                  1
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Step 1 — Download & Extract
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                      <Play className="w-2.5 h-2.5 fill-current text-blue-600" />
                      Video Walkthrough
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Download <code className="font-mono text-xs bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold border border-slate-200">ChromeAccountSwitcher.zip</code> and extract it to a folder on your Windows PC.
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download ChromeAccountSwitcher.zip</span>
                    </button>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      ↳ Refer to <strong className="text-blue-700 font-semibold">video walkthrough</strong> beside
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/85 border border-black/10 hover:border-blue-400/50 shadow-sm transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono font-bold text-sm">
                  2
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span>Step 2 — Install Windows Helper</span>
                    <Wrench className="w-4 h-4 text-indigo-600 inline" />
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Open the extracted folder and run <strong className="text-slate-800">Windows Helper Installer</strong>. This installs the required Windows helper and connects it with Chrome.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/85 border border-black/10 hover:border-blue-400/50 shadow-sm transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono font-bold text-sm">
                  3
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span>Step 3 — Add the Extension to Chrome</span>
                    <Puzzle className="w-4 h-4 text-sky-600 inline" />
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Open Chrome and go to <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded font-semibold border border-slate-200">chrome://extensions</code>.
                  </p>
                  
                  {/* Extension loading sub-steps */}
                  <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 space-y-1.5 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px]">a</span>
                      <span>Turn on <strong>Developer mode</strong> (toggle in the top-right corner)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px]">b</span>
                      <span>Click <strong>Load unpacked</strong> button</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px]">c</span>
                      <span>Select the <code className="font-mono text-[11px] bg-white px-1.5 py-0.5 rounded border border-slate-200 text-blue-800 font-semibold">ChromeExtension</code> folder from the extracted package</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/85 border border-black/10 hover:border-blue-400/50 shadow-sm transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono font-bold text-sm">
                  4
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span>Step 4 — Start Switching</span>
                    <Zap className="w-4 h-4 text-amber-500 inline" />
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Open Chrome Account Switcher and you're ready!
                  </p>

                  {/* Keyboard Shortcuts List */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                      Use:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      <div className="flex items-center justify-between sm:justify-start sm:gap-3 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                        <span className="kbd-key px-2 py-0.5 text-xs whitespace-nowrap">Alt + 1</span>
                        <span className="text-slate-400 font-bold">→</span>
                        <span className="font-semibold text-slate-800 font-sans whitespace-nowrap">Account 1</span>
                      </div>
                      <div className="flex items-center justify-between sm:justify-start sm:gap-3 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                        <span className="kbd-key px-2 py-0.5 text-xs whitespace-nowrap">Alt + 2</span>
                        <span className="text-slate-400 font-bold">→</span>
                        <span className="font-semibold text-slate-800 font-sans whitespace-nowrap">Account 2</span>
                      </div>
                      <div className="flex items-center justify-between sm:justify-start sm:gap-3 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                        <span className="kbd-key px-2 py-0.5 text-xs whitespace-nowrap">Alt + 3</span>
                        <span className="text-slate-400 font-bold">→</span>
                        <span className="font-semibold text-slate-800 font-sans whitespace-nowrap">Account 3</span>
                      </div>
                      <div className="flex items-center justify-between sm:justify-start sm:gap-3 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                        <span className="kbd-key px-2 py-0.5 text-xs whitespace-nowrap">Alt + 0</span>
                        <span className="text-slate-400 font-bold">→</span>
                        <span className="font-semibold text-slate-800 font-sans whitespace-nowrap">Account 10</span>
                      </div>
                    </div>
                    <div className="mt-2.5 text-xs font-mono text-slate-500 flex items-center gap-1.5 px-1">
                      <span className="text-slate-400 font-bold">...</span>
                      <span>Supports all accounts up to <strong className="text-slate-700">Alt + 0</strong> (Account 10)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (6 cols): Visual Video Walkthrough */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#0b101b] border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-md">
              
              {/* Simulated Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d17] border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="ml-2 font-semibold text-slate-300">
                    Installation Walkthrough
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Video Guide
                  </span>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative bg-black/80 p-2 sm:p-3 flex items-center justify-center">
                <video
                  src={installVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto max-h-[440px] rounded-xl object-contain shadow-lg border border-slate-800"
                >
                  <source src={installVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Bottom Details */}
              <div className="p-4 sm:p-5 bg-[#090f1a] border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-300 space-y-0.5">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Video Walkthrough: Download & Setup</span>
                  </div>
                  <p className="text-slate-400">
                    Extract package, run installer, and load extension to start switching.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all active:scale-[0.98] flex-shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .zip</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
