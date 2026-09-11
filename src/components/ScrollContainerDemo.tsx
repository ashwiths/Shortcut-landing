import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  CheckCircle2, 
  Briefcase, 
  User, 
  Code2, 
  Palette, 
  Clock, 
  Layers, 
  ChevronDown,
  Sparkles,
  MousePointer,
  Cpu
} from 'lucide-react';

interface ProfileItem {
  id: number;
  name: string;
  category: string;
  email: string;
  shortcut: string;
  keyNum: string;
  color: string;
  accentBorder: string;
  bgGlow: string;
  badge: string;
  icon: React.ReactNode;
  activeTabs: string[];
  status: string;
}

const demoProfiles: ProfileItem[] = [
  {
    id: 1,
    name: 'Work Account',
    category: 'Company & Enterprise',
    email: 'alex@company.corp',
    shortcut: 'Alt + 1',
    keyNum: '1',
    color: 'from-blue-600 to-cyan-500',
    accentBorder: 'border-blue-500',
    bgGlow: 'from-blue-600/20 to-cyan-500/10',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    icon: <Briefcase className="w-5 h-5 text-blue-400" />,
    activeTabs: ['Inbox (4) - Gmail', 'Sprint Board - Jira', 'Team Sync - Meet'],
    status: 'Active Window • Display 1',
  },
  {
    id: 2,
    name: 'Personal Life',
    category: 'Personal & Entertainment',
    email: 'alex.personal@gmail.com',
    shortcut: 'Alt + 2',
    keyNum: '2',
    color: 'from-emerald-500 to-teal-400',
    accentBorder: 'border-emerald-500',
    bgGlow: 'from-emerald-600/20 to-teal-500/10',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    icon: <User className="w-5 h-5 text-emerald-400" />,
    activeTabs: ['YouTube Subscriptions', 'Google Photos - 2026', 'Reddit Tech'],
    status: 'Ready in Background',
  },
  {
    id: 3,
    name: 'Dev & Cloud',
    category: 'Engineering & DevOps',
    email: 'devops@cloud-stack.io',
    shortcut: 'Alt + 3',
    keyNum: '3',
    color: 'from-violet-600 to-purple-400',
    accentBorder: 'border-purple-500',
    bgGlow: 'from-violet-600/20 to-purple-500/10',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    activeTabs: ['PR #421 - GitHub', 'AWS Console', 'Datadog Metrics'],
    status: 'Ready in Background',
  },
  {
    id: 4,
    name: 'Client Projects',
    category: 'Consulting & Design',
    email: 'alex@consultancy.agency',
    shortcut: 'Alt + 4',
    keyNum: '4',
    color: 'from-amber-500 to-orange-400',
    accentBorder: 'border-amber-500',
    bgGlow: 'from-amber-600/20 to-orange-500/10',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    icon: <Palette className="w-5 h-5 text-amber-400" />,
    activeTabs: ['Design System - Figma', 'Client Feedback Hub', 'Stripe Invoices'],
    status: 'Ready in Background',
  },
];

