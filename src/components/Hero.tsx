import React from 'react';
import { Smartphone, ShieldCheck, Zap, Droplets, ArrowRight, Sparkles, MapPin, CheckCircle2, Heart } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOrderClick: () => void;
  onHowItWorksClick: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderClick,
  onHowItWorksClick,
  onOpenSimulator
}) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Subtle warm background accents */}
      <div className="absolute top-10 right-0 -z-10 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-40 left-0 -z-10 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-full py-1.5 px-3.5 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold text-amber-900 tracking-wide uppercase">
                London, Ontario & Area Pet Protection
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-['Outfit',sans-serif]">
              Never Lose <br className="hidden sm:inline" />
              <span className="text-amber-600 relative inline-block">
                Your Pet.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              A smart <strong className="font-semibold text-slate-900">NFC ID tag</strong> for London, Ontario dogs and cats. One tap helps your pet get home fast — <span className="text-slate-900 font-medium">no app, no battery, no subscriptions, and no QR code</span>, ready to use out of the box.
            </p>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-lg p-2.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">$29 CAD One-Time</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-lg p-2.5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Zero Subscriptions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 border border-slate-200/80 rounded-lg p-2.5 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">iPhone & Android</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                id="hero-order-cta-btn"
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-600/25 hover:shadow-lg hover:shadow-amber-600/30 transition-all text-base sm:text-lg cursor-pointer group"
              >
                <span>Order Now — $29 CAD</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-see-how-it-works-btn"
                onClick={onHowItWorksClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all text-base cursor-pointer"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Quote / Dispatch note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-amber-200 text-[10px] font-bold text-amber-800 flex items-center justify-center">🐕</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-emerald-200 text-[10px] font-bold text-emerald-800 flex items-center justify-center">🐈</span>
                <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-blue-200 text-[10px] font-bold text-blue-800 flex items-center justify-center">🐶</span>
              </div>
              <p>
                <strong className="text-slate-700 font-semibold">Custom programmed & dispatched from London, ON</strong> • Free lettermail shipping
              </p>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={IMAGES.nfcPhoneTap}
                  alt="Person tapping smartphone against London Pet ID NFC collar tag"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay live demonstration banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                        <Zap className="w-3.5 h-3.5 fill-amber-300" />
                        Instant Contactless Reading
                      </div>
                      <p className="text-sm font-medium text-slate-200">
                        Hold any phone near the tag — your phone number & info appear instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3">
                <button
                  id="hero-tap-simulator-card-btn"
                  onClick={onOpenSimulator}
                  className="flex items-center gap-3 text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wide flex items-center gap-1">
                      Interactive Simulator
                      <Sparkles className="w-3 h-3 text-amber-500" />
                    </span>
                    <p className="text-xs font-bold text-slate-800 group-hover:text-amber-700">
                      Tap to test finder screen →
                    </p>
                  </div>
                </button>
              </div>

              {/* Floating Durability Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-5 bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2 border border-slate-800">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold tracking-tight">100% Waterproof</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
