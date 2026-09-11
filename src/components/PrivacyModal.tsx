import React from 'react';
import { X, ShieldCheck, Lock, HardDrive, Mail } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0d1424] border border-slate-700/80 shadow-2xl shadow-black p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-heading"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-heading" className="text-xl font-bold text-white">
                Privacy Policy
              </h3>
              <p className="text-xs text-slate-400">
                Chrome Account Switcher • Effective Date: 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-sm text-slate-300 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-slate-200 text-sm">
              Chrome Account Switcher is designed to help you switch between your existing Chrome profiles. It does not need your Google passwords or ask you to enter your account credentials into the application.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-blue-400" />
              1. Information We Do Not Collect
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>We do not collect, request, or store your Google passwords or two-factor authentication tokens.</li>
              <li>We do not read or record your browsing history, web form submissions, or search queries.</li>
              <li>We do not transmit your profile passwords or personal browsing data to any external server.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              2. How The Windows Helper Operates
            </h4>
            <p className="text-slate-400">
              The Chrome Account Switcher Windows helper communicates locally on your machine with Google Chrome to identify open profile windows and execute profile focus commands. All keyboard shortcut handling is executed locally to switch active windows.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-2">
              3. Telemetry and Updates
            </h4>
            <p className="text-slate-400">
              The application may periodically check for software updates or report basic version compatibility to ensure proper operation across Windows 10 and Windows 11 updates.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              4. Contact & Support
            </h4>
            <p className="text-slate-400">
              If you have any questions or inquiries regarding privacy practices, please contact us at:{' '}
              <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-blue-400 underline hover:text-blue-300">
                {APP_CONFIG.supportEmail}
              </a>
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
