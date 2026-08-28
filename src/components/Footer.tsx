import React from 'react';
import { ShieldCheck, Heart, MapPin, Smartphone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & London Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <circle cx="8" cy="8" r="2.2" />
                  <circle cx="16" cy="8" r="2.2" />
                  <circle cx="4.5" cy="12.5" r="1.8" />
                  <circle cx="19.5" cy="12.5" r="1.8" />
                  <path d="M12 11.5c-3.2 0-5.8 2.3-5.8 5.1 0 1.9 1.6 3.4 3.8 3.4 1.2 0 1.5-.7 2-.7s.8.7 2 .7c2.2 0 3.8-1.5 3.8-3.4 0-2.8-2.6-5.1-5.8-5.1z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight font-['Outfit',sans-serif]">
                  London Pet ID
                </span>
                <span className="block text-[11px] text-amber-400 font-semibold">
                  Smart NFC Tags • $29 for Life
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Durable, contactless pet identification tags serving dog and cat families across London, St. Thomas, Woodstock, Strathroy, and Middlesex County, Ontario.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-400 font-semibold">Community:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="London Pet ID on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="London Pet ID on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-black"
                aria-label="London Pet ID on TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('how-it-works')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('comparison')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  NFC vs Microchip
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('durability')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Durability & Waterproofing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('pricing')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Pricing ($29 One-Time)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('faq')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  FAQ & Compatibility
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Local Pet Safety Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Local London Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenModal('resources')}
                  className="hover:text-amber-400 transition-colors text-slate-400 text-left"
                >
                  London & Middlesex Lost & Found Pets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('resources')}
                  className="hover:text-amber-400 transition-colors text-slate-400 text-left"
                >
                  City of London Pet Licensing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('resources')}
                  className="hover:text-amber-400 transition-colors text-slate-400 text-left"
                >
                  Humane Society London & Middlesex
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('resources')}
                  className="hover:text-amber-400 transition-colors text-slate-400 text-left"
                >
                  24/7 Regional Emergency Vet Hospital
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Support & Policies */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Customer Care
            </h4>
            <p className="text-xs text-slate-400">
              Need assistance or have a question about programming your tag?
            </p>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="font-semibold text-white">help@londonpetid.ca</p>
              <p className="text-slate-400">Workshop: London, ON, Canada</p>
            </div>
            <div className="pt-1 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onOpenModal('contact')}
                className="text-amber-400 hover:text-amber-300 font-bold underline"
              >
                Send Us a Message
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={() => onOpenModal('refund')}
                className="text-slate-400 hover:text-slate-200 underline"
              >
                $10 Re-programming
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} London Pet ID. All rights reserved. Proudly handcrafted for Southwestern Ontario pet lovers.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('refund')}
              className="hover:text-slate-300 transition-colors"
            >
              Refund & Warranty
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
