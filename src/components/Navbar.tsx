import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { handleDownload } from '../config';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrivacy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Shortcuts', href: '#shortcuts' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Installation', href: '#installation' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF6E3]/90 backdrop-blur-md border-b border-black/10 py-3 shadow-md shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo (Balanced flex-1 for true center alignment) */}
          <div className="flex-1 flex justify-start items-center">
            <a href="#" className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg">
              <Logo size="md" textColor="text-slate-900" />
            </a>
          </div>

          {/* Center: Desktop Nav Links (Mathematically Dead-Center) */}
          <div className="hidden md:flex flex-initial justify-center items-center">
            <nav className="flex items-center space-x-1 lg:space-x-1.5 bg-black/[0.04] p-1.5 rounded-full border border-black/10 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-black rounded-full hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenPrivacy}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-black rounded-full hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap"
              >
                Privacy
              </button>
            </nav>
          </div>

          {/* Right: Actions (Balanced flex-1 to keep center pill perfectly centered) */}
          <div className="flex-1 flex justify-end items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF6E3] whitespace-nowrap"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download</span>
                <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-mono">Win</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handleDownload}
                aria-label="Download for Windows"
                className="p-2 text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-black hover:bg-black/5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDF6E3] border-b border-black/10 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrivacy();
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
            >
              Privacy Policy
            </button>
          </div>
          <div className="pt-2 border-t border-black/10">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleDownload(e);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows (10 & 11)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
