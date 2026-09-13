import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, HardDrive, Mail, CheckCircle2, FileText } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/25 p-6 sm:p-8 max-h-[90vh] flex flex-col text-left animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-heading"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 id="privacy-heading" className="text-xl font-extrabold text-slate-950 tracking-tight">
                Privacy Policy
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Chrome Account Switcher • Effective Date: 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="mt-6 space-y-5 text-sm text-slate-600 leading-relaxed overflow-y-auto pr-2 modal-scroll">
          
          {/* Core Privacy Promise Banner */}
          <div className="p-4.5 rounded-2xl bg-blue-50/80 border border-blue-200/70 flex items-start gap-3.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs shadow-blue-600/30">
              <Lock className="w-4 h-4" />
            </div>
            <p className="text-blue-950 text-sm font-medium leading-relaxed">
              Chrome Account Switcher is built for local shortcut execution. It operates 100% offline on your device, never requests your Google passwords, and never transmits personal data.
            </p>
          </div>

          {/* Section 1 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>1. Information We Do Not Collect</span>
            </h4>
            <div className="space-y-2.5 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>We never collect, request, or store your Google passwords or 2FA credentials.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>We never read or record your browsing history, tabs, searches, or form inputs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>We never send your profile passwords or personal browsing data to any external server.</span>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-indigo-600" />
              <span>2. How The Windows Helper Operates</span>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              The Chrome Account Switcher Windows helper communicates locally on your machine with Google Chrome through native messaging. It identifies active profile window handles to bring them to focus when you press keyboard shortcuts. All keyboard event handling executes locally on your PC.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>3. Telemetry & Security</span>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              The application contains zero third-party tracking scripts, zero advertising identifiers, and zero user profiling. The setup is self-contained on your Windows machine.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-600" />
              <span>4. Contact & Inquiries</span>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              If you have any questions or feedback regarding our privacy commitments, reach out to us at:{' '}
              <a 
                href={`mailto:${APP_CONFIG.supportEmail}`} 
                className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                {APP_CONFIG.supportEmail}
              </a>
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/70">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Offline & Private</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
