import React from 'react';
import { Logo } from './Logo';
import { APP_CONFIG } from '../config';
import { ArrowUp } from 'lucide-react';
import { smoothScrollTo } from '../utils/animations';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    smoothScrollTo(0, 0, 850);
  };

  return (
    <footer className="bg-[#F5ECCE] border-t border-black/10 py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-black/10">
          
          {/* Brand and Tagline */}
          <div className="max-w-sm">
            <a href="#" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">
              <Logo size="md" textColor="text-slate-900" />
            </a>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Fast switching for your Chrome profiles.
            </p>
            <div className="mt-2 text-xs text-slate-600 font-mono">
              Designed for Windows 10 & 11 • Version {APP_CONFIG.version}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-black transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-black transition-colors">
              How It Works
            </a>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Privacy
            </button>
            <a
              href={`mailto:${APP_CONFIG.supportEmail}`}
              className="hover:text-black transition-colors"
            >
              Support
            </a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/80 border border-slate-300 text-slate-700 hover:text-black hover:bg-white transition-colors shadow-sm"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright and Legal Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            © 2026 Chrome Account Switcher. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-500">
            Google Chrome is a trademark of Google LLC. Chrome Account Switcher is an independent utility and is not affiliated with Google LLC.
          </div>
        </div>

      </div>
    </footer>
  );
};
