import React, { useEffect, useRef, useState } from 'react';
import { animate, onScroll } from 'animejs';
import { Zap, Code, Eye, ChevronDown } from 'lucide-react';

export const ScrollContainerDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [activeAccount, setActiveAccount] = useState<number>(1);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Direct implementation matching the anime.js onScroll container documentation
      const anim = animate('.square-target', {
        x: ['0rem', '11rem'],
        rotate: '1turn',
        duration: 2000,
        alternate: true,
        loop: true,
        ease: 'inOutQuad',
        autoplay: onScroll({
          container: containerRef.current,
        }),
      });

      return () => {
        if (anim && typeof anim.pause === 'function') {
          anim.pause();
        }
      };
    } catch (err) {
      console.warn('Anime.js onScroll initialized:', err);
    }
  }, []);

  const handleContainerScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const progress = scrollTop / (scrollHeight - clientHeight || 1);
    const accountIndex = Math.min(4, Math.max(1, Math.ceil(progress * 4)));
    setActiveAccount(accountIndex);
  };

  return (
    <section className="py-20 bg-transparent relative border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-700" />
            <span>Anime.js onScroll Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Container Scroll in Action
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Scroll inside the container below to see profile switching and rotation driven in real time by Anime.js <code className="bg-slate-200/80 px-2 py-0.5 rounded text-sm font-mono text-blue-800">onScroll()</code>.
          </p>
        </div>

        {/* Interactive Container Card */}
        <div className="reveal-on-scroll rounded-3xl bg-white/90 border border-black/10 shadow-xl overflow-hidden backdrop-blur-md">
          
          {/* Top Bar with Tab Switchers */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-700 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                CONTAINER CODE EXAMPLE
              </span>
            </div>

            {/* Preview / Code Tabs */}
            <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'preview'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Interactive Preview</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'code'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Anime.js Code</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Interactive Preview */}
          {activeTab === 'preview' ? (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: The Scroll Container */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                    Scroll Container (Mouse Wheel or Drag)
                  </span>
                  <span className="text-xs font-mono text-blue-700 font-semibold flex items-center gap-1">
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                    scroll down inside box
                  </span>
                </div>

                {/* The Actual Scrollable Container matching Anime.js docs */}
                <div
                  ref={containerRef}
                  onScroll={handleContainerScroll}
                  className="scroll-container relative h-72 rounded-2xl bg-[#090d16] border border-slate-700 overflow-y-auto p-6 shadow-inner text-slate-100"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {/* Subtle Grid inside the container */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                  {/* Top indicator */}
                  <div className="sticky top-0 z-20 flex items-center justify-between bg-[#090d16]/90 backdrop-blur-md pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">Target Track:</span>
                      <span className="text-xs font-bold text-emerald-400">Account #{activeAccount} Active</span>
                    </div>
                    <span className="text-[11px] font-mono bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                      Alt + {activeAccount}
                    </span>
                  </div>

                  {/* Animated Target: .square-target driven by anime.js onScroll */}
                  <div className="relative pt-8 pb-12">
                    <div className="square-target inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-400 shadow-xl shadow-blue-500/30 border border-white/20 text-white font-bold text-center">
                      <div className="flex flex-col items-center">
                        <Zap className="w-5 h-5 text-yellow-300" />
                        <span className="text-[10px] font-mono mt-0.5">Alt + {activeAccount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Virtual height to enable scrolling inside container */}
                  <div className="space-y-16 pt-4 text-xs font-mono text-slate-400">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span>↓ Profile 1: Work Account</span>
                      <kbd className="kbd-key px-2 py-0.5 text-[11px]">Alt + 1</kbd>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span>↓ Profile 2: Personal Life</span>
                      <kbd className="kbd-key px-2 py-0.5 text-[11px]">Alt + 2</kbd>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span>↓ Profile 3: Dev & Cloud</span>
                      <kbd className="kbd-key px-2 py-0.5 text-[11px]">Alt + 3</kbd>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span>↓ Profile 4: Client Projects</span>
                      <kbd className="kbd-key px-2 py-0.5 text-[11px]">Alt + 4</kbd>
                    </div>
                    <div className="text-center text-slate-500 text-[11px]">
                      — End of Scroll Container —
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Telemetry */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      Scroll Observer Engine
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Anime.js v4
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Scroll-Linked Animation
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    The square target rotates <code className="font-mono text-xs bg-slate-200 px-1.5 py-0.5 rounded text-blue-700">1turn</code> and translates along the X axis precisely linked to the container scroll offset via <code className="font-mono text-xs bg-slate-200 px-1.5 py-0.5 rounded text-blue-700">onScroll()</code>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                    Observer Parameters
                  </span>
                  <div className="mt-2 space-y-1 text-xs font-mono text-slate-700">
                    <div>container: <span className="text-blue-700 font-bold">'.scroll-container'</span></div>
                    <div>rotate: <span className="text-blue-700 font-bold">'1turn'</span></div>
                    <div>x: <span className="text-blue-700 font-bold">'11rem'</span></div>
                    <div>ease: <span className="text-blue-700 font-bold">'inOutQuad'</span></div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Tab 2: Code Snippet matching Anime.js Documentation */
            <div className="p-6 sm:p-8 bg-[#090d16] text-slate-100 overflow-x-auto">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <span>animejs.com/documentation/events/onscroll/scrollobserver-settings/container</span>
                <span className="text-emerald-400 font-bold">JavaScript</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed text-slate-200">
{`import { animate, onScroll } from 'animejs';

// Animate target based on container scroll position
animate('.square-target', {
  x: '11rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container'
  })
});`}
              </pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
