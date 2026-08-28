import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X, ShieldCheck, MapPin, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenSimulator: () => void;
  onScrollToSection: (id: string) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSimulator,
  onScrollToSection,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'NFC vs Microchip', target: 'comparison' },
    { label: 'Durability', target: 'durability' },
    { label: 'Pricing ($29)', target: 'pricing' },
    { label: 'Local Area', target: 'local' },
    { label: 'FAQ', target: 'faq' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(target);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-[#FAF9F6] border-b border-slate-200/40 py-4'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => onScrollToSection('hero')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.22.73 4.27 1.95 5.92L3.5 21l3.2-.43C8.28 21.43 10.07 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm2.07-5.75l-.9.92c-.5.51-.67.83-.67 1.83h-2v-.5c0-.83.33-1.5 1-2.17l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8.33c0-2.03 1.64-3.67 3.67-3.67s3.67 1.64 3.67 3.67c0 .8-.32 1.54-.87 2.09z" opacity="0" />
                {/* Modern NFC Paw Icon */}
                <circle cx="8" cy="8" r="2.2" />
                <circle cx="16" cy="8" r="2.2" />
                <circle cx="4.5" cy="12.5" r="1.8" />
                <circle cx="19.5" cy="12.5" r="1.8" />
                <path d="M12 11.5c-3.2 0-5.8 2.3-5.8 5.1 0 1.9 1.6 3.4 3.8 3.4 1.2 0 1.5-.7 2-.7s.8.7 2 .7c2.2 0 3.8-1.5 3.8-3.4 0-2.8-2.6-5.1-5.8-5.1z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight font-['Outfit',sans-serif]">
                  London Pet ID
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  London, ON
                </span>
              </div>
              <p className="text-[12px] text-slate-500 hidden sm:block">
                Smart NFC Contactless Tags • No Monthly Fees
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="hover:text-amber-600 transition-colors cursor-pointer py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="header-tap-simulator-btn"
              onClick={onOpenSimulator}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-2 rounded-lg transition-colors cursor-pointer"
              title="Test how phone taps work"
            >
              <Smartphone className="w-4 h-4 text-amber-600" />
              <span>Tap Demo</span>
            </button>

            <button
              id="header-order-now-btn"
              onClick={() => handleNavClick('order')}
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-sm shadow-amber-600/30 px-4 py-2 rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Order Your Tag</span>
              <span className="text-amber-200 font-semibold text-xs bg-amber-800/40 px-1.5 py-0.5 rounded">
                $29 CAD
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-tap-demo-btn"
              onClick={onOpenSimulator}
              className="inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200"
            >
              <Smartphone className="w-3.5 h-3.5 mr-1 text-amber-600" />
              Demo
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`mobile-nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-drawer-order-btn"
              onClick={() => handleNavClick('order')}
              className="w-full text-center py-3 px-4 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-sm"
            >
              Order Your Tag — $29 CAD
            </button>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                London & Middlesex County
              </span>
              <button
                onClick={onOpenContact}
                className="text-amber-700 font-semibold underline"
              >
                Need help? Contact us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