export const ScrollContainerDemo: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState<number>(1);
  const [switchLatency, setSwitchLatency] = useState<string>('0.02s (Instant)');
  const [switchMethod, setSwitchMethod] = useState<'scroll' | 'click'>('scroll');
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef<boolean>(false);
  const rafId = useRef<number | null>(null);

  // Throttled high-performance scroll observer using requestAnimationFrame (ZERO LAG)
  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    if (!scrollRef.current) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestId = 1;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = demoProfiles[index].id;
        }
      });

      setActiveProfileId((prev) => {
        if (prev !== closestId) {
          setSwitchLatency('0.03s (Instant)');
          setSwitchMethod('scroll');
          return closestId;
        }
        return prev;
      });
    });
  }, []);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Instant smooth jump to profile when clicking key or card
  const selectProfile = (id: number) => {
    setActiveProfileId(id);
    setSwitchLatency('0.01s (Ultra-fast)');
    setSwitchMethod('click');

    const index = demoProfiles.findIndex((p) => p.id === id);
    const targetCard = cardRefs.current[index];

    if (targetCard && scrollRef.current) {
      isProgrammaticScroll.current = true;
      const container = scrollRef.current;
      const cardTop = targetCard.offsetTop;
      const containerHalfHeight = container.clientHeight / 2;
      const cardHalfHeight = targetCard.clientHeight / 2;
      const targetScrollTop = Math.max(0, cardTop - containerHalfHeight + cardHalfHeight);

      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 450);
    }
  };

  const currentProfile = demoProfiles.find((p) => p.id === activeProfileId) || demoProfiles[0];

  return (
    <section id="demo" className="py-24 bg-transparent relative border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Clear, Focused Copy */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Interactive Switch Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            See how fast switching feels.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Scroll inside the list below or click any shortcut to see how instantly Chrome accounts transition without reloading or closing tabs.
          </p>
        </div>

        {/* Interactive Demo Card */}
        <div className="reveal-on-scroll rounded-3xl bg-white/95 border border-slate-300/80 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Top Bar: Controls & Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 bg-slate-50/90">
            {/* Live Indicator */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                LIVE INTERACTIVE SIMULATION
              </span>
            </div>

            {/* Telemetry Stats */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Switch Latency:</span>
                <span className="font-bold text-emerald-600">{switchLatency}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                <span>Trigger:</span>
                <span className="font-bold text-blue-700 uppercase">{switchMethod}</span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Split: Smooth Profile Scroll List & Live Inspector */}
          <div className="p-6 sm:p-8 pb-8 sm:pb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (7 cols): Silky Smooth Scroll List */}
            <div className="lg:col-span-7 flex flex-col">
              
              {/* Quick Jump Keyboard Strip */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500 uppercase font-semibold flex items-center gap-1.5">
                    <MousePointer className="w-3.5 h-3.5 text-blue-600" />
                    Click shortcut or scroll list:
                  </span>
                  <span className="text-xs font-mono text-blue-700 font-semibold flex items-center gap-1">
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                    Scrollable
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {demoProfiles.map((p) => {
                    const isSelected = p.id === activeProfileId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => selectProfile(p.id)}
                        className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border text-xs font-mono font-semibold transition-all duration-150 ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25 scale-[1.02]'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span className="text-[11px] opacity-80">Alt+</span>
                        <span className="font-bold text-sm">{p.keyNum}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scrollable Container (NO smooth-scroll fighting wheel, hardware accelerated) */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                tabIndex={0}
                aria-label="Scrollable Chrome Profiles List"
                className="relative h-[340px] rounded-2xl bg-[#090e17] border border-slate-800 overflow-y-auto p-4 space-y-3.5 shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain',
                }}
              >
                {demoProfiles.map((p, idx) => {
                  const isActive = p.id === activeProfileId;
                  return (
                    <div
                      key={p.id}
                      ref={(el) => { cardRefs.current[idx] = el; }}
                      onClick={() => selectProfile(p.id)}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border text-left ${
                        isActive
                          ? `bg-slate-800/90 ${p.accentBorder} shadow-lg shadow-black/40 ring-1 ring-blue-400/40 translate-x-1`
                          : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 opacity-75 hover:opacity-100'
                      }`}
                      style={{
                        transform: isActive ? 'scale(1.01)' : 'scale(1)',
                        transition: 'transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-slate-800 border border-slate-700/80 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                            {p.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                                {p.name}
                              </h4>
                              {isActive && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 font-mono mt-0.5">
                              {p.email}
                            </p>
                          </div>
                        </div>

                        {/* Visual Keyboard Shortcut Badge */}
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <span className={`kbd-key text-xs px-2 py-0.5 ${isActive ? 'active' : ''}`}>
                            {p.shortcut}
                          </span>
                        </div>
                      </div>

                      {/* Open Tabs Snapshot */}
                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase text-slate-500 mr-1">
                          Open Tabs:
                        </span>
                        {p.activeTabs.map((tab, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[11px] px-2 py-0.5 rounded-md border font-sans ${
                              isActive
                                ? 'bg-slate-800 text-slate-200 border-slate-700'
                                : 'bg-slate-900/60 text-slate-400 border-slate-800'
                            }`}
                          >
                            {tab}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 text-center text-xs font-mono text-slate-500">
                Tip: Use mouse wheel or trackpad inside box to switch profiles effortlessly
              </div>
            </div>

            {/* Right Column (5 cols): Clear Live State Inspection */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              
              {/* Active Profile Status Card */}
              <div className={`p-5 rounded-2xl border transition-all duration-300 bg-gradient-to-br ${currentProfile.bgGlow} bg-slate-900 border-slate-700/80 shadow-xl text-white`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Target Chrome Window
                  </span>
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${currentProfile.badge}`}>
                    {currentProfile.shortcut}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentProfile.color} flex items-center justify-center text-white shadow-lg`}>
                    {currentProfile.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white tracking-tight">
                      {currentProfile.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      {currentProfile.category}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-slate-400">Session State:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Preserved Intact
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-slate-400">Tab Reloads:</span>
                    <span className="text-emerald-400 font-bold">0 (Zero reloads)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-slate-400">Switch Duration:</span>
                    <span className="text-cyan-300 font-bold">{switchLatency}</span>
                  </div>
                </div>
              </div>

              {/* Clarity Explainer Box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm text-slate-800">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>Why This Matters</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Normally, switching accounts takes 4–5 manual clicks through Chrome's top-right profile avatar. With this utility, a single keystroke brings the exact profile window forward instantly — without disturbing existing forms, video calls, or tabs.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
