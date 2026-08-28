import React from 'react';
import { Droplets, Snowflake, Feather, Sparkles, ShieldCheck, Sun, Compass } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const Durability: React.FC = () => {
  const durabilityPoints = [
    {
      icon: Droplets,
      title: '100% Submersible Waterproof',
      desc: 'Whether your lab takes a plunge in the Thames River or runs through mud puddles, the IP68 sealed resin enclosure protects the microchip completely.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      icon: Snowflake,
      title: 'Tested for London Winters',
      desc: 'Engineered to withstand Canadian -30°C freezing blizzards, sidewalk salt, slush, and heavy summer humidity without cracking.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: Feather,
      title: 'Featherlight & Silent (4.5g)',
      desc: 'Weighs less than a two-dollar toonie. No noisy metal clanking keeping you awake at night or weighing down a 5 lb kitten’s neck.',
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: ShieldCheck,
      title: 'Scratch & Chew Resistant',
      desc: 'Unlike soft aluminum tags where etched phone numbers scratch off in 6 months, our internal NFC antenna stays safely embedded forever.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <section id="durability" className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-blue-900 bg-blue-100 border border-blue-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
            All-Weather Durability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Made for Real Life in Southwestern Ontario
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From snowy winter walks in Springbank Park to backyard digging and rainy cat zoomies — built to endure everyday pet adventures.
          </p>
        </div>

        {/* 2 Lifestyle Photo Showcase + Durability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Images Duo */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md group relative">
                <img
                  src={IMAGES.dogTagCollar}
                  alt="Dog wearing durable London Pet ID collar tag in park"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Active Dogs in All Weather
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center font-medium">
                Tested at local off-leash dog parks
              </p>
            </div>

            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md group relative">
                <img
                  src={IMAGES.catTagCozy}
                  alt="Cat comfortably resting with lightweight London Pet ID tag"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Gentle & Quiet on Cats
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center font-medium">
                Ultra-light 4.5g design doesn't drag on collars
              </p>
            </div>
          </div>

          {/* 4 Durability Grid Points */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {durabilityPoints.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 font-['Outfit',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
