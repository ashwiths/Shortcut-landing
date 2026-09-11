import React from 'react';
import { ShieldCheck, Lock, ExternalLink, KeyRound, EyeOff } from 'lucide-react';

interface PrivacySectionProps {
  onOpenPrivacy: () => void;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ onOpenPrivacy }) => {
  return (
    <section id="privacy" className="py-24 bg-transparent relative border-t border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-3xl bg-white/85 border border-black/10 p-8 sm:p-12 shadow-xl shadow-black/5">
          <div className="max-w-3xl">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security & Privacy</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Your accounts stay yours.
            </h2>

            {/* Main Required Content */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              Chrome Account Switcher is designed to help you switch between your existing Chrome profiles. It does not need your Google passwords or ask you to enter your account credentials into the application.
            </p>

            {/* 3 Core Trust Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <KeyRound className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-sm font-bold text-slate-900">No Passwords</div>
                <div className="text-xs text-slate-600 mt-1">
                  Never asks for your Google or workspace credentials.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Lock className="w-5 h-5 text-indigo-600 mb-2" />
                <div className="text-sm font-bold text-slate-900">Native Window Control</div>
                <div className="text-xs text-slate-600 mt-1">
                  Switches active window focus directly on your Windows PC.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <EyeOff className="w-5 h-5 text-cyan-700 mb-2" />
                <div className="text-sm font-bold text-slate-900">Session Preserved</div>
                <div className="text-xs text-slate-600 mt-1">
                  Your open tabs, cookies, and logins remain untouched.
                </div>
              </div>
            </div>

            {/* Privacy Policy Link */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center">
              <button
                onClick={onOpenPrivacy}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
              >
                <span>Read our Privacy Policy</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
