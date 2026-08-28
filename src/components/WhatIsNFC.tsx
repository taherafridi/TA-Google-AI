import React from 'react';
import { Smartphone, BatteryCharging, QrCode, Shield, Check, Sparkles, Radio } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface WhatIsNFCProps {
  onOpenSimulator: () => void;
}

export const WhatIsNFC: React.FC<WhatIsNFCProps> = ({ onOpenSimulator }) => {
  return (
    <section id="what-is-nfc" className="py-16 md:py-24 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            Plain-Language Technology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            What Is an NFC Pet ID Tag?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            NFC stands for <strong>Near Field Communication</strong> — the exact same secure, tap-and-go technology your phone uses for contactless payments.
          </p>
        </div>

        {/* 2-Column Explainer with Product Visual & 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Product & Feature Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xs">
              <div className="space-y-4">
                <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-md">
                  Pre-Programmed at Purchase
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                  Ready to clip on. Zero setup on your phone.
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  When you order, you simply tell us your pet’s name, your phone number, and any special care instructions (like "Needs daily medication" or "Microchipped").
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We program that information directly into the tag’s tiny microchip right here in London. When it arrives in your mailbox, <strong className="text-slate-900">you clip it to your pet's collar and you’re done.</strong>
                </p>

                <div className="pt-2">
                  <button
                    id="what-is-nfc-demo-btn"
                    onClick={onOpenSimulator}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100/90 hover:bg-amber-200 border border-amber-300/80 px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-amber-700" />
                    <span>See what finder sees on their phone</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Hardware image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
              <img
                src={IMAGES.petIdProduct}
                alt="London Pet ID hardware durable tag"
                referrerPolicy="no-referrer"
                className="w-full h-52 object-cover object-center group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200">
                Encapsulated Waterproof Microchip
              </div>
            </div>
          </div>

          {/* Right: The 4 "NO FRICTION" Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: No Apps */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                  No App to Download
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whoever finds your lost dog or cat doesn't need to visit the App Store or install anything. Modern phones read the tag natively the moment it touches the collar.
              </p>
            </div>

            {/* Card 2: Zero Batteries */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif] mb-1">
                Zero Batteries to Charge
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                The tag never runs out of juice. It is passively energized by the radio field of the finder's phone in a fraction of a second. It works forever.
              </p>
            </div>

            {/* Card 3: No Blurry QR Codes */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif] mb-1">
                No Fumbling with QR Codes
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wriggling pets, low light, muddy collars, and scratched camera lenses make QR codes notoriously difficult to scan. NFC works through dirt and darkness.
              </p>
            </div>

            {/* Card 4: No Account / No Subscription */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif] mb-1">
                No Cloud Account or Ads
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                No password to remember, no website outage risk, and no recurring $8/month subscription bill. Your contact details are stored securely on the hardware chip.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
